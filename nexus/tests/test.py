"""Module for test plumbing not tests themselves."""

from django.test import TestCase


class HttpStatus(object):
    OK = 200
    CREATED = 201
    ACCEPTED = 202
    NO_CONTENT = 204
    NOT_IMPLEMENTED = 501
    BAD_REQUEST = 400
    NOT_FOUND = 404


class NexusTestCase(TestCase):
    """Base TestCase class with some utilities"""

    def todo(self):
        self.fail('NOT IMPLEMENTED')

    def _tclient(self, username=None, password='x'):
        """
        Get a Django test client instance, optionally with a user logged in.
        """
        from django.test.client import Client
        c = Client()
        if username:
            self.assertTrue(c.login(username=username, password=password),
                            u'unable to login {!r} with {!r}'
                            .format(username, password))
        return c

    # Entity creation and related shortcuts

    def _admin_user(self):
        from django.contrib.auth.models import User
        u = User.objects.create(id=1, username='admin', is_superuser=True,
                                is_staff=True)
        u.set_password('test')
        u.save()
        return u

    def _user(self, **kwargs):
        from django.contrib.auth.models import User
        return User.objects.create(**kwargs)

    def _obj(self, model_name, defaults=None, **kwargs):
        import nexus.models
        cls = getattr(nexus.models, model_name)
        defaults = defaults or {}
        defaults.update(kwargs)
        o = cls(**defaults)
        o.save()
        return o

    def _client(self, **kwargs):
        return self._obj('Client', **kwargs)

    def _property(self, **kwargs):
        return self._obj('Property', **kwargs)

    def _portfolio(self, **kwargs):
        return self._obj('Portfolio', **kwargs)

    def _engagement(self, **kwargs):
        return self._obj('Engagement', **kwargs)

    def _contact(self, **kwargs):
        return self._obj('Contact', **kwargs)

    def _employee(self, **kwargs):
        if 'user_id' not in kwargs and 'user' not in kwargs:
            id = kwargs.get('id', 1)
            u = self._user(id=id, username='testuser{}'.format(id))
            u.set_password('x')
            u.save()
            kwargs['user_id'] = id
        return self._obj('Employee', **kwargs)

    def _office(self, **kwargs):
        return self._obj('Office', **kwargs)

    def _assignment(self, **kwargs):
        return self._obj('Assignment', **kwargs)

    def _amf(self, **kwargs):
        return self._obj('AMF', **kwargs)

    def _address(self, **kwargs):
        return self._obj('Address', **kwargs)

    def _engagement_property(self, **kwargs):
        return self._obj('EngagementProperty', **kwargs)

    def _appraisal_occurrence_schedule(self, **kwargs):
        return self._obj('AppraisalOccurrenceSchedule', **kwargs)

    def _scheduled_appraisal(self, **kwargs):
        defaults = dict(fee=1.00)
        return self._obj('ScheduledAppraisal', defaults, **kwargs)

    def _appraisal(self, **kwargs):
        defaults = dict(job_number='XXX{}'.format(kwargs.get('id')), fee=1.00)
        return self._obj('Appraisal', defaults, **kwargs)

    def _appraisal_status_change(self, **kwargs):
        return self._obj('AppraisalStatusChange', **kwargs)

    def _scheduled_assignment(self, **kwargs):
        return self._obj('ScheduledAssignment', **kwargs)
