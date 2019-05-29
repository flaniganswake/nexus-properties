#!/bin/bash
TS=$( date +%Y%m%d-%H%M )
pg_dump -U postgres clarity > /opt/Nexus/archives/clarity-$TS.sql
# need to set up ssh keys to rsink
#rsync -avz psql@192.168.111.245:/psqlbak/ /opt/Nexus/archives/clarity-$TS.dump
exit 0
