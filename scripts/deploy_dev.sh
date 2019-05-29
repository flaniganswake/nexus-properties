#!/bin/bash
THISHOST=$(hostname)
echo $THISHOST
if [ $THISHOST != 'NexusVM' ];
then
    echo '... this script only runs on NexusVM'
    echo '... exiting.'
    exit 0
fi
sudo rm -rf /opt/Nexus
cd /opt
echo 'git clone git@github.com:NPVAdvisors/Nexus.git'
git clone git@github.com:NPVAdvisors/Nexus.git
echo 'setting log file permissions'
sudo chown -R npv:npv /opt/Nexus/log
echo 'copying ~/nexus/settings_local.py to /opt/Nexus/nexus'
sudo cp ~/nexus/settings_local.py /opt/Nexus/nexus
echo 'resetting the databases'
cd /opt/Nexus
echo 'running ./reset_all.sh'
./reset_all.sh
echo 'running  ./manage.py test nexus.tests'
./manage.py test nexus.tests
echo '... finished.'
exit 0
