from .test import NexusTestCase
from .models import *  # noqa
from .api import *  # noqa
from .views import *  # noqa


class SanityTest(NexusTestCase):
    """
    Very basic (temporary) sanity tests to catch world breaking bugs.

    NB: This will not catch incorrect attributes listed in admin.py.
        Unfortunately the Django test server does not throw a 500 as the
        normal devel server does unless you traverse to the full URL of
        the erroring model in the Django admin. Fortunately you should catch
        these issues if you run the server and try to pull up any URL.
    """

    def test_get_index(self):
        self._employee(user=self._admin_user())
        res = self._tclient('admin', 'test').get('/')
        self.assertEqual(res.status_code, 302)
