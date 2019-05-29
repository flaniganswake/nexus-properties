import logging
import json
import csv
import locale
locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')
from datetime import date
from django.db.models import Sum
from dateutil.relativedelta import relativedelta

from django.shortcuts import render, get_object_or_404
from django.template import RequestContext
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.conf import settings

from .models import (Engagement, Appraisal, Property, Employee, Title, Client,
                     AMF, Portfolio, TempLicense, License, LicenseRequirements,
                     Role, Office, AppraisalOccurrenceSchedule, Assignment,
                     AppraisalStatus, EngagementProperty, ScheduledAppraisal,
                     OccurrenceType, ReportType, Contact)

from .api import (EngagementResource, AppraisalOccurrenceScheduleResource,
                  EmployeeResource,
                  ClientResource, AddressResource, ScheduledAppraisalResource,
                  ScheduledAssignmentResource, AppraisalResourceThin,
                  AMFResource, ContactResource)

from .data import states, PROPERTY_SUBTYPE
from .utils import get_current_year_quarter


log = logging.getLogger('nexus')


@login_required
def home(request):
    """View initial landing page"""
    employee = request.user.employee

    if employee.title == Title.DIRECTOR or employee.title == Title.PRINCIPAL:
        return HttpResponseRedirect('/appraisals/')
    else:
        return HttpResponseRedirect('/assigned-appraisals/')


@login_required
def employee_appraisals(request):
    """Directors and principals can view
       appraisals by employee"""

    emps = (Employee.objects.select_related('office', 'contact')
            .filter(split__gt=0.0))
    res = EmployeeResource()
    employees = []

    for obj in emps:
        bundle = res.build_bundle(obj=obj)
        employees.append(res.full_dehydrate(bundle, for_list=True))
    employee_bundles = res.serialize(None,
                                     employees,
                                     "application/json")

    clients = []
    cli = Client.objects.all()
    res = ClientResource()

    for obj in cli:
        bundle = [res.get_resource_uri(obj), obj.name, obj.get_absolute_url()]
        clients.append(bundle)

    return render(request,
                  'employee_appraisals.html',
                  dict(employees=employee_bundles,
                       office=Office.objects.all(),
                       statuses=AppraisalStatus.all,
                       clients=json.dumps(clients)),
                  context_instance=RequestContext(request))


@login_required
def assigned_appraisals(request):
    """View all assigned Appraisals"""
    employee = request.user.employee

    return render(request, 'view_appraiser_home.html',
                  dict(employee=employee),
                  context_instance=RequestContext(request))


@login_required
def all_appraisals(request):
    """View all existing Appraisals"""

    res = ClientResource()
    queryset = Client.objects.all()
    client_bundles = []

    for obj in queryset:
        bundle = res.get_resource_uri(obj)
        client_bundles.append([bundle, obj.name, obj.get_absolute_url()])

    res = EmployeeResource()
    queryset = Employee.objects.prefetch_related('contact').all()
    employee_bundles = []

    for obj in queryset:
        bundle = res.get_resource_uri(obj)
        employee_bundles.append([bundle, obj.name])

    return render(request, 'appraisals.html',
                  dict(statuses=AppraisalStatus.all,
                       clients=json.dumps(client_bundles),
                       employees=json.dumps(employee_bundles),
                       offices=Office.objects.all()),
                  context_instance=RequestContext(request))


@login_required
def view_portfolio(request, portfolio_id):
    """View an existing Portfolio"""
    portfolio = get_object_or_404(Portfolio, pk=portfolio_id)
    return render(request, 'view_portfolio.html',
                  dict(portfolio=portfolio),
                  context_instance=RequestContext(request))


@login_required
def view_appraisal(request, appraisal_id):
    """View an existing Appraisal"""
    appraisal = get_object_or_404(Appraisal, pk=appraisal_id)
    return render(request, 'view_appraisal.html',
                  dict(appraisal=appraisal),
                  context_instance=RequestContext(request))


@login_required
def view_property(request, property_id):
    """View an existing Property"""
    p_obj = get_object_or_404(Property, pk=property_id)
    fee_app = p_obj.get_property_fee_sum()
    hist_apps = p_obj.get_historical_appraisals
    return render(request, 'view_property.html',
                  dict(fee=fee_app, property=p_obj, hist_apps=hist_apps),
                  context_instance=RequestContext(request))


@login_required
def view_work_in_progress(request):
    """View Work In Progress"""
    quarter = get_current_year_quarter()
    chicagoassi = Assignment.objects.all().\
        filter(appraisal__due_date__gte=quarter[0],
               appraisal__due_date__lte=quarter[1],
               employee__office=1).\
        order_by('employee__contact__last_name',
                 'employee__office',
                 'appraisal__due_date').\
        exclude(appraisal__status=AppraisalStatus.CANCELLED)
    chicagotot = Assignment.objects.all().\
        filter(appraisal__due_date__gte=quarter[0],
               appraisal__due_date__lte=quarter[1],
               employee__office=1).\
        exclude(appraisal__status=AppraisalStatus.CANCELLED).\
        aggregate(Sum('fee'))
    atlantaassi = Assignment.objects.all().\
        filter(appraisal__due_date__gte=quarter[0],
               appraisal__due_date__lte=quarter[1],
               employee__office=2).\
        order_by('employee__contact__last_name', 'employee__office',
                 'appraisal__due_date').\
        exclude(appraisal__status=AppraisalStatus.CANCELLED)
    atlantatot = Assignment.objects.all().\
        filter(appraisal__due_date__gte=quarter[0],
               appraisal__due_date__lte=quarter[1],
               employee__office=2).\
        exclude(appraisal__status=AppraisalStatus.CANCELLED).\
        aggregate(Sum('fee'))
    newportbassi = Assignment.objects.all().\
        filter(appraisal__due_date__gte=quarter[0],
               appraisal__due_date__lte=quarter[1],
               employee__office=3).\
        order_by('employee__contact__last_name', 'employee__office',
                 'appraisal__due_date').\
        exclude(appraisal__status=AppraisalStatus.CANCELLED)
    newportbtot = Assignment.objects.all().\
        filter(appraisal__due_date__gte=quarter[0],
               appraisal__due_date__lte=quarter[1],
               employee__office=3).\
        exclude(appraisal__status=AppraisalStatus.CANCELLED).\
        aggregate(Sum('fee'))

    return render(request, 'view_work_in_progress.html',
                  dict(chicago=chicagoassi, chicagoTot=chicagotot,
                       atlanta=atlantaassi, atlantaTot=atlantatot,
                       newportB=newportbassi, newportBTot=newportbtot))


@login_required
def view_work_in_progress_csv(request):
    """View Work In Progress"""
    quarter = get_current_year_quarter()
    chicagoassi = Assignment.objects.all().\
        filter(appraisal__due_date__gte=quarter[0],
               appraisal__due_date__lte=quarter[1],
               employee__office=1).\
        order_by('employee__contact__last_name',
                 'employee__office',
                 'appraisal__due_date').\
        exclude(appraisal__status=AppraisalStatus.CANCELLED)
    chicagotot = Assignment.objects.all().\
        filter(appraisal__due_date__gte=quarter[0],
               appraisal__due_date__lte=quarter[1],
               employee__office=1).\
        exclude(appraisal__status=AppraisalStatus.CANCELLED).\
        aggregate(Sum('fee'))
    atlantaassi = Assignment.objects.all().\
        filter(appraisal__due_date__gte=quarter[0],
               appraisal__due_date__lte=quarter[1],
               employee__office=2).\
        order_by('employee__contact__last_name', 'employee__office',
                 'appraisal__due_date').\
        exclude(appraisal__status=AppraisalStatus.CANCELLED)
    atlantatot = Assignment.objects.all().\
        filter(appraisal__due_date__gte=quarter[0],
               appraisal__due_date__lte=quarter[1],
               employee__office=2).\
        exclude(appraisal__status=AppraisalStatus.CANCELLED).\
        aggregate(Sum('fee'))
    newportbassi = Assignment.objects.all().\
        filter(appraisal__due_date__gte=quarter[0],
               appraisal__due_date__lte=quarter[1],
               employee__office=3).\
        order_by('employee__contact__last_name', 'employee__office',
                 'appraisal__due_date').\
        exclude(appraisal__status=AppraisalStatus.CANCELLED)
    newportbtot = Assignment.objects.all().\
        filter(appraisal__due_date__gte=quarter[0],
               appraisal__due_date__lte=quarter[1],
               employee__office=3).\
        exclude(appraisal__status=AppraisalStatus.CANCELLED).\
        aggregate(Sum('fee'))

    # MAKE CSV FILE
    # Create the HttpResponse object with the appropriate CSV header.
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="WIP.csv"'
    writer = csv.writer(response)
    writer.writerow(["Chicago Office", locale.currency(chicagotot["fee__sum"],
                                                       grouping=True)])
    emptot = 0
    empid = None
    for obj in chicagoassi:
        if obj.fee > 0:
            if empid is None:
                empid = obj.employee.id
            city = obj.appraisal.engagement_property.\
                property.base_address.city if obj.appraisal.\
                engagement_property.property.base_address else ""

            state = obj.appraisal.engagement_property.\
                property.base_address.state if obj.appraisal.\
                engagement_property.property.base_address else ""

            expenses = locale.currency(obj.appraisal.expenses, grouping=True)\
                if obj.appraisal.expenses else 0

            expenses_held = locale.currency(obj.appraisal.expenses,
                                            grouping=True) if obj.\
                appraisal.expenses else 0

            csvrow = [obj.employee.name, obj.appraisal.due_date,
                      obj.appraisal.job_number, obj.appraisal.
                      engagement_property.property.client.name,
                      obj.appraisal.engagement_property.property.
                      name, city, state, locale.currency(obj.fee,
                                                         grouping=True),
                      expenses, expenses_held]
            if empid == obj.employee.id:
                emptot += obj.fee
            else:
                empid = obj.employee.id
                writer.writerow(["", "", "", "", "", "", "", "", "", "",
                                 locale.currency(emptot, grouping=True)])
                emptot = obj.fee
            writer.writerow(csvrow)
    writer.writerow(["", "", "", "", "", "", "", "", "", "",
                     locale.currency(emptot, grouping=True)])
    writer.writerow(["Atlanta Office",
                     locale.currency(atlantatot["fee__sum"], grouping=True)])
    emptot = 0
    empid = None
    for obj in atlantaassi:
        if obj.fee > 0:
            csvrow = []
            if empid is None:
                empid = obj.employee.id
            city = obj.appraisal.engagement_property.\
                property.base_address.city if obj.appraisal.\
                engagement_property.property.base_address else ""

            state = obj.appraisal.engagement_property.\
                property.base_address.state if obj.appraisal.\
                engagement_property.property.base_address else ""

            expenses = locale.currency(obj.appraisal.expenses, grouping=True)\
                if obj.appraisal.expenses else 0

            expenses_held = locale.currency(obj.appraisal.expenses,
                                            grouping=True) if obj.\
                appraisal.expenses else 0

            csvrow = [obj.employee.name, obj.appraisal.due_date,
                      obj.appraisal.job_number, obj.appraisal.
                      engagement_property.property.client.name,
                      obj.appraisal.engagement_property.property.
                      name, city, state, locale.currency(obj.fee,
                                                         grouping=True),
                      expenses, expenses_held]
            if empid == obj.employee.id:
                emptot += obj.fee
            else:
                empid = obj.employee.id
                writer.writerow(["", "", "", "", "", "", "", "", "", "",
                                 locale.currency(emptot, grouping=True)])
                emptot = obj.fee
            writer.writerow(csvrow)
    writer.writerow(["", "", "", "", "", "", "", "", "", "",
                     locale.currency(emptot, grouping=True)])
    writer.writerow(["Newport Beach Office",
                     locale.currency(newportbtot["fee__sum"], grouping=True)])
    emptot = 0
    empid = None
    for obj in newportbassi:
        if obj.fee > 0:
            csvrow = []
            if empid is None:
                empid = obj.employee.id
            city = obj.appraisal.engagement_property.\
                property.base_address.city if obj.appraisal.\
                engagement_property.property.base_address else ""

            state = obj.appraisal.engagement_property.\
                property.base_address.state if obj.appraisal.\
                engagement_property.property.base_address else ""

            expenses = locale.currency(obj.appraisal.expenses, grouping=True)\
                if obj.appraisal.expenses else 0

            expenses_held = locale.currency(obj.appraisal.expenses,
                                            grouping=True) if obj.\
                appraisal.expenses else 0

            csvrow = [obj.employee.name, obj.appraisal.due_date,
                      obj.appraisal.job_number, obj.appraisal.
                      engagement_property.property.client.name,
                      obj.appraisal.engagement_property.property.
                      name, city, state, locale.currency(obj.fee,
                                                         grouping=True),
                      expenses, expenses_held]
            if empid == obj.employee.id:
                emptot += obj.fee
            else:
                empid = obj.employee.id
                writer.writerow(["", "", "", "", "", "", "", "", "", "",
                                 locale.currency(emptot, grouping=True)])
                emptot = obj.fee
            writer.writerow(csvrow)
    writer.writerow(["", "", "", "", "", "", "", "", "", "",
                     locale.currency(emptot, grouping=True)])
    return response


@login_required
def all_clients(request):
    """View all existing Clients with appraisals year-to-date"""
    clients = []
    all_clients = Client.objects.all()
    start_date = date(2014, 1, 1)
    end_date = date.today()
    for client in all_clients:
        client.num_appraisals = len(client.get_appraisals(
            start_date, end_date))
        if client.num_appraisals:
            client.num_states = len(client.get_states(
                start_date, end_date))
            client.fee_sum = client.get_appraisal_fee_sum(
                start_date, end_date)
            clients.append(client)
    clients.sort(key=lambda x: x.num_appraisals, reverse=True)
    return render(request, 'clients.html',
                  dict(clients=clients,
                       context_instance=RequestContext(request)))


@login_required
def view_client(request, client_id):
    """View an existing Client"""
    client = get_object_or_404(Client, pk=client_id)
    return render(request, 'view_client.html', dict(client=client),
                  context_instance=RequestContext(request))


@login_required
def view_amf(request, amf_id):
    """View an existing AMF"""
    amf = get_object_or_404(AMF, pk=amf_id)
    return render(request, 'view_amf.html', dict(amf=amf),
                  context_instance=RequestContext(request))


@login_required
def edit_amf(request, amf_id=None):
    """Edit an existing AMF"""
    try:
        amf = AMF.objects.get(pk=amf_id)
        res = AMFResource()
        amf_bundle = res.build_bundle(obj=amf)
        res.dehydrate
        amf_json = res.full_dehydrate(amf_bundle, for_list=True)

        cont = Contact.objects.filter(amf=amf)
        res_cont = ContactResource()
        cont_bundles = []
        for obj in cont:
            cont_bundle = res_cont.build_bundle(obj=obj)
            cont_bundles.append(res_cont.full_dehydrate(cont_bundle,
                                                        for_list=True))

        return render(request, 'edit_amf.html',
                      dict(amf=res.serialize(None,
                                             amf_json,
                                             'application/json'),
                           contacts=res.serialize(None,
                                                  cont_bundles,
                                                  'application/json')),
                      context_instance=RequestContext(request))
    except AMF.DoesNotExist:
        return render(request, 'edit_amf.html',
                      dict(amf=None),
                      context_instance=RequestContext(request))


@login_required
def edit_engagement(request, engagement_id=None):
    """Edit an existing Engagement"""
    clients = Client.objects.all().order_by('name')
    amfs = AMF.objects.all().order_by('name')

    # client and amf URI to contact list (also URIs) mappings; for selects
    contact_map = {}
    for item in list(clients) + list(amfs):
        for uri, name in [(c.uri, unicode(c)) for c in item.contacts.all()]:
            contact_map.setdefault(item.uri, []).append([uri, name])

    engagement = None
    if engagement_id:
        engagement = get_object_or_404(Engagement, pk=engagement_id)

    return render(request, 'edit_engagement.html',
                  dict(clients=clients, amfs=amfs, engagement=engagement,
                       contact_map=json.dumps(contact_map)),
                  context_instance=RequestContext(request))


# TODO: This is mostly a quickly hacked version. Needs a good bath.
def edit_engagement_property(request, prop_id):
    """Edit an existing EngagementProperty"""
    e_uri = request.GET.get('engagement')

    engagement = EngagementResource().get_via_uri(e_uri)

    # TODO: validate: prop in engagement porto

    prop = get_object_or_404(Property, pk=prop_id)

    eprop, created = EngagementProperty.objects.get_or_create(
        engagement=engagement,
        property=prop
    )
    if created and engagement.portfolio:
        # TODO: this is really ugly, lets do something better here
        props = engagement.portfolio.property_set.all()
        prop_pks = [str(p.pk) for p in props]
        prop_index = prop_pks.index(prop_id) + 1
        eprop.index = prop_index
        eprop.save()
    else:
        prop_index = 1

    # XXX: update AOS to match initial existing, if any
    aos, created = AppraisalOccurrenceSchedule.objects.get_or_create(
        engagement_property=eprop
    )

    # TODO: Move to AppraisalOccurenceSchedule.json() like sched-appr & address
    # This seems like a lot of steps to just get the serialized aos
    aos_resource = AppraisalOccurrenceScheduleResource()
    aos_bundle = aos_resource.build_bundle(obj=aos)
    aos_json = aos_resource.serialize(None,
                                      aos_resource.full_dehydrate(aos_bundle),
                                      'application/json'),

    # TODO: we definitely should not be doing these all separately.
    procurers = Employee.by_assignment_role(Role.PROCURER)
    managers = Employee.by_assignment_role(Role.MANAGER)
    inspectors = Employee.by_assignment_role(Role.INSPECTOR)
    appraisers = Employee.by_assignment_role(Role.APPRAISER)
    reviewers = Employee.by_assignment_role(Role.REVIEWER)
    signers = Employee.by_assignment_role(Role.SIGNER)
    principal_signers = Employee.by_assignment_role(Role.PRINCIPAL_SIGNER)
    researchers = Employee.by_assignment_role(Role.RESEARCHER)
    associates = Employee.by_assignment_role(Role.ASSOCIATE)

    addys = []
    for addy in prop.address_set.all():
        addys.append(addy.json())
    addys = '[' + ','.join(addys) + ']' if addys else ''

    eapprs = Appraisal.objects.filter(engagement_property=eprop)

    sapprs = []
    for sappr in ScheduledAppraisal.objects.filter(engagement_property=eprop):
        sapprs.append(sappr.json())
    sapprs = '[' + ','.join(sapprs) + ']'

    # TODO: we can do better here; redesign prop->subtype structuring
    cur_subtypes = PROPERTY_SUBTYPE.get(prop.property_type, {}).get('subtype')

    offices = Office.objects.all()

    office_defaults = {}
    for office in offices:
        office_defaults[office.pk] = {
            'procurer': office.default_engagement_procurer.pk,
            'manager': office.default_engagement_principal.pk,
        }

    # TODO: Temporarily exclude single until UI is in place for it.
    occurrence_types = [ot for ot in OccurrenceType.as_choices()
                        if ot[0] != OccurrenceType.SINGLE]

    sched_appraisals_uri = ScheduledAppraisalResource().get_resource_uri()
    appraisals_uri = AppraisalResourceThin().get_resource_uri()
    assignments_uri = ScheduledAssignmentResource().get_resource_uri()
    address_uri = AddressResource().get_resource_uri()

    return render(request, 'edit_engagement_property.html',
                  dict(property=prop, engagement=engagement,
                       engagement_property=eprop,
                       property_types=Property.PROPERTY_TYPE,
                       cur_subtypes=cur_subtypes,
                       property_subtypes=json.dumps(PROPERTY_SUBTYPE),
                       address_uri=address_uri, addresses=addys,
                       aos=aos, aos_json=aos_json[0],
                       appraisals=eapprs,
                       scheduled_appraisals=sapprs,
                       scheduled_appraisals_uri=sched_appraisals_uri,
                       appraisals_uri=appraisals_uri,
                       ReportType=ReportType,
                       occurrence_types=occurrence_types,
                       assignments_uri=assignments_uri,
                       offices=offices, employees=Employee.objects.all(),
                       managers=managers, appraisers=appraisers,
                       inspectors=inspectors, reviewers=reviewers,
                       signers=signers, principal_signers=principal_signers,
                       researchers=researchers, associates=associates,
                       procurers=procurers, settings=settings
                       ),
                  context_instance=RequestContext(request))


@login_required
def view_state_licensing(request):
    """View License Info for Employees """
    license_info = []
    today = date.today()
    three_months = today + relativedelta(months=+3)
    six_months = today + relativedelta(months=+6)
    for employee in Employee.objects.all():
        licenses = License.objects.filter(employee=employee.id)
        for license in licenses:
            is_expired = False
            within_three_months = False
            within_six_months = False
            beyond_six_months = False
            if ((license.expiration_date is not None and
                 license.employee is not None)):
                if license.expiration_date < today:
                    is_expired = True
                elif license.expiration_date < three_months:
                    within_three_months = True
                elif license.expiration_date < six_months:
                    within_six_months = True
                else:
                    beyond_six_months = True
            else:
                break  # skip if no expiration_date
            state_key = None
            for state in states:
                if license.state == states[state]:
                    state_key = state
            license_data = {
                "number": license.number,
                "expiration_date": license.expiration_date,
                "employee_name": employee.name,
                "state_key": state_key,
                "state_name": license.state,
                "is_expired": is_expired,
                "within_three_months": within_three_months,
                "within_six_months": within_six_months,
                "beyond_six_months": beyond_six_months,
            }
            license_info.append(license_data)
    license_info = sorted(license_info, key=lambda k: k['expiration_date'])
    return render(request, 'view_state_licensing.html',
                  dict(license_info=license_info),
                  context_instance=RequestContext(request))


@login_required
def view_license_info(request, state):
    """View License Info for a given state """
    license_requirements = get_object_or_404(LicenseRequirements, state=state)
    state_name = states[state]
    today = date.today()
    three_months = today + relativedelta(months=+3)
    six_months = today + relativedelta(months=+6)

    perm_license_info = []
    perm_licenses = License.objects.filter(state=state_name)
    for license in perm_licenses:
        is_expired = False
        within_three_months = False
        within_six_months = False
        beyond_six_months = False
        if ((license.expiration_date is not None and
             license.employee is not None)):
            if license.expiration_date < today:
                is_expired = True
            elif license.expiration_date < three_months:
                within_three_months = True
            elif license.expiration_date < six_months:
                within_six_months = True
            else:
                beyond_six_months = True
        else:
            break  # skip if no expiration_date
        perm_license_data = {
            "number": license.number,
            "issue_date": license.issue_date,
            "expiration_date": license.expiration_date,
            "employee_name": license.employee.name,
            "is_expired": is_expired,
            "within_three_months": within_three_months,
            "within_six_months": within_six_months,
            "beyond_six_months": beyond_six_months,
        }
        perm_license_info.append(perm_license_data)
    perm_license_info = sorted(perm_license_info,
                               key=lambda k: k['expiration_date'])

    temp_license_info = []
    temp_licenses = TempLicense.objects.filter(state=state_name)
    for license in temp_licenses:
        is_expired = False
        within_three_months = False
        within_six_months = False
        beyond_six_months = False
        if license.expiration_date is not None:
            if license.expiration_date < today:
                is_expired = True
            elif license.expiration_date < three_months:
                within_three_months = True
            elif license.expiration_date < six_months:
                within_six_months = True
            else:
                beyond_six_months = True
        else:
            break  # skip if no expiration_date
        temp_license_data = {
            "number": license.number,
            "issue_date": license.issue_date,
            "expiration_date": license.expiration_date,
            "employee_name": license.employee.name,
            "is_expired": is_expired,
            "within_three_months": within_three_months,
            "within_six_months": within_six_months,
            "beyond_six_months": beyond_six_months,
        }
        temp_license_info.append(temp_license_data)

    temp_license_info = sorted(temp_license_info,
                               key=lambda k: k['expiration_date'])
    return render(request, 'view_license_info.html',
                  dict(state_name=state_name,
                       license_requirements=license_requirements,
                       perm_license_info=perm_license_info,
                       temp_license_info=temp_license_info),
                  context_instance=RequestContext(request))
