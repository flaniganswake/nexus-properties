#!/bin/bash
THISHOST=$(hostname)
echo $THISHOST
if [ $THISHOST != 'NPVUbuntu' ] && [ $THISHOST != 'NPVData' ] && [ $THISHOST != 'NPVTest' ] && [ $THISHOST != 'NPVDataTest' ];
then
    echo '... this script only runs on NPVUbuntu, NPVData, NPVTest or NPVDataTest'
    echo '... exiting.'
    exit 0
fi
sudo rm -rf /opt/Nexus
cd /opt
echo 'git clone git@github.com:NPVAdvisors/Nexus.git'
git clone git@github.com:NPVAdvisors/Nexus.git
echo 'setting log file permissions'
sudo chown -R npv:npv /opt/Nexus/log
if [ $THISHOST == 'NPVTest' ] || [ $THISHOST == 'NPVDataTest' ]; then
    echo 'copying ~/nexus/settings_local.py to /opt/Nexus/nexus'
    sudo cp /opt/Nexus/requirements/settings_local.py /opt/Nexus/nexus
fi
if [ $THISHOST == 'NPVData' ] || [ $THISHOST == 'NPVDataTest' ]; then
    cd /opt/Nexus
    echo 'running ./reset_all.sh'
    ./reset_all.sh
    echo 'running  ./manage.py test nexus.tests'
    ./manage.py test nexus.tests
    if [ $THISHOST == 'NPVData' ]; then
        read -p "Do you want to back up the databases? [yn]" answer
        if [[ $answer = y ]] ; then
            echo 'backing up the databases'
            TS=$( date +%Y%m%d%H%M )
            pg_dump -U postgres clarity > /tmp/db_dumps/clarity-$TS.dump
            pg_dump -U postgres access > /tmp/db_dumps/access-$TS.dump
            echo 'rsync-ing to NPVUbuntu'
            rsync -avz /tmp/db_dumps/clarity-$TS.dump npv@192.168.111.111:/tmp/db_dumps
            rsync -avz /tmp/db_dumps/access-$TS.dump npv@192.168.111.111:/tmp/db_dumps
        fi
    fi
else
    echo 'setting log file permissions'
    sudo chown -R www-data:www-data /opt/Nexus/log
    echo 'configuring apache2'
    sudo cp /opt/Nexus/requirements/httpd.conf /etc/apache2
    echo 'sudo service apache2 restart'
    sudo service apache2 restart
fi
echo '... finished.'
exit 0
