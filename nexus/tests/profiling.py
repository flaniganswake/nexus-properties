"""
Create a profiling report from a unit test run.

From: https://djangosnippets.org/snippets/2734/

Used to figure out occasional 5 second hang during tests (LDAP auth) but might
be useful for general app profiling for code paths that the test plumbing
doesn't alter the runtime too much.
"""

from django.test.simple import DjangoTestSuiteRunner
from django.conf import settings
from django.utils import unittest

try:
    import cProfile as profile
except ImportError:
    import profile


class DjangoTestSuiteRunnerWithProfile(DjangoTestSuiteRunner):

    def run_suite(self, suite, **kwargs):
        runner = unittest.TextTestRunner(verbosity=self.verbosity,
                                         failfast=self.failfast).run

        profile.runctx(
            'result = run_tests(suite)',
            {
                'run_tests': runner,
                'suite': suite,
            },
            locals(),
            getattr(settings, 'TEST_PROFILE', None)
        )
        return locals()['result']
