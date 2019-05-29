#!/bin/bash
echo "... cleaning backup files"
./clean.sh
echo "psql command: DROP DATABASE clarity;"
psql -U postgres -c "DROP DATABASE clarity;"
echo "psql command: CREATE DATABASE clarity;"
psql -U postgres -c "CREATE DATABASE clarity;"
THISHOST=$(hostname)
if [ $THISHOST == 'NPVData' ];
then
    echo "psql command: GRANT ALL PRIVILEGES ON DATABASE clarity TO nexus;"
    psql -c "GRANT ALL PRIVILEGES ON DATABASE clarity TO nexus;"
else
    echo "psql command: GRANT ALL PRIVILEGES ON DATABASE clarity TO postgres;"
    psql -c "GRANT ALL PRIVILEGES ON DATABASE clarity TO postgres;"
fi
psql -U postgres -f clarity.sql clarity
exit 0
