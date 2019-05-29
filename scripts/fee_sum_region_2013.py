#! /usr/bin/env python
from datetime import date
import locale
import sys
import os

sys.path.insert(0, os.getcwd().replace('/scripts', ''))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "nexus.settings")

from nexus.models import Appraisal


if __name__ != "__main__":
    sys.exit(1)

locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')
start_date = date(2013, 1, 1)
end_date = date(2013, 12, 31)

# region and zipcode fee sums
count = 0
total = 0
regions = {}
for appraisal in Appraisal.objects.filter(due_date__gte=start_date,
                                          due_date__lte=end_date):

    # specify the desired region
    if appraisal.engagement_property.property.base_address is None:
        region = 'bad address - no zipcode'
    else:
        region = appraisal.engagement_property.property.base_address.zipcode
    if appraisal.engagement_property.office:
        office = appraisal.engagement_property.office.name
    else:
        continue

    if region not in regions:
        regions[region] = {'Chicago': [0, 0], 'Atlanta': [0, 0],
                           'Newport Beach': [0, 0]}

    regions[region][office][0] += appraisal.fee
    regions[region][office][1] += 1
    total += appraisal.fee

    count += 1
    sys.stdout.write("Progress: %d\r" % count)
    sys.stdout.flush()


print "------------------------------------------------"
for region in regions:
    if regions[region]['Chicago'][1] or\
            regions[region]['Atlanta'][1] or\
            regions[region]['Newport Beach'][1]:

        print '---------------------'
        print region
        if regions[region]['Chicago'][1]:
            print "--- Chicago: "+locale.\
                currency(regions[region]['Chicago'][0], grouping=True) +\
                " (" + str(regions[region]['Chicago'][1]) + ")"
        if regions[region]['Atlanta'][1]:
            print "--- Atlanta: "+locale.\
                currency(regions[region]['Atlanta'][0], grouping=True) +\
                " (" + str(regions[region]['Atlanta'][1]) + ")"
        if regions[region]['Newport Beach'][1]:
            print "--- Newport Beach: "+locale.\
                currency(regions[region]['Newport Beach'][0], grouping=True) +\
                " (" + str(regions[region]['Newport Beach'][1]) + ")"

print "------------------------------------------------"
print "Appraisals for 2013 - "+locale.currency(total, grouping=True) +\
    " ("+str(count)+")"
