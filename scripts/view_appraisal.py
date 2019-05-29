#! /usr/bin/env python
import pprint
import sys
import os

sys.path.insert(0, os.getcwd().replace('/scripts', ''))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "nexus.settings")

from access.models import TblEngagementLetter, TblClientMaster
from nexus.models import (Appraisal, ScheduledAppraisal, Assignment,
                          ScheduledAssignment, Employee, Contact,
                          EngagementProperty, Client)


if __name__ != "__main__":
    sys.exit(1)

pp = pprint.PrettyPrinter(indent=4)

if len(sys.argv) != 2:
    print 'usage error - view_appraisal.py <job_number>'
    sys.exit(0)
job_number = sys.argv[1]

# find the Engagement in legacy database
legacy_engagement = TblEngagementLetter.objects.using('legacy').\
    get(job_number=job_number)

print
print '-------- Legacy Engagement --------'
pp.pprint(legacy_engagement.__dict__)

access_client = TblClientMaster.objects.using('legacy')\
    .get(client_id=legacy_engagement.client_id)
print 'client name ----------------------'+access_client.name
print 'property name ----------------------'+legacy_engagement.property_name


# find the Appraisal or ScheduledAppraisal
try:
    appraisal = Appraisal.objects.get(job_number=job_number)

    print
    print '-------- Nexus Appraisal --------'
    pp.pprint(appraisal.__dict__)

    engagement_property = EngagementProperty.objects.\
        get(pk=appraisal.engagement_property_id)
    print
    print '-------- Property --------'
    pp.pprint(engagement_property.property.__dict__)

    client_id = engagement_property.engagement.client.id
    client = Client.objects.\
        get(pk=client_id)
    print
    print '-------- Client --------'
    pp.pprint(client.__dict__)

    try:
        # find the Assignments
        assignments = Assignment.objects.filter(appraisal=appraisal.id)
        for assignment in assignments:
            print
            print '-------- Assignment --------'
            pp.pprint(assignment.__dict__)
            employee = Employee.objects.get(pk=assignment.employee_id)
            pp.pprint(employee.__dict__)
            contact = Contact.objects.get(employee_id=employee)
            pp.pprint(contact.__dict__)
            print '--------'

    except Assignment.DoesNotExist:
        print "Assignments do not exist."


except Appraisal.DoesNotExist:
    try:
        appraisal = ScheduledAppraisal.objects.\
            get(legacy_job_number=job_number)

        print
        print '-------- ScheduledAppraisal --------'
        pp.pprint(appraisal.__dict__)

        try:
            # find the ScheduledAssignments
            assignments = ScheduledAssignment.objects.\
                filter(engagement_property=appraisal.engagement_property)
            for assignment in assignments:
                print
                print '-------- ScheduledAssignment --------'
                pp.pprint(assignment.__dict__)
                employee = Employee.objects.get(pk=assignment.employee_id)
                pp.pprint(employee.__dict__)
                contact = Contact.objects.get(employee_id=employee)
                pp.pprint(contact.__dict__)
                print '--------'

        except ScheduledAssignment.DoesNotExist:
            print "ScheduledAssignments do not exist."

    except ScheduledAppraisal.DoesNotExist:
        print job_number+" does not exist."
        sys.exit(0)
