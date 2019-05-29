from __future__ import print_function
import sys
import os

# this file contains the production settings
# use settings_local.py to override these

# Nexus Specific Settings
#
# Use NX_ prefix when adding to this list


NX_TEMP_LIST_LIMIT = 50
"""Temporary limit until pagination or scroll-load is implemented"""

NX_ACTIVATE_APPRAISAL_WINDOW = ('weeks', 5)
"""
Increment unit and number before scheduled due-date to create the active.

Format is a two item sequence of (<unit>, <number>) e.g. ```('days', 42)```.
"""


DEBUG = False

ADMINS = (
    ('Developers', 'dev@npvadvisors.com'),
)
EMAIL_HOST = '192.168.111.253'
SMTP_SERVER = EMAIL_HOST

ALLOWED_HOSTS = ['localhost', '.npvadvisors.com', 'npvjoblog', 'npvubuntu',
                 '192.168.111.126', '192.168.111.111']

# environment
# NPVUbuntu: 192.168.111.111 (appserver)
# NPVData: 192.168.111.109 (database)
# NPVTest: 192.168.111.126 (appserver)
# NPVDataTest: 192.168.111.141 (database)

MANAGERS = ADMINS

INTERNAL_IPS = ('127.0.0.1',)

_DB_HOST = '192.168.111.109'
_DB_PORT = '5432'
_DB_USER = '<username>'
_DB_PASS = '<password>'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'clarity',
        'USER': _DB_USER,
        'PASSWORD': _DB_PASS,
        'HOST': _DB_HOST,
        'PORT': _DB_PORT,
        },
    'legacy': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'access',
        'USER': _DB_USER,
        'PASSWORD': _DB_PASS,
        'HOST': _DB_HOST,
        'PORT': _DB_PORT,
        },
}

# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# In a Windows environment this must be set to your system time zone.
TIME_ZONE = 'America/Chicago'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'en-us'

SITE_ID = 1

# If you set this to False, Django will make some optimizations so as not
# to load the internationalization machinery.
USE_I18N = True

# If you set this to False, Django will not format dates, numbers and
# calendars according to the current locale.
USE_L10N = True

# If you set this to False, Django will not use timezone-aware datetimes.
USE_TZ = False

# Absolute filesystem path to the directory that will hold user-uploaded files.
# Example: "/home/media/media.lawrence.com/media/"
MEDIA_ROOT = ''

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash.
# Examples: "http://media.lawrence.com/media/", "http://example.com/media/"
MEDIA_URL = ''

# Absolute path to the directory static files should be collected to.
# Don't put anything in this directory yourself; store your static files
# in apps' "static/" subdirectories and in STATICFILES_DIRS.
# Example: "/home/media/media.lawrence.com/static/"
STATIC_ROOT = ''
# URL prefix for static files.
# Example: "http://media.lawrence.com/static/"
STATIC_URL = '/static/'

# set the paths

NEXUS_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

STATICFILES_DIRS = os.path.join(NEXUS_ROOT, 'static'),

# List of finder classes that know how to find static files in
# various locations.
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
)

# Make this unique, and don't share it with anybody.
SECRET_KEY = '9(fsztsb-&amp;kneq6af4erf@-chdo#%=4r^x-3fmkx*ai-p^7-sc'

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

TEMPLATE_CONTEXT_PROCESSORS = (
    "django.contrib.auth.context_processors.auth",
    "django.core.context_processors.debug",
    "django.core.context_processors.i18n",
    "django.core.context_processors.media",
    "django.core.context_processors.static",
    "django.core.context_processors.tz",
    'django.core.context_processors.request',
    'nexus.context_processors.title',
)

MIDDLEWARE_CLASSES = (
    # To enable copy MIDDLEWARE_CLASSES to settings_local.py and uncomment.
    # 'nexus.middleware.QueryCountDebugMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'nexus.middleware.LogViewServerErrors'
    # 'django.middleware.clickjacking.XFrameOptionsMiddleware',
    # 'debug_toolbar.middleware.DebugToolbarMiddleware',
)

ROOT_URLCONF = 'nexus.urls'

# Python dotted path to the WSGI application used by Django's runserver.
WSGI_APPLICATION = 'nexus.wsgi.application'


INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.humanize',
    'django.contrib.admin',
    'django.contrib.admindocs',
    'django_google_maps',
    'tastypie',
    'south',
    'nexus',
)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': True,

    'formatters': {
        'verbose': {
            'format': ('%(levelname)s %(asctime)s %(module)s %(process)d: '
                       '%(message)s')
        },
        'simple': {
            'format': '%(levelname)s: %(message)s'
        },
    },

    'handlers': {
        'null': {
            'level': 'DEBUG',
            'class': 'django.utils.log.NullHandler',
        },
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'simple'
        },
        'debug_file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'filename': os.path.join(NEXUS_ROOT, 'log/debug.log'),
            'mode': 'a',
            'formatter': 'simple'
        },
        'nexus_primary': {
            'level': 'INFO',
            'class': 'logging.FileHandler',
            'filename': os.path.join(NEXUS_ROOT, 'log/nexus.log'),
            'mode': 'a',
            'formatter': 'verbose'
        }
    },

    'loggers': {
        'django.request': {
            'handlers': ['debug_file'],
            'level': 'ERROR',
            'propagate': True,
        },
        'nexus': {
            'handlers': ['console', 'nexus_primary', 'debug_file'],
            'propagate': True,
            'level': 'DEBUG',
        },
    }
}

#
# Auth related
#

LOGIN_URL = '/employees/login/'
LOGIN_REDIRECT_URL = '/'

# LDAP support - this section can be trimmed down
from django_auth_ldap.config import LDAPSearch

# TODO: capitalize if settings prefix with _ if not
main_dn = 'dc=com'
groups_dn = 'ou=Groups,'+main_dn
users_dn = 'ou=Users,'+main_dn

try:
    import ldap
except ImportError:
    print('Failed to import ldap.', file=sys.stderr)

AUTHENTICATION_BACKENDS = (
    #'django_auth_ldap.backend.LDAPBackend',
    'django.contrib.auth.backends.ModelBackend',
    'nexus.authbackend.AuthBackend',
)
AUTH_LDAP_SERVER_URI = "ldap://stigma.walden-marling.com"
AUTH_LDAP_BASE_DN = "ou=Chicago, dc=WALDEN-MARLING, dc=com"
AUTH_LDAP_SERVER_DN = "walden-marling.com"
AUTH_LDAP_USER_SEARCH = LDAPSearch(users_dn, 2, "(uid=%(user)s)")
AUTH_LDAP_USER_ATTR_MAP = {
    "first_name": "givenName",
    "last_name": "sn",
    "email": "mail"
}
AUTH_LDAP_MIRROR_GROUPS = True
AUTH_LDAP_ALWAYS_UPDATE_USER = True
AUTH_LDAP_USER_SEARCH = LDAPSearch("ou=people,o=company", ldap.SCOPE_SUBTREE,
                                   "(uid=%(user)s)")
LDAP_SEARCH_BASE = "ou=users,o=intra,dc=walden-marling"
LDAP_BASE_USER = "anonymous"
LDAP_BASE_PASS = ""
LDAP_USER_QUERY = "(uid=%s)"
AUTH_LDAP_BIND_DN = "cn=readonly,cn=users,dc=myorg,dc=com"
AUTH_LDAP_BIND_PASSWORD = ""
AUTH_LDAP_USER_DN_TEMPLATE = "uid=%(user)s,dc=rd,dc=net"
AUTH_LDAP_USER_SEARCH = LDAPSearch("ou=users,dc=walden-marling,dc=com",
                                   ldap.SCOPE_SUBTREE, "(uid=%(user)s)")
AUTH_LDAP_USER_FLAGS_BY_GROUP = {
    "is_staff":         "cn=admins,"+groups_dn,
    "is_superuser":     "cn=developers,"+groups_dn,
}

# Tastypie settings
API_LIMIT_PER_PAGE = 0
TASTYPIE_DEFAULT_FORMATS = ['json']

# Local settings that only apply to one instance which should not be checked
# into VCS can be placed in a settings_local module, e.g. settings_local.py in
# this directory. This module is optional and will not trigger an error if not
# present. The loading of settings_local can be prevented even when the module
# is present by having NEXUS_SKIP_LOCAL_SETTINGS present in the environment.

if not 'NEXUS_SKIP_LOCAL_SETTINGS' in os.environ:
    try:
        from settings_local import *  # noqa
    except ImportError:
        print('No settings_local found - this is a production deployment.',
              file=sys.stderr)
        pass
else:
    print('Loading settings_local disabled via environment.',
          file=sys.stderr)

#
# Place any settings that might need the final value of DEBUG below the above
# local settings import magic.
#

TEMPLATE_DEBUG = DEBUG

# Settings to be used for unittests. NEXUS_TEST in the environ allows you to
# get the testing settings outside of an actual test run e.g.
#
#   $ NEXUS_TEST=1 ./manage.py shell
#
if 'test' in sys.argv or 'NEXUS_TEST' in os.environ:
    # Remove LDAP auth for tests
    AUTHENTICATION_BACKENDS = ('django.contrib.auth.backends.ModelBackend',)
    # Disable migrations as the test DB is created fresh with syncdb
    SOUTH_TESTS_MIGRATE = False
    DATABASES = {
        'default': {'ENGINE': 'django.db.backends.sqlite3',
                    'NAME': ':memory:'}
    }

    # Profile the unit test run.TEST_PROFILE is the profiling data file
    # created.
    if 'NEXUS_PROFILE_TESTS' in os.environ:
        TEST_RUNNER = 'nexus.tests.test.DjangoTestSuiteRunnerWithProfile'
        TEST_PROFILE = 'unittest.profile'
