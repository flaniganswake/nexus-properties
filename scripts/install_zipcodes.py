#! /usr/bin/env python
import os
import sys
import json
import logging
import datetime

sys.path.insert(0, os.getcwd().replace('/scripts', ''))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "nexus.settings")


if __name__ != "__main__":
    sys.exit(1)

log = logging.getLogger('nexus')

# generate timestamp file
file = open("nexus/fixtures/zipcodes/.timestamp", "w")
current_time = datetime.datetime.now()
file.write(str(current_time))
file.close()

### initialize the model counts and lists
zipcode_count = 0
zipcode_list = []

# ---------------------------------------------------------------
# populate Zipcodes from the database file
print '... creating zipcodes'

# read the lines into a list
lines = [line.strip() for line in open('data/z5llc.txt')]
for line in lines:
    if len(line) == 1:
        break
    line = line.replace("\"", "")
    line = line.split(',')
    zip_dict = {
        "city": line[0],
        "state": line[1],
        "zipcode": line[2],
        "areacode": line[3],
        "fips": line[4],
        "county": line[5],
        "timezone": line[6],
        "dst": line[7],
        "latitude": line[8],
        "longitude": line[9],
        "dtype": line[10],
        }
    zipcode_list.append(zip_dict)
    zipcode_count += 1


# zipcode.json
zipcodes = [
    {
        "model": "nexus.Zipcode",
        "pk": count,
        "fields": {
            "city": item["city"],
            "state": item["state"],
            "zipcode": item["zipcode"],
            "areacode": item["areacode"],
            "fips": item["fips"],
            "county": item["county"],
            "timezone": item["timezone"],
            "dst": item["dst"],
            "latitude": item["latitude"],
            "longitude": item["longitude"],
            "dtype": item["dtype"],
            }
    } for count, item in enumerate(zipcode_list, 1)]
print '... zipcodes ' + str(zipcode_count)
json_nexus_zips = json.dumps(zipcodes, indent=4, sort_keys=True)
file = open("nexus/fixtures/zipcodes/zipcode.json", "w")
file.write(json_nexus_zips)
file.close()
