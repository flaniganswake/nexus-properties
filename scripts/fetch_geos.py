#! /usr/bin/env python
import os
import sys
import json
import time
import logging

sys.path.insert(0, os.getcwd().replace('/scripts', ''))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "nexus.settings")

from nexus.models import Address

if __name__ != "__main__":
    sys.exit(1)

log = logging.getLogger('nexus')


# ---------------------------------------------------------------
# update nexus_addresses with geolocation data
# geolocation request limit for free is 2500 per 24hrs
print '... updating addresses'

error_count = 0
missing_count = 0
success_count = 0
for nexus_address in Address.objects.all():

    if nexus_address.latitude is None or\
            nexus_address.longitude is None:

        missing_count += 1

        address = nexus_address.address1
        city = nexus_address.city
        state = nexus_address.state
        zipcode = nexus_address.zipcode[:5]

        if address.startswith('NEC'):
            address = address.replace('NEC', 'Northeast Corner')
        if address.startswith('SEC'):
            address = address.replace('SEC', 'Southeast Corner')
        if address.startswith('NWC'):
            address = address.replace('NWC', 'Northwest Corner')
        if address.startswith('SWC'):
            address = address.replace('NEC', 'Southwest Corner')

        print '--------------------------------------------------'
        print str(nexus_address.__dict__)

        # request limit for free is 2500 per 24hrs
        req_url_base = ('http://maps.googleapis.com/maps/api/geocode/json?'
                        'sensor=true&address=')
        try:
            req_url = req_url_base + '+{}+{}+{}+{}'.format(
                address.replace(' ', '+'),
                city.replace(' ', '+'),
                state.replace(' ', '+'),
                zipcode
                )
        except UnicodeEncodeError:
            print 'UnicodeEncodeError'
            continue

        import urllib2
        req = urllib2.Request(req_url)
        try:
            response = urllib2.urlopen(req)
            location_dict = json.loads(response.read())
            if location_dict["status"] == 'OK':
                geom = location_dict['results'][0]['geometry']
                location = geom['location']
                nexus_address.latitude = location['lat']
                nexus_address.longitude = location['lng']
                nexus_address.save()
                success_count += 1
            elif location_dict["status"] == 'OVER_QUERY_LIMIT':
                print 'status: OVER_QUERY_LIMIT'
                error_count += 1
                break
            else:
                print 'status: ZERO_RESULTS: '+req_url
                error_count += 1

        except urllib2.HTTPError:
            print 'urllib2.HTTPError: '+req_url
            error_count += 1
        except urllib2.URLError:
            print 'urllib2.URLError: '+req_url
            error_count += 1

        time.sleep(.2)  # to prevent query overload

print '... success: ' + str(success_count)
print '... missing: ' + str(missing_count)
print '... errors: ' + str(error_count)
