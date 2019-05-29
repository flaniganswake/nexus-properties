#! /usr/bin/env python
import os
import sys
import json
import logging

sys.path.insert(0, os.getcwd().replace('/scripts', ''))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "nexus.settings")

from nexus.models import Address

if __name__ != "__main__":
    sys.exit(1)

log = logging.getLogger('nexus')


# need to import addresses
json_data = open('nexus/fixtures/geos/address.json')
nexus_addresses = json.load(json_data)
json_data.close()


# ---------------------------------------------------------------
# update nexus_addresses with geolocation data
# geolocation request limit for free is 2500 per 24hrs
print '... updating address geolocations'
update_count = 0
for nexus_address_obj in Address.objects.all():

    if nexus_address_obj.latitude is None or\
            nexus_address_obj.longitude is None:

        # find address geolocation in fixtures
        for nexus_address in nexus_addresses:
            if nexus_address_obj.address1 == \
                    nexus_address["fields"]["address1"] and\
                    nexus_address_obj.zipcode == \
                    nexus_address["fields"]["zipcode"]:
                if nexus_address["fields"]["latitude"] and\
                        nexus_address["fields"]["longitude"]:
                    nexus_address_obj.latitude = \
                        nexus_address["fields"]["latitude"]
                    nexus_address_obj.longitude = \
                        nexus_address["fields"]["longitude"]
                    nexus_address_obj.save()
                    update_count += 1
                    break

        sys.stdout.write("Progress: %d\r" % update_count)
        sys.stdout.flush()
        continue
