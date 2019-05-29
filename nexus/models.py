import logging
from datetime import date, datetime, timedelta

from django.conf import settings
from django.core.exceptions import ValidationError
from django.db import models
from django.db.models import Sum
from django.db.models.signals import pre_save, post_save, pre_delete
from django.dispatch import receiver
from django.contrib.auth import models as auth_models
from django_google_maps import fields as map_fields

from .utils import date_range_for_quarter


log = logging.getLogger('nexus')

property_ = property


class ChoicesEnum(object):
    """
    Abstract base class for enumerated types used as 'choices' fields.

    Subclasses must define an 'all' property that is a list of all the values.
    """

    @classmethod
    def as_choices(cls):
        """List of value+label tuples usable for Django ORM 'choices'."""
        choices = []
        for val in cls.all:
            label = ' '.join(w.capitalize() for w in val.split('_'))
            choices.append((val, label))
        return choices


class TimestampedMixin(models.Model):
    """A Model mixin that adds auto set created and changed fields."""
    created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    changed = models.DateTimeField(auto_now=True, null=True, blank=True)

    class Meta:
        abstract = True


def timestamp_pre_save(sender, instance, *args, **kwargs):
    """Model pre_save signal handler ensuring created/changed are set."""
    if hasattr(instance, 'created') and not instance.created:
        instance.created = datetime.now()
    if hasattr(instance, 'changed') and not instance.changed:
        instance.changed = datetime.now()

pre_save.connect(timestamp_pre_save)


class NexusModel(models.Model):
    """A base Model class for models optionally persisted by a given user."""

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.full_clean()
        super(NexusModel, self).save(*args, **kwargs)


class Client(TimestampedMixin, NexusModel):
    name = models.CharField(max_length=64)
    notes = models.TextField(max_length=512, blank=True, null=True)
    appraiser_must_sign = models.BooleanField(default=False)
    appraiser_must_inspect = models.BooleanField(default=False)
    requirements_url = models.URLField(null=True, blank=True)
    invoice_delivery = models.CharField(max_length=128, null=True, blank=True)
    report_delivery = models.CharField(max_length=128, null=True, blank=True)

    TIMING_TYPES = (
        ('DRAFT', 'With Draft'),
        ('FINAL', 'With Final'),
        ('END_OF_QUARTER', 'End of Quarter'),
        ('OTHER', 'Other'),
    )
    invoice_timing = models.CharField(max_length=16, choices=TIMING_TYPES,
                                      default='OTHER')
    CLIENT_TYPES = (
        ('BANK', 'Bank'),
        ('PENSION_FUND', 'Pension Fund'),
        ('LIFE_COMPANY', 'Life Company'),
        ('CORPORATE', 'Corporate'),
        ('DEVELOPER', 'Developer'),
        ('PRIVATE_INVESTOR', 'Private Investor'),
        ('HEDGE_FUND', 'Hedge Fund'),
        ('LAW_FIRM', 'Law Firm'),
        ('OTHER', 'Other'),
    )
    client_type = models.CharField(max_length=16,
                                   choices=CLIENT_TYPES,
                                   default='BANK')

    def __unicode__(self):
        return u'%s' % (self.name)

    class Meta:
        ordering = ['name', ]

    @property
    def uri(self):
        from .api import ClientResource
        return ClientResource().get_resource_uri(self)

    def get_absolute_url(self):
        return '/client/{}'.format(self.pk)

    def json(self):
        from api import ClientResource
        res = ClientResource()
        bundle = res.build_bundle(obj=self)
        return res.serialize(None, res.full_dehydrate(bundle),
                             'application/json')

    def get_engagements(self):
        """Retrieve all engagements for this client"""
        return self.client_engagements.all()

    def get_active_appraisals(self):
        """Retrieve all active appraisals for this client"""
        return Appraisal.objects.filter(
            engagement_property__property__client=self).\
            exclude(status__in=['COMPLETED', 'CANCELLED'])

    def get_historical_appraisals(self):
        """Retrieve all historical appraisals for this client"""
        return Appraisal.objects.filter(
            engagement_property__property__client=self).\
            filter(status__in=['COMPLETED'])

    def get_appraisals(self, start_date=None, end_date=None):
        """Retrieve all appraisals for this client"""
        kwargs = {}
        kwargs['engagement_property__property__client'] = self
        if start_date:
            kwargs['due_date__gte'] = start_date
        if end_date:
            kwargs['due_date__lte'] = end_date
        return Appraisal.objects.filter(**kwargs).\
            exclude(status__in=['CANCELLED'])

    def get_appraisal_fee_sum(self, start_date=None, end_date=None):
        """Retrieve the appraisal fee sum for this client"""
        kwargs = {}
        kwargs['engagement_property__property__client'] = self
        if start_date:
            kwargs['due_date__gte'] = start_date
        if end_date:
            kwargs['due_date__lte'] = end_date
        fee_sum_dict = Appraisal.objects.filter(**kwargs).\
            aggregate(Sum('fee'))
        return fee_sum_dict['fee__sum'] if fee_sum_dict['fee__sum'] else 0

    def get_states(self, start_date=None, end_date=None):
        """Retrieve all states for this client"""
        state_list = []
        kwargs = {}
        kwargs['engagement_property__property__client'] = self
        if start_date:
            kwargs['due_date__gte'] = start_date
        if end_date:
            kwargs['due_date__lte'] = end_date
        appraisals = Appraisal.objects.filter(**kwargs).\
            exclude(status__in=['CANCELLED'])
        for appraisal in appraisals:
            states = appraisal.engagement_property.\
                property.address_set.values_list('state', flat=True)
            for state in states:
                if state not in state_list:
                    state_list.append(state)
        return state_list


class AMF(TimestampedMixin, NexusModel):
    name = models.CharField(max_length=128)

    def __unicode__(self):
        return self.name

    @property
    def uri(self):
        from .api import AMFResource
        return AMFResource().get_resource_uri(self)

    def get_absolute_url(self):
        return '/amf/{}'.format(self.pk)

    class Meta:
        ordering = ['name']

    def get_appraisals(self):
        a_apps = []
        for e in Engagement.objects.filter(amf=self.pk):
            if e.property is not None:
                qs = e.property.appraisal_set.all().exclude(status='COMPLETED')
                for a in qs:
                    a_apps.append(a)
            else:  # there is a portfolio
                for p in e.portfolio.property_set.all():
                    for a in p.appraisal_set.all().exclude(status='COMPLETED'):
                        a_apps.append(a)
        return a_apps

    def get_historical_appraisals(self):
        h_apps = []
        for e in Engagement.objects.filter(client=self.pk):
            if e.property is not None:
                for a in e.property.appraisal_set.filter(status='COMPLETED'):
                    h_apps.append(a)
            else:  # there is a portfolio
                for p in e.portfolio.property_set.all():
                    qs = e.property.appraisal_set.filter(status='COMPLETED')
                    for a in qs:
                        h_apps.append(a)
        return h_apps


class Portfolio(TimestampedMixin, NexusModel):
    name = models.CharField(max_length=64)
    notes = models.TextField(max_length=512, null=True, blank=True)
    client = models.ForeignKey('Client', null=True, blank=True)
    client_contact = models.ForeignKey('Contact', null=True, blank=True)

    def __unicode__(self):
        return self.name

    class Meta:
        ordering = ['client', 'name']

    @property
    def uri(self):
        from .api import PortfolioResource
        return PortfolioResource().get_resource_uri(self)

    def get_absolute_url(self):
        return '/portfolio/{}'.format(self.pk)

    def get_appraisals(self):
        properties = self.property_set.all()
        return Appraisal.objects.filter(
            engagement_property__property__in=properties).\
            exclude(status__in=['COMPLETED',
                                'CANCELLED'])

    def get_aggregate_fee(self):
        return self.get_appraisals().aggregate(Sum('fee'))

    def get_historical_appraisals(self):
        properties = self.property_set.all()
        return Appraisal.objects.filter(
            engagement_property__property__in=properties,
            status='COMPLETED')


class Property(TimestampedMixin, NexusModel):
    name = models.CharField(max_length=128)
    federally_related = models.BooleanField(default=False)
    client_asset_number = models.CharField(max_length=128, null=True,
                                           blank=True)
    notes = models.TextField(max_length=512, null=True, blank=True)
    proposed = models.BooleanField(default=False)
    contact = models.ForeignKey('Contact', null=True, blank=True)
    portfolio = models.ForeignKey('Portfolio', null=True, blank=True)
    # QQQ: Should client be nullable for Property in a Portfolio case?
    client = models.ForeignKey('Client', null=True, blank=True)

    PROPERTY_TYPE = (
        ('Industrial', 'Industrial'),
        ('Office', 'Office'),
        ('Hospitality', 'Hospitality'),
        ('Health Care', 'Health Care'),
        ('Retail', 'Retail'),
        ('Specialty', 'Specialty'),
        ('Flex', 'Flex'),
        ('Multi-Family', 'Multi-Family'),
        ('Land', 'Land'),
        ('Other', 'Other'),
    )

    property_type = models.CharField(max_length=32, choices=PROPERTY_TYPE,
                                     default='Other')

    property_subtype = models.CharField(max_length=64, null=True, blank=True)

    def __unicode__(self):
        return '%s' % (self.name)

    class Meta:
        ordering = ['name']

    @property
    def uri(self):
        from .api import PropertyResource
        return PropertyResource().get_resource_uri(self)

    def json(self):
        from .api import PropertyResource
        res = PropertyResource()
        bundle = res.build_bundle(obj=self)
        return res.serialize(None, res.full_dehydrate(bundle),
                             'application/json')

    def get_absolute_url(self):
        return '/property/{}'.format(self.pk)

    def get_appraisals(self):
        """Retrieve all current appraisals on an existing property"""
        return Appraisal.objects.filter(engagement_property__property=self).\
            exclude(status='COMPLETED')

    def get_historical_appraisals(self):
        """Retrieve all past appraisals on an existing property"""
        #return self.appraisal_set.filter(status='COMPLETED')
        return Appraisal.objects.filter(
            engagement_property__property=self,
            status='COMPLETED')

    def get_property_fee_sum(self):
        """Retrieve sum of all fees for this client"""
        fee_sum_dict = Appraisal.objects.filter(
            engagement_property__property=self).\
            aggregate(Sum('fee'))
        if fee_sum_dict['fee__sum'] is None:
            return 0  # this prevents filter tag breakage with 'None'
        else:
            return fee_sum_dict['fee__sum']

    @property_
    def base_address(self):
        return Address.objects.filter(property=self).first()


class Address(TimestampedMixin, NexusModel):
    address1 = models.CharField(max_length=512)
    address2 = models.CharField(max_length=512, null=True, blank=True)
    city = models.CharField(max_length=512)
    county = models.CharField(max_length=32, null=True, blank=True)
    state = models.CharField(max_length=32)
    latitude = models.CharField(max_length=32, null=True, blank=True)
    longitude = models.CharField(max_length=32, null=True, blank=True)
    google_address = map_fields.AddressField(max_length=200, null=True,
                                             blank=True)
    geolocation = map_fields.GeoLocationField(max_length=100, null=True,
                                              blank=True)
    zipcode = models.CharField(max_length=16)
    property = models.ForeignKey('Property')

    class Meta:
        ordering = ['state', 'city', 'zipcode', 'address1']

    @property_
    def uri(self):
        from .api import AddressResource
        return AddressResource().get_resource_uri(self)

    def json(self):
        from api import AddressResource
        res = AddressResource()
        bundle = res.build_bundle(obj=self)
        return res.serialize(None, res.full_dehydrate(bundle),
                             'application/json')


class Engagement(TimestampedMixin, NexusModel):
    borrower = models.CharField(max_length=128, null=True, blank=True)
    notes = models.TextField(max_length=512, null=True, blank=True)
    client = models.ForeignKey('Client', null=True, blank=True,
                               related_name='client_engagements')
    client_contact = models.ForeignKey('Contact', null=True, blank=True,
                                       related_name=
                                       'client_contact_engagements')
    amf = models.ForeignKey('AMF', null=True, blank=True,
                            related_name='amf_engagements')
    amf_contact = models.ForeignKey('Contact', null=True, blank=True,
                                    related_name='amf_contact_engagements')
    property = models.ForeignKey('Property', null=True, blank=True)
    portfolio = models.ForeignKey('Portfolio', null=True, blank=True)
    legacy = models.BooleanField(default=False)

    @property_
    def uri(self):
        from api import EngagementResource
        return EngagementResource().get_resource_uri(self)

    def json(self):
        from api import EngagementResource
        res = EngagementResource()
        bundle = res.build_bundle(obj=self)
        return res.serialize(None, res.full_dehydrate(bundle),
                             'application/json')

    def get_absolute_url(self):
        return '/engagement/{}'.format(self.pk)

    def clean(self):
        if (((not self.portfolio and not self.property) or
             (self.portfolio and self.property))):
            raise ValidationError('Must specify either portfolio or property')

    def related_engagements(self):
        qs = Engagement.objects.filter(property=self.property,
                                       portfolio=self.portfolio)
        return qs.exclude(pk=self.pk).all()


class EngagementProperty(NexusModel):
    engagement = models.ForeignKey('Engagement')
    property = models.ForeignKey('Property')
    office = models.ForeignKey('Office', null=True, blank=True)
    index = models.IntegerField(default=1)

    # The client may provide their own identifiers for the property
    client_provided_id1 = models.CharField(max_length=128, null=True,
                                           blank=True)
    client_provided_id2 = models.CharField(max_length=128, null=True,
                                           blank=True)

    class Meta:
        unique_together = ('engagement', 'property')

    def get_absolute_url(self):
        return '/engagement/property/{}?engagement={}'.format(
            self.property.pk, self.engagement.uri
        )

    @property_
    def uri(self):
        from .api import EngagementPropertyResource
        return EngagementPropertyResource().get_resource_uri(self)

    def json(self):
        from .api import EngagementPropertyResource as Resource
        res = Resource()
        bundle = res.build_bundle(obj=self)
        return res.serialize(None, res.full_dehydrate(bundle),
                             'application/json')

    @property_
    def job_number_middle(self):
        return u'{:05d}-{:03d}'.format(self.engagement_id, self.index)

    def current_active_appraisal(self):
        """Get the current active appraisal, if any."""
        qs = self.appraisals.filter(status__in=[AppraisalStatus.IN_PROGRESS,
                                                AppraisalStatus.INFO_NEEDED])
        return qs.first()


class OccurrenceType(ChoicesEnum):
    """Possible values for ``AppraisalOccurrenceSchedule.occurrence_type``."""
    ANNUALLY = 'ANNUALLY'
    SEMIANNUALLY = 'SEMIANNUALLY'
    QUARTERLY = 'QUARTERLY'
    SINGLE = 'SINGLE'

    all = [ANNUALLY, SEMIANNUALLY, QUARTERLY, SINGLE]


class ReportType(ChoicesEnum):
    NORMAL = 'NORMAL'
    MARKET_RENT_STUDY = 'MARKET_RENT_STUDY'
    SPECIAL = 'SPECIAL'

    all = [NORMAL, MARKET_RENT_STUDY, SPECIAL]


class AppraisalOccurrenceSchedule(TimestampedMixin, NexusModel):
    engagement_property = models.OneToOneField('EngagementProperty',
                                               related_name='schedule',
                                               primary_key=True)

    years = models.IntegerField(default=1)
    # TODO: make initial_due_date required
    initial_due_date = models.DateField(null=True, blank=True)
    # TODO: make initial_fee required
    initial_fee = models.DecimalField(max_digits=10, decimal_places=2,
                                      null=True, blank=True)
    update_fee = models.DecimalField(max_digits=10, decimal_places=2,
                                     null=True, blank=True)
    quarterly_fee = models.DecimalField(max_digits=10, decimal_places=2,
                                        null=True, blank=True)

    occurrence_type = models.CharField(max_length=16,
                                       choices=OccurrenceType.as_choices(),
                                       default=OccurrenceType.ANNUALLY)

    report_type = models.CharField(max_length=48,
                                   choices=ReportType.as_choices(),
                                   default=ReportType.NORMAL)

    @property
    def uri(self):
        from .api import AppraisalOccurrenceScheduleResource
        return AppraisalOccurrenceScheduleResource().get_resource_uri(self)

    def get_absolute_url(self):
        return self.engagement_property.get_absolute_url() + '#schedule'

    def scheduled_assignments_grouped(self):
        grouped = {}
        for assn in self.engagement_property.scheduled_assignments.all():
            grouped.setdefault(assn.role, []).append(assn)
        return grouped


class AbstractAppraisal(models.Model):
    """The abstract base class for ScheduledAppraisal and Appraisal"""
    # TODO: make due_date required
    due_date = models.DateField()
    fee = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    restricted = models.BooleanField(default=False)

    class Meta:
        abstract = True

    def __unicode__(self):
        return self.job_number or unicode(self.pk)

    @property_
    def quarter_due(self):
        if self.due_date.month < 4:
            return 1
        if self.due_date.month < 7:
            return 2
        if self.due_date.month < 10:
            return 3
        return 4


class ScheduledAppraisal(TimestampedMixin, AbstractAppraisal, NexusModel):
    """
    Represents a future Appraisal instance.

    When the appropriate time comes the ScheduledAppraisal will become an
    actual active Appraisal based on the values stored here and on the parent
    EngagementProperty (for the Appraisal Assignments).
    """
    engagement_property = models.ForeignKey('EngagementProperty',
                                            related_name=('scheduled_'
                                                          'appraisals'))
    legacy_job_number = models.CharField(max_length=48, unique=True, null=True,
                                         blank=True)

    class Meta:
        ordering = ['-due_date']

    def get_absolute_url(self):
        return self.engagement_property.get_absolute_url() + '#Schedule'

    def json(self):
        from api import ScheduledAppraisalResource
        res = ScheduledAppraisalResource()
        bundle = res.build_bundle(obj=self)
        return res.serialize(None, res.full_dehydrate(bundle),
                             'application/json')

    @property_
    def schedule(self):
        return AppraisalOccurrenceSchedule.objects.get(
            engagement_property=self.engagement_property
        )

    @property
    def job_number(self):
        if self.legacy_job_number is not None:
            return self.legacy_job_number
        if self.schedule.occurrence_type == OccurrenceType.ANNUALLY:
            # TODO: The index of this appr in list of existing and scheduled
            #       for the eng-prop should be appended after the 'A'.
            repeats = 'A'
        else:
            repeats = 'Q{}'.format(self.quarter_due)

        return (u'{}-{}-{}'
                .format(str(self.due_date.year)[-2:],
                        self.engagement_property.job_number_middle, repeats))

    @classmethod
    def to_be_activated(cls, from_date=None):
        """List of ScheduledAppraisal's that should be activated.

        Requires ``settings.NX_ACTIVE_APPRAISAL_WINDOW`` which should be set
        to the time unit and number from before a due-date to activate an
        appraisal. All appraisals for the current quarter will be activated
        as well regardless of the value of activation window setting.

        .. seealso:: :meth:`to_active_appraisal`

        :param from_date:
            The activation window projected from this date (eases testing).
            Defaults to :func:`datetime.date.today`
        :type from_date: datetime.date.
        :returns: ``QuerySet`` of filtered to those within activation window.
        """
        if from_date is None:
            from_date = date.today()
        window = dict([settings.NX_ACTIVATE_APPRAISAL_WINDOW])
        window_end = from_date + timedelta(**window)
        # use whichever of window and quarter end dates are furthest out
        _, qtr_end, _ = date_range_for_quarter(from_date)
        to_date = qtr_end if qtr_end > window_end else window_end
        return cls.objects.filter(due_date__gte=from_date,
                                  due_date__lte=to_date)

    def to_active_appraisal(self):
        # TODO: Should we check setup-complete here, possibly throwing an
        #       exception, or assume caller checked first?

        # TODO: office should probably be stored somewhere and then set on the
        #       appraisal (or engagement)
        appr = Appraisal(engagement_property_id=self.engagement_property_id,
                         job_number=self.job_number,
                         due_date=self.due_date,
                         fee=self.fee, restricted=self.restricted)

        assns = []
        for sched_assn in self.engagement_property.scheduled_assignments.all():
            assn = Assignment(appraisal=appr,
                              employee_id=sched_assn.employee_id,
                              fee=sched_assn.fee, role=sched_assn.role)
            assns.append(assn)

        appr.save()

        appr.assignments = assns
        appr.save()

        # TODO: notification (via signal handler)
        # XXX: delete the scheduled appraisal?

        return appr


class AppraisalStatus(ChoicesEnum):
    IN_PROGRESS = 'IN_PROGRESS'
    INFO_NEEDED = 'INFO_NEEDED'
    DRAFT_SENT = 'DRAFT_SENT'
    # NOTE: Outside  of Nexus this means a copy was put in the finals
    #       folder on the X-Drive. Integration is planned for Phase II.
    COMPLETED = 'COMPLETED'
    CANCELLED = 'CANCELLED'
    SCHEDULED = 'SCHEDULED'

    all = [IN_PROGRESS, INFO_NEEDED, DRAFT_SENT,
           COMPLETED, CANCELLED, SCHEDULED]


class Appraisal(TimestampedMixin, AbstractAppraisal, NexusModel):
    """The derived class for an Appraisal"""
    engagement_property = models.ForeignKey('EngagementProperty',
                                            related_name='appraisals')
    office = models.ForeignKey('Office', null=True, blank=True)
    job_number = models.CharField(max_length=48, unique=True)
    status = models.CharField(max_length=16,
                              choices=AppraisalStatus.as_choices(),
                              default=AppraisalStatus.IN_PROGRESS)
    final_value = models.DecimalField(max_digits=16, decimal_places=2,
                                      default=0.00)

    invoice_sent = models.NullBooleanField(default=False)
    hours_spent = models.DecimalField(max_digits=4, decimal_places=1,
                                      default=0.0)

    report_type = models.CharField(max_length=48,
                                   choices=ReportType.as_choices(),
                                   default=ReportType.NORMAL)
    # TODO: Temporary solution for allowing appraisers to tack expenses
    #       onto an apraisal.
    expenses = models.CharField(max_length=10, null=True, blank=True)
    expenses_held = models.CharField(max_length=10, null=True, blank=True)

    @property_
    def uri(self):
        from .api import AppraisalResource
        return AppraisalResource().get_resource_uri(self)

    # TODO: Once Appraisal is updated to use EngagementProperty this can
    #       probably be removed with callers using
    #       appr.engagement_property.get_absolute_url() instead.
    @property_
    def edit_url(self):
        return '/engagement/property/{}?engagement={}'.format(
            self.engagement_property.property.pk,
            self.engagement_property.engagement.uri
        )

    def get_absolute_url(self):
        return '/appraisal/{}'.format(self.pk)

    def json(self):
        from .api import AppraisalResourceThin as AppraisalResource
        res = AppraisalResource()
        bundle = res.build_bundle(obj=self)
        return res.serialize(None, res.full_dehydrate(bundle),
                             'application/json')

    def clean(self):
        if self.status == 'DRAFT_SENT' and not self.final_value:
            raise ValidationError('Must specify final value before setting '
                                  'status to Draft Sent')

    def related_appraisals(self):
        zipcodes = self.engagement_property.property.\
            address_set.values_list('zipcode', flat=True)
        return Appraisal.objects.filter(
            engagement_property__property__property_type=self.
            engagement_property.property.property_type,
            engagement_property__property__address__zipcode__in=zipcodes).\
            exclude(engagement_property__property=
                    self.engagement_property.property)

    def assignments_by_employee(self, employee):
        assignments = Assignment.objects.filter(appraisal=self,
                                                employee=employee)
        if assignments.count() != 0:
            return assignments
        else:
            return None

    def assignments_by_role(self, role):
        return Assignment.objects.filter(appraisal=self,
                                         role=role).order_by('-fee')

    def assignments_grouped(self):
        qs = Assignment.objects.filter(appraisal=self)
        grouped = {}
        for assn in qs.order_by('role', '-fee').all():
            grouped.setdefault(assn.role, []).append(assn)
        return grouped

    @property_
    def lead_appraiser(self):
        # TODO: Optimizing for use in api.py the below is faster when used
        #       with prefetch_related however the commented out original below
        #       it is faster for the vanilla case. Make both fast.
        for assn in self.assignments.all():
            if assn.role == Role.APPRAISER:
                return assn
        # return self.assignments_by_role(Role.APPRAISER).first()

    class Meta:
        ordering = ["-due_date"]


class AppraisalStatusChange(TimestampedMixin, NexusModel):
    new_appraisal_status = models.CharField(max_length=16)
    appraisal = models.ForeignKey('Appraisal')


class Role(ChoicesEnum):
    """The available roles to assign on an Engagement or Appraisal"""

    PROCURER = 'PROCURER'
    MANAGER = 'MANAGER'
    APPRAISER = 'APPRAISER'
    INSPECTOR = 'INSPECTOR'
    REVIEWER = 'REVIEWER'
    PRINCIPAL_SIGNER = 'PRINCIPAL_SIGNER'
    SIGNER = 'SIGNER'
    ASSOCIATE = 'ASSOCIATE'
    RESEARCHER = 'RESEARCHER'

    has_fee = {'optional': [PROCURER, MANAGER, REVIEWER],
               'never': [SIGNER, PRINCIPAL_SIGNER, ASSOCIATE, RESEARCHER],
               'always': [APPRAISER, INSPECTOR]}

    all = [PROCURER, MANAGER, APPRAISER, INSPECTOR, REVIEWER,
           PRINCIPAL_SIGNER, SIGNER, ASSOCIATE, RESEARCHER]


class AbstractAssignment(TimestampedMixin, models.Model):
    """The abstract base class for ScheduledAssignment and Assignment"""
    employee = models.ForeignKey('Employee')
    fee = models.DecimalField(max_digits=10, decimal_places=2, null=True,
                              blank=True)
    role = models.CharField(max_length=32, choices=Role.as_choices())

    class Meta:
        abstract = True

    # TODO: If an employee has an assignment with a fee value for the
    #       given appraisal or engagement-property their other assignment fees
    #       are optional. This is a much harder validation issue as a
    #       previously valid assignment can be made invalid by the removal of
    #       another fee (if the other had the only fee value). Disable for now.
    #
    # def clean(self):
    #     # can or must have fee
    #     if not self.fee and self.role in Role.has_fee['always']:
    #         raise ValidationError('{} requires a fee'.format(self.role))
    #     if self.fee and self.role in Role.has_fee['never']:
    #         raise ValidationError('{} cannot have a fee'.format(self.role))

    #     # TODO: title and capability checks as done to filter for selection


class Assignment(AbstractAssignment, NexusModel):
    """
    The combination of Employee, Role, and optionally fee for an Appraisal.
    """
    appraisal = models.ForeignKey(Appraisal, related_name='assignments')

    class Meta:
        unique_together = ["appraisal", "employee", "role"]
        ordering = ['-appraisal__due_date', 'role', '-fee']

    @property
    def uri(self):
        from .api import AssignmentResource
        return AssignmentResource().get_resource_uri(self)


class ScheduledAssignment(AbstractAssignment, NexusModel):
    """
    Assignments to use for future Appraisals for a given EngagementProperty.

    The ScheduledAssignments saved for an EngagementProperty are used when
    creating an Appraisal (going from ScheduledAppraisal) for that
    Engagement Property. The Assignments created from the ScheduledAssignments
    are then tied to the new Appraisal and will not change if the
    ScheduledAssignments are changed for that EngagementProperty. Any
    ScheduledAssignments changes only apply to future Appraisal creation.
    """
    engagement_property = models.ForeignKey('EngagementProperty',
                                            related_name=('scheduled'
                                                          '_assignments'))

    class Meta:
        unique_together = ["engagement_property", "employee", "role"]
        ordering = ['-fee', 'employee']

    @property_
    def uri(self):
        from .api import ScheduledAssignmentResource
        return ScheduledAssignmentResource().get_resource_uri(self)

    def json(self):
        from api import ScheduledAssignmentResource
        res = ScheduledAssignmentResource()
        bundle = res.build_bundle(obj=self)
        return res.serialize(None, res.full_dehydrate(bundle),
                             'application/json')


@receiver(post_save, sender=ScheduledAssignment)
def sync_scheduled_and_current_assignments(sender, instance, **kwargs):
    appr = instance.engagement_property.current_active_appraisal()
    if appr is not None:
        assn, _ = Assignment.objects.get_or_create(appraisal=appr,
                                                   employee=instance.employee,
                                                   role=instance.role)
        assn.fee = instance.fee
        assn.save()


@receiver(pre_delete, sender=ScheduledAssignment)
def delete_current_on_scheduled_assignments_delete(sender, instance, **kwargs):
    appr = instance.engagement_property.current_active_appraisal()
    if appr is not None:
        appr.assignments.filter(employee=instance.employee,
                                role=instance.role).delete()


class Contact(TimestampedMixin, NexusModel):
    last_name = models.CharField(max_length=128, null=True, blank=True)
    first_name = models.CharField(max_length=128, null=True, blank=True)
    nickname = models.CharField(max_length=128, null=True, blank=True)
    salutation = models.CharField(max_length=16, null=True, blank=True)
    email = models.CharField(max_length=128, null=True, blank=True)
    phone = models.CharField(max_length=64, null=True, blank=True)
    mobile = models.CharField(max_length=64, null=True, blank=True)
    fax = models.CharField(max_length=64, null=True, blank=True)
    address = models.TextField(max_length=1024, blank=True, null=True)
    notes = models.TextField(blank=True, null=True)

    client = models.ForeignKey(Client, null=True, blank=True,
                               related_name='contacts')
    employee = models.OneToOneField('Employee', null=True, blank=True,
                                    related_name='contact')
    amf = models.ForeignKey(AMF, null=True, blank=True,
                            related_name='contacts')

    def clean(self):
        # xor client, employee, amf
        targets = [self.client, self.employee, self.amf]
        if [bool(t) for t in targets].count(True) != 1:
            raise ValidationError('Must specify either client, employee or '
                                  'amf')

    def __unicode__(self):
        return unicode(self.label)

    @property
    def name(self):
        return '{c.first_name} {c.last_name}'.format(c=self)

    @property
    def uri(self):
        from .api import ContactResource
        return ContactResource().get_resource_uri(self)

    def get_absolute_url(self):
        return '/contact/{}'.format(self.pk)

    @property
    def label(self):
        ret = self.first_name
        c = ' ' if self.first_name else ''
        if ret and self.last_name:
            ret += c + self.last_name
            c = ' '
        if not ret:
            ret = self.email
        if not ret:
            ret = self.client
        if not ret:
            ret = self.address
        return ret

    def phone_format(self, n):
        return format(int(n[:-1]), ",").replace(",", "-") + n[-1]

    def json(self):
        from api import ContactResource
        res = ContactResource()
        bundle = res.build_bundle(obj=self)
        return res.serialize(None, res.full_dehydrate(bundle),
                             'application/json')


class Office(TimestampedMixin, NexusModel):
    name = models.CharField(max_length=64, null=True)
    contact = models.ForeignKey('Contact', null=True, blank=True)

    default_engagement_procurer = models.ForeignKey('Employee',
                                                    related_name='+',
                                                    null=True, blank=True)
    default_engagement_principal = models.ForeignKey('Employee',
                                                     related_name='+',
                                                     null=True, blank=True)
    default_engagement_researcher = models.ForeignKey('Employee',
                                                      related_name='+',
                                                      null=True, blank=True)

    def __unicode__(self):
        return self.name

    class Meta:
        ordering = ['name']

    @property
    def uri(self):
        from .api import OfficeResource
        return OfficeResource().get_resource_uri(self)

    def get_absolute_url(self):
        return '/office/{}'.format(self.pk)


class Title(ChoicesEnum):

    PRINCIPAL = 'Principal'

    DIRECTOR = 'Director'
    # aka fee-split associate
    SENIOR_ASSOCIATE = 'Senior Associate'
    ASSOCIATE = 'Associate'
    INTERN = 'Intern'
    SUPPORT = 'Support Staff'
    DIRECTOR_RESEARCH = 'Research Director'
    SENIOR_ASSOCIATE_RESEARCH = 'Senior Research Associate'
    ASSOCIATE_RESEARCH = 'Research Associate'
    INTERN_RESEARCH = 'Intern Research'

    SUPPORT_STAFF = 'Support Staff'

    all = [PRINCIPAL, DIRECTOR, SENIOR_ASSOCIATE, ASSOCIATE, INTERN,
           DIRECTOR_RESEARCH, SENIOR_ASSOCIATE_RESEARCH,
           ASSOCIATE_RESEARCH, INTERN_RESEARCH, SUPPORT_STAFF]

    # both tuples are ordered by seniority highest to lowest
    research_titles = (DIRECTOR_RESEARCH, SENIOR_ASSOCIATE_RESEARCH,
                       ASSOCIATE_RESEARCH, INTERN_RESEARCH)
    # TODO: what is a more correct name for this group
    appraising_titles = (PRINCIPAL, DIRECTOR, SENIOR_ASSOCIATE, ASSOCIATE,
                         INTERN)
    sensitive_titles = (PRINCIPAL)

    view_fee_titles = (PRINCIPAL, DIRECTOR, SUPPORT_STAFF)


class Employee(TimestampedMixin, NexusModel):
    split = models.FloatField(null=True, blank=True)

    # TODO: remove these until actually needed (even then, yikes)
    ssn = models.CharField(max_length=16, null=True, blank=True)
    dob = models.CharField(max_length=32, null=True, blank=True)

    # TODO: remove this until actually needed (even then, yikes)
    salary = models.DecimalField(max_digits=19, decimal_places=2, null=True,
                                 blank=True)

    certifications = models.CharField(max_length=32, null=True, blank=True)

    # qualifications
    title = models.CharField(max_length=32, null=True, blank=True,
                             choices=Title.as_choices())
    is_certified_general = models.BooleanField(default=False)
    is_procuring_agent = models.BooleanField(default=False)
    is_inspector = models.BooleanField(default=False)
    is_reviewer = models.BooleanField(default=False)
    is_engagement_manager = models.BooleanField(default=False)

    # administrative
    office = models.ForeignKey('Office', null=True, blank=True)
    manager = models.ForeignKey('Employee', null=True, blank=True,
                                related_name='+')
    user = models.OneToOneField(auth_models.User, null=True, blank=True,
                                on_delete=models.SET_NULL)

    def get_appraisals(self):
        appraisal_list = []
        assignments = Assignment.objects.filter(employee=self)
        for assignment in assignments:
            appraisal = assignment.appraisal
            appraisal_list.append(appraisal)
        return appraisal_list

    @property
    def uri(self):
        from .api import EmployeeResource
        return EmployeeResource().get_resource_uri(self)

    def get_absolute_url(self):
        return '/employee/{}'.format(self.pk)

    @property
    def name(self):
        return '{c.first_name} {c.last_name}'.format(c=self.contact)

    def __unicode__(self):
        return u'%s' % (self.name)

    def json(self):
        from .api import EmployeeResource
        res = EmployeeResource()
        bundle = res.build_bundle(obj=self)
        return res.serialize(None, res.full_dehydrate(bundle),
                             'application/json')

    @classmethod
    def by_assignment_role(cls, role, state=None):

        if role == Role.PROCURER:
            return (cls.objects.exclude(title=Title.PRINCIPAL)
                    .filter(is_procuring_agent=True).all())

        if role == Role.MANAGER:
            return cls.objects.filter(is_engagement_manager=True).all()

        if role == Role.INSPECTOR:
            return cls.objects.filter(is_inspector=True).all()

        if role == Role.APPRAISER:
            allowed_titles = [t for t in Title.appraising_titles
                              if t != Title.INTERN]
            return cls.objects.filter(title__in=allowed_titles).all()

        if role == Role.REVIEWER:
            return cls.objects.filter(is_reviewer=True).all()

        if role == Role.SIGNER:
            return cls.objects.filter(is_certified_general=True).all()

        if role == Role.PRINCIPAL_SIGNER:
            return cls.objects.filter(title=Title.PRINCIPAL).all()

        if role == Role.ASSOCIATE:
            return cls.objects.filter(title__in=Title.appraising_titles).all()

        if role == Role.RESEARCHER:
            return cls.objects.filter(title__in=Title.research_titles).all()

        raise Exception('Unknown Assignment Role ({!r})'.format(role))

    class Meta:
        ordering = ["contact__last_name"]


class License(TimestampedMixin, NexusModel):
    number = models.CharField(max_length=64)
    issue_date = models.DateField(null=True, blank=True)
    expiration_date = models.DateField(null=True, blank=True)
    state = models.CharField(max_length=32, null=True, blank=True)
    employee = models.ForeignKey(Employee, null=True, blank=True)

    def __unicode__(self):
        return self.number


class TempLicense(TimestampedMixin, NexusModel):
    number = models.CharField(max_length=64)
    issue_date = models.DateField(null=True, blank=True)
    expiration_date = models.DateField(null=True, blank=True)
    state = models.CharField(max_length=32, null=True, blank=True)
    employee = models.ForeignKey(Employee, null=True, blank=True)
    property = models.ForeignKey('Property')

    def __unicode__(self):
        return self.number


class LicenseRequirements(TimestampedMixin, NexusModel):
    state = models.CharField(primary_key=True, max_length=32)
    source = models.CharField(max_length=256, blank=True, null=True)
    requirements = models.TextField(max_length=512, null=True, blank=True)
    contact = models.ForeignKey('Contact', null=True, blank=True)

    # specific requirements
    temp_certification_required = models.CharField(max_length=64, null=True,
                                                   blank=True)
    temp_limit = models.DecimalField(max_digits=8, decimal_places=0, null=True,
                                     blank=True)
    inspector_temp_required = models.BooleanField(default=False)
    signer_temp_required = models.BooleanField(default=False)
    temp_fee = models.DecimalField(max_digits=10, decimal_places=2, null=True,
                                   blank=True)
    perm_fee = models.DecimalField(max_digits=10, decimal_places=2, null=True,
                                   blank=True)

    def __unicode__(self):
        return unicode('%s' % (self.state))

    def get_absolute_url(self):
        return '/license-requirement/{}'.format(self.state)

    class Meta:
        ordering = ['state']


class Zipcode(TimestampedMixin, NexusModel):
    zipcode = models.CharField(primary_key=True, max_length=8)
    city = models.CharField(max_length=64, null=True, blank=True)
    areacode = models.CharField(max_length=32, null=True, blank=True)
    fips = models.CharField(max_length=32, null=True, blank=True)
    county = models.CharField(max_length=32, null=True, blank=True)
    state = models.CharField(max_length=32, null=True, blank=True)
    timezone = models.CharField(max_length=32, null=True, blank=True)
    dst = models.CharField(max_length=64, null=True, blank=True)
    latitude = models.CharField(max_length=32, null=True, blank=True)
    longitude = models.CharField(max_length=32, null=True, blank=True)
    dtype = models.CharField(max_length=32, null=True, blank=True)
    google_address = map_fields.AddressField(max_length=200, blank=True)
    geolocation = map_fields.GeoLocationField(max_length=100, blank=True)

    def clean(self):
        if len(self.zipcode) != 5:
            raise ValidationError('Must specify a valid zipcode')

    def __unicode__(self):
        return self.zipcode

    class Meta:
        ordering = ['zipcode']
