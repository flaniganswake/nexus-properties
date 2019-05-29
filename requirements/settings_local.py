
DEBUG=True
TEMPLATE_DEBUG = DEBUG
USE_TEMPLATES = False

# configure appropriately
_DB_HOST = '192.168.111.141'
_DB_PORT = '5432'
_DB_USER = 'postgres'
_DB_PASS = ''

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
