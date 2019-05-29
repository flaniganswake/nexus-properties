import logging

from django.contrib.auth.models import User
from tastypie.fields import ToOneField, ToManyField
from tastypie.authorization import Authorization
from tastypie.resources import ModelResource, ALL_WITH_RELATIONS, ALL

from .ext.specifiedfields import SpecifiedFields
from .models import (
    Client, AMF, Contact, Portfolio, Property, Address, Engagement,
    AppraisalOccurrenceSchedule, ScheduledAssignment, Assignment,
    ScheduledAppraisal, Appraisal, AppraisalStatusChange, Employee, Office,
    License, LicenseRequirements, Zipcode, EngagementProperty,
    AppraisalStatus, Title
)


log = logging.getLogger('nexus')


class FlatListMixin(object):
    """
    Allows retrieving an unested version of a list of resources.

    If 'flat' is found in the request querystring, the contents of what would
    normally be found in the 'objects' field of the response JSON, the list
    of serialized resources, will be returned at the top level of the response
    instead. The response will then have no 'meta' information.

    This allows for easy use with Backbone.js Collections.
    """

    def alter_list_data_to_serialize(self, request, data):
        if request.GET.get('flat'):
            return data['objects']
        return data


class AppraisalOccurrenceScheduleResource(ModelResource):
    engagement_property = ToOneField('nexus.api.EngagementPropertyResource',
                                     'engagement_property')

    class Meta:
        queryset = AppraisalOccurrenceSchedule.objects.all()
        resource_name = 'appraisal-schedule'
        authorization = Authorization()
        excludes = ['created', 'changed']

    def dehydrate(self, bundle):
        bundle = super(self.__class__, self).dehydrate(bundle)
        bundle.data['id'] = bundle.obj.pk
        return bundle


class EngagementPropertyResource(ModelResource):
    engagement = ToOneField('nexus.api.EngagementResource', 'engagement')
    property = ToOneField('nexus.api.PropertyResource', 'property', full=True)
    office = ToOneField('nexus.api.OfficeResource', 'office', null=True)

    class Meta:
        queryset = EngagementProperty.objects.all()
        resource_name = 'engagement-property'
        authorization = Authorization()
        excludes = ['created', 'changed']


class ScheduledAppraisalResource(FlatListMixin, SpecifiedFields):
    engagement_property = ToOneField('nexus.api.EngagementPropertyResource',
                                     'engagement_property')

    class Meta:
        queryset = ScheduledAppraisal.objects.all()
        resource_name = 'scheduled-appraisal'
        authorization = Authorization()
        filtering = {
            'engagement_property': ALL_WITH_RELATIONS,
            'due_date': ALL
        }
        always_return_data = True
        include_absolute_url = True
        excludes = ['created', 'changed', 'legacy_job_number']
        max_limit = None

    def dehydrate(self, bundle):
        bundle = super(self.__class__, self).dehydrate(bundle)
        bundle.data['job_number'] = bundle.obj.job_number
        bundle.data['status'] = AppraisalStatus.SCHEDULED
        bundle.data['lead_appraiser'] = None
        bundle.data['invoice_sent'] = None
        # TODO: We don't want the serialized string (.json()) here but rather
        #       an actual dict of the address.
        addy = bundle.obj.engagement_property.property.base_address
        bundle.data['base_address'] = addy.json() if addy else None
        bundle.data.setdefault('absolute_url', bundle.obj.get_absolute_url())
        return bundle


class AppraisalResource(SpecifiedFields):
    engagement_property = ToOneField('nexus.api.EngagementPropertyResource',
                                     'engagement_property', full=True)

    assignments = ToManyField('nexus.api.AssignmentResource', 'assignments',
                              full=True)
    office = ToOneField('nexus.api.OfficeResource', 'office', full=True,
                        null=True)

    class Meta:
        queryset = (Appraisal.objects
                    .prefetch_related('assignments', 'assignments__employee')
                    .all())
        resource_name = 'appraisal'
        authorization = Authorization()
        filtering = {
            'engagement_property': ALL_WITH_RELATIONS,
            'due_date': ALL,
            'assignments': ALL_WITH_RELATIONS,
            'status': ALL,
            'office': ALL_WITH_RELATIONS,
        }
        always_return_data = True
        include_absolute_url = True
        excludes = ['created', 'changed', ]
        max_limit = None

    def dehydrate_fee(self, bundle):
        employee = bundle.request.user.employee
        if employee.title in Title.view_fee_titles:
            return bundle.obj.fee
        return None

    def dehydrate(self, bundle):
        print 'enter AppraisalResource.dehydrate'
        bundle = super(self.__class__, self).dehydrate(bundle)

        assn = bundle.obj.lead_appraiser
        bundle.data['lead_appraiser'] = assn.employee if assn else None
        bundle.data['portfolio'] = bundle.obj.engagement_property.\
            engagement.portfolio.get_absolute_url() if \
            bundle.obj.engagement_property.engagement.\
            portfolio else None
        # TODO: We don't want the serialized string (.json()) here but rather
        #       an actual dict of the address.
        addy = bundle.obj.engagement_property.property.base_address
        bundle.data['base_address'] = addy.json() if addy else None

        print '------- exit AppraisalResource.dehydrate'

        return bundle


# TODO: temp thin version of AppraisalResource, until we can unify use
class AppraisalResourceThin(ModelResource):

    engagement_property = ToOneField('nexus.api.EngagementPropertyResource',
                                     'engagement_property')
    assignments = ToManyField('nexus.api.AssignmentResource', 'assignments',
                              blank=True)
    office = ToOneField('nexus.api.OfficeResource', 'office', null=True)

    class Meta:
        queryset = Appraisal.objects.all()
        resource_name = 'appraisal-thin'
        authorization = Authorization()
        filtering = {
            'engagement_property': ALL_WITH_RELATIONS,
        }
        always_return_data = True
        include_absolute_url = True
        excludes = ['created', 'changed', ]
        max_limit = None


class AddressResource(ModelResource):
    property = ToOneField('nexus.api.PropertyResource', 'property',
                          null=True)

    class Meta:
        queryset = Address.objects.all()
        resource_name = 'address'
        authorization = Authorization()
        always_return_data = True
        excludes = ['created', 'changed']


class AMFResource(ModelResource):
    contacts = ToManyField('nexus.api.ContactResource', 'contacts',
                           null=True)

    class Meta:
        queryset = AMF.objects.all()
        resource_name = 'amf'
        authorization = Authorization()
        always_return_data = True

    def dehydrate(self, bundle):
        qstr = '?amf={}'.format(bundle.obj.pk)
        res = ContactResource()
        bundle.data['contacts_uri'] = res.get_resource_uri() + qstr
        return bundle


class AppraisalStatusChangeResource(ModelResource):
    appraisal = ToOneField('nexus.api.AppraisalResource', 'appraisal')

    class Meta:
        queryset = AppraisalStatusChange.objects.all()
        resource_name = 'appraisal-status-change'
        authorization = Authorization()
        always_return_data = True


class ScheduledAssignmentResource(FlatListMixin, ModelResource):
    engagement_property = ToOneField('nexus.api.EngagementPropertyResource',
                                     'engagement_property')
    employee = ToOneField('nexus.api.EmployeeResource', 'employee')

    class Meta:
        queryset = ScheduledAssignment.objects.all()
        resource_name = 'scheduled-assignment'
        authorization = Authorization()
        filtering = {
            'engagement_property': ALL_WITH_RELATIONS,
            'employee': ALL_WITH_RELATIONS,
            'role': ('exact',)
        }
        always_return_data = True


class AssignmentResource(SpecifiedFields):
    employee = ToOneField('nexus.api.EmployeeResource', 'employee')
    appraisal = ToOneField('nexus.api.AppraisalResource', 'appraisal')

    class Meta:
        queryset = Assignment.objects.all()
        resource_name = 'assignment'
        authorization = Authorization()
        filtering = {
            'appraisal': ALL_WITH_RELATIONS,
            'employee': ALL_WITH_RELATIONS,
            'role': ALL,
        }
        always_return_data = True

    def dehydrate(self, bundle):
        bundle = super(self.__class__, self).dehydrate(bundle)
        # TODO: We don't want the serialized string (.json()) here but rather
        #       an actual dict of the address.
        addy = bundle.obj.appraisal.engagement_property.property.base_address
        bundle.data['base_address'] = addy.json() if addy else None
        return bundle


class AssignmentResourceThin(ModelResource):
    employee = ToOneField('nexus.api.EmployeeResource', 'employee')
    appraisal = ToOneField('nexus.api.AppraisalResource', 'appraisal')

    class Meta:
        queryset = Assignment.objects.all()
        resource_name = 'assignment-thin'
        authorization = Authorization()
        filtering = {
            'appraisal': ALL_WITH_RELATIONS,
            'employee': ALL_WITH_RELATIONS,
            'role': ('exact',),
        }
        always_return_data = True


class ClientResource(FlatListMixin, ModelResource):
    contacts = ToManyField('nexus.api.ContactResource', 'contacts',
                           null=True, full=True)
    properties = ToManyField('nexus.api.PropertyResource', 'property_set',
                             null=True, related_name='client')
    portfolios = ToManyField('nexus.api.PortfolioResource', 'portfolio_set',
                             null=True, related_name='client')

    class Meta:
        limit = 0
        max_limit = None
        queryset = Client.objects.all()
        resource_name = 'client'
        authorization = Authorization()
        always_return_data = True
        excludes = ['created', 'changed', ]

    def dehydrate(self, bundle):
        bundle.data['id'] = bundle.obj.pk
        qstr = '?client={}'.format(bundle.obj.pk)
        flat_qstr = qstr + '&flat=1'
        res = PropertyResource()
        bundle.data['properties_uri'] = res.get_resource_uri() + qstr
        bundle.data['properties_uri_flat'] = res.get_resource_uri() + flat_qstr
        res = PortfolioResource()
        bundle.data['portfolios_uri'] = res.get_resource_uri() + qstr
        bundle.data['portfolios_uri_flat'] = res.get_resource_uri() + flat_qstr
        res = ContactResource()
        bundle.data['contacts_uri'] = res.get_resource_uri() + qstr
        return bundle


class ContactResource(ModelResource):
    client = ToOneField('nexus.api.ClientResource', 'client', null=True)
    amf = ToOneField('nexus.api.AMFResource', 'amf', null=True)
    employee = ToOneField('nexus.api.EmployeeResource', 'employee', null=True)

    class Meta:
        queryset = Contact.objects.all()
        resource_name = 'contact'
        authorization = Authorization()
        always_return_data = True
        filtering = {
            'client': ALL_WITH_RELATIONS,
            'amf': ALL_WITH_RELATIONS,
        }


class EmployeeResource(ModelResource):
    contact = ToOneField('nexus.api.ContactResource', 'contact', full=True)
    office = ToOneField('nexus.api.OfficeResource', 'office', null=True)
    manager = ToOneField('nexus.api.EmployeeResource', 'manager', null=True)
    # assignments = ToManyField('nexus.api.AssignmentResource', 'assignments',
    #                           null=True, related_name='employee')

    class Meta:
        queryset = Employee.objects.prefetch_related('contact').all()
        resource_name = 'employee'
        authorization = Authorization()
        filtering = {
            'office': ALL_WITH_RELATIONS,
            'split': ALL_WITH_RELATIONS,
        }
        # TODO: ssn, salary, and dob should be removed from the model
        excludes = ['created', 'changed', 'salary', 'dob', 'ssn']

    def dehydrate(self, bundle):
        bundle.data['first_name'] = bundle.obj.contact.first_name
        bundle.data['last_name'] = bundle.obj.contact.last_name
        bundle.data['name'] = str(bundle.obj)
        return bundle

    def build_filters(self, filters=None):
        """Adds the filter for Assignment Role"""

        if filters is None:
            filters = {}

        orm_filters = super(EmployeeResource, self).build_filters(filters)

        if 'role' in filters:
            ids = (Employee.by_assignment_role(filters['role'])
                   .values_list('id', flat=True))
            orm_filters['pk__in'] = ids

        return orm_filters


class EngagementResource(ModelResource):
    client_contact = ToOneField('nexus.api.ContactResource', 'client_contact',
                                null=True)
    client = ToOneField('nexus.api.ClientResource', 'client')
    amf = ToOneField('nexus.api.AMFResource', 'amf', null=True)
    amf_contact = ToOneField('nexus.api.ContactResource', 'amf_contact',
                             null=True)
    property = ToOneField('nexus.api.PropertyResource', 'property', null=True)
    portfolio = ToOneField('nexus.api.PortfolioResource', 'portfolio',
                           null=True)

    class Meta:
        limit = 0
        max_limit = None
        queryset = Engagement.objects.all()
        resource_name = 'engagement'
        filtering = {
            'engagement_property': ALL_WITH_RELATIONS,
            'due_date': ALL
        }
        authorization = Authorization()
        always_return_data = True
        excludes = ['created', 'changed']


class LicenseResource(ModelResource):
    employee = ToOneField('nexus.api.EmployeeResource', 'employee')

    class Meta:
        queryset = License.objects.all()
        resource_name = 'license'
        authorization = Authorization()


class LicenseRequirementsResource(ModelResource):

    class Meta:
        queryset = LicenseRequirements.objects.all()
        resource_name = 'license-requirement'
        authorization = Authorization()


class OfficeResource(ModelResource):
    contact = ToOneField('nexus.api.ContactResource', 'contact', null=True,
                         full=True)

    default_engagement_procurer = ToOneField('nexus.api.EmployeeResource',
                                             'default_engagement_procurer',
                                             null=True)
    default_engagement_principal = ToOneField('nexus.api.EmployeeResource',
                                              'default_engagement_principal',
                                              null=True)

    # TODO: Use slugified name for URI instead of (or in addition too) PK?

    class Meta:
        queryset = Office.objects.all()
        resource_name = 'office'
        authorization = Authorization()
        excludes = ['created', 'changed', 'id']
        filtering = {
            'name': ALL,
        }


class PortfolioResource(FlatListMixin, ModelResource):
    client_contact = ToOneField('nexus.api.ContactResource', 'contact',
                                null=True, full=True)
    client = ToOneField(ClientResource, 'client', null=True)

    properties = ToManyField('nexus.api.PropertyResource', 'property_set',
                             null=True)

    class Meta:
        queryset = Portfolio.objects.all()
        resource_name = 'portfolio'
        authorization = Authorization()
        always_return_data = True
        filtering = {
            'client': ALL_WITH_RELATIONS
        }


class PropertyResource(FlatListMixin, ModelResource):
    contact = ToOneField('nexus.api.ContactResource', 'contact', null=True)
    portfolio = ToOneField('nexus.api.PortfolioResource', 'portfolio',
                           null=True)
    client = ToOneField('nexus.api.ClientResource', 'client', null=True,
                        full=False)
    addresses = ToManyField('nexus.api.AddressResource', 'address_set',
                            null=True, full_detail=True, full=True,
                            related_name='property')

    class Meta:
        queryset = Property.objects.all()
        resource_name = 'property'
        authorization = Authorization()
        always_return_data = True
        include_absolute_url = True
        filtering = {
            'client': ALL_WITH_RELATIONS,
            'portfolio': ALL_WITH_RELATIONS
        }


class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'
        excludes = ['password', 'is_active', 'is_superuser']


class ZipcodeResource(ModelResource):

    class Meta:
        queryset = Zipcode.objects.all()
        resource_name = 'zipcode'
        authorization = Authorization()
