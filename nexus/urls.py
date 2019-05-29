from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings
from tastypie.api import Api

from .views import (home, assigned_appraisals, all_appraisals,
                    edit_engagement, edit_engagement_property,
                    all_clients, view_client, edit_amf,
                    view_property, view_appraisal, view_portfolio,
                    view_work_in_progress, view_work_in_progress_csv,
                    view_state_licensing, view_license_info,
                    employee_appraisals,)
from . import api


admin.autodiscover()

# Register Tastypie resources to the API.
v1_api = Api(api_name='v1')
v1_api.register(api.AddressResource())
v1_api.register(api.AMFResource())
v1_api.register(api.EngagementPropertyResource())
v1_api.register(api.AppraisalOccurrenceScheduleResource())
v1_api.register(api.ScheduledAssignmentResource())
v1_api.register(api.AssignmentResource())
v1_api.register(api.ScheduledAppraisalResource())
v1_api.register(api.AppraisalResource())
v1_api.register(api.AppraisalResourceThin())
v1_api.register(api.AppraisalStatusChangeResource())
v1_api.register(api.ClientResource())
v1_api.register(api.ContactResource())
v1_api.register(api.EmployeeResource())
v1_api.register(api.EngagementResource())
v1_api.register(api.LicenseResource())
v1_api.register(api.LicenseRequirementsResource())
v1_api.register(api.OfficeResource())
v1_api.register(api.PortfolioResource())
v1_api.register(api.PropertyResource())
v1_api.register(api.ZipcodeResource())


urlpatterns = patterns(
    '',

    # landing pages
    url(r'^$', home),
    url(r'^assigned-appraisals/$', assigned_appraisals),
    url(r'^appraisals/$', all_appraisals),
    url(r'^employee-appraisals/$', employee_appraisals),

    # engagement
    url(r'^engagement/property/(?P<prop_id>.+)$', edit_engagement_property),
    url(r'^engagement/$', edit_engagement),
    url(r'^engagement/(?P<engagement_id>.+)$', edit_engagement),

    # property
    url(r'^property/(?P<property_id>.+)$', view_property),

    # appraisal
    url(r'^appraisal/(?P<appraisal_id>.+)$', view_appraisal),

    # portfolio
    url(r'^portfolio/(?P<portfolio_id>.+)$', view_portfolio),

    # work in progress
    url(r'^work-in-progress/$', view_work_in_progress),
    url(r'^work-in-progress-csv/$', view_work_in_progress_csv),


    # client/amf
    url(r'^clients/$', all_clients),
    url(r'^client/(?P<client_id>.+)$', view_client),
    url(r'^amf/$', edit_amf),
    url(r'^amf/(?P<amf_id>.+)$', edit_amf),

    # license info
    url(r'^state-licensing/$', view_state_licensing),
    url(r'^license-info/(?P<state>.+)$', view_license_info),

    # Tastypie api
    url(r'^api/', include(v1_api.urls)),

    # admin
    url(r'^admin/', include(admin.site.urls)),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # authentication
    url(r'^employees/login/', 'django.contrib.auth.views.login'),
    url(r'^logout/', 'django.contrib.auth.views.logout',
        {'next_page': '/employees/login/'}),
)


if settings.DEBUG:
    from django.views.generic import TemplateView

    urlpatterns += patterns(
        '',
        url(r'^404.html$', TemplateView.as_view(template_name='404.html'))
    )
