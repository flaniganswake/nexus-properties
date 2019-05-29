#!/bin/bash
echo "... cleaning backup files"
./clean.sh
echo "psql command: DROP DATABASE clarity;"
psql -U postgres -c "DROP DATABASE clarity;"
echo "psql command: CREATE DATABASE clarity;"
psql -U postgres -c "CREATE DATABASE clarity;"
echo "./manage.py syncdb --noinput"
./manage.py syncdb --noinput
echo "scripts/install_fixtures.py"
scripts/install_fixtures.py
echo "./manage.py loaddata nexus/fixtures/*.json"
./manage.py loaddata nexus/fixtures/*.json
echo "scripts/import_legacy.py"
scripts/import_legacy.py
echo "scripts/import_geos_fixtures.py"
scripts/import_geos_fixtures.py
echo "scripts/fetch_geos.py"
scripts/fetch_geos.py
echo "pg_dump clarity > clarity.sql"
pg_dump -U postgres clarity > clarity.sql
echo "remove role specific REVOKE/GRANT from clarity.sql"
sed --in-place '/REVOKE ALL ON SCHEMA public FROM/d' clarity.sql
sed --in-place '/GRANT ALL ON SCHEMA public TO/d' clarity.sql
echo "...finished."
exit 0
