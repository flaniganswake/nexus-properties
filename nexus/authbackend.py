import logging
import ldap

from django.conf import settings
from django.contrib.auth.models import User

from models import Employee


log = logging.getLogger('nexus')


AUTH_LDAP_SERVER_URI = settings.AUTH_LDAP_SERVER_URI
AUTH_LDAP_SERVER_DN = settings.AUTH_LDAP_SERVER_DN
AUTH_LDAP_BASE_DN = settings.AUTH_LDAP_BASE_DN


class AuthBackend(object):

    def authenticate(self, username, password):

        try:
            l = ldap.initialize(AUTH_LDAP_SERVER_URI)
            l.protocol_version = 3
            username = username
            password = password
            l.set_option(ldap.OPT_REFERRALS, 0)
            l.simple_bind_s(username+'@'+AUTH_LDAP_SERVER_DN, password)

        except ldap.LDAPError, e:
            log.error('ldap.LDAPError - '+e)

        user = self.find_user(username)
        employee = None
        if user is not None:
            employee = self.find_employee(user)
        if employee is None:
            user = None

        return user

    def get_user(self, userid):
        user = None
        try:
            user = User.objects.get(id=userid)
        except User.DoesNotExist:
            log.error('User.DoesNotExist')
        return user

    def find_user(self, username):
        user = None
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            log.error('User.DoesNotExist - '+username)
        return user

    def find_employee(self, user):
        employee = None
        try:
            employee = Employee.objects.get(user=user)
        except Employee.DoesNotExist:
            log.error('Employee.DoesNotExist - '+user.username)
        return employee
