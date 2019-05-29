#! /usr/bin/env python
import sys
import os

sys.path.insert(0, os.getcwd().replace('/scripts', ''))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "nexus.settings")

from nexus.models import EngagementProperty

if __name__ != "__main__":
    sys.exit(1)

for ep in EngagementProperty.objects.all():

    if ep.property.client_asset_number:
        ep.client_provided_id1 = ep.property.client_asset_number
        print 'fixed ep.client_provided_id1 - '+ep.client_provided_id1
    ep.save()
