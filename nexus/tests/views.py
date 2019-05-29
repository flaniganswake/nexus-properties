from datetime import date
from django.core.exceptions import PermissionDenied
from .test import NexusTestCase


class ViewHomeTest(NexusTestCase):

    def setUp(self):
        self._admin_user()

    def test_call_view_denies_anonymous(self):
        response = self.client.get('/', follow=True)
        self.assertRedirects(response, '/employees/login/?next=/')

    def test_call_view_loads(self):
        if self.client.login(username='admin', password='test'):
            response = self.client.get('/admin/')
            self.assertEqual(response.status_code, 200)
        else:
            raise PermissionDenied


class ViewAppraisalTest(NexusTestCase):

    def setUp(self):
        self._admin_user()
        self._property(id=1, name='Blech')
        self._client(id=1, name='Yep')
        self._contact(id=1, first_name='Some', last_name='One', client_id=1)
        self._engagement(id=1, client_id=1, client_contact_id=1, property_id=1)
        self._engagement_property(id=1, engagement_id=1, property_id=1)
        self._appraisal(id=1, engagement_property_id=1,
                        due_date=date(2015, 2, 22), job_number='test')

    def test_call_view_denies_anonymous(self):
        response = self.client.get('/appraisal/1', follow=True)
        self.assertRedirects(response, '/employees/login/?next=/appraisal/1')

    def test_call_view_loads(self):
        if self.client.login(username='admin', password='test'):
            response = self.client.get('/appraisal/1')
            self.assertEqual(response.status_code, 200)
            self.assertTemplateUsed(response, 'view_appraisal.html')
        else:
            raise PermissionDenied


class ViewClientListTest(NexusTestCase):

    def setUp(self):
        self._admin_user()

    def test_call_view_denies_anonymous(self):
        response = self.client.get('/clients/', follow=True)
        self.assertRedirects(response, '/employees/login/?next=/clients/')

    def test_call_view_loads(self):
        if self.client.login(username='admin', password='test'):
            response = self.client.get('/clients/')
            self.assertEqual(response.status_code, 200)
            self.assertTemplateUsed(response, 'clients.html')
        else:
            raise PermissionDenied


class ViewClientTest(NexusTestCase):

    def setUp(self):
        self._admin_user()
        self._client(id=1, name='Yep')

    def test_call_view_denies_anonymous(self):
        response = self.client.get('/client/1', follow=True)
        self.assertRedirects(response, '/employees/login/?next=/client/1')

    def test_call_view_loads(self):
        if self.client.login(username='admin', password='test'):
            response = self.client.get('/client/1')
            self.assertEqual(response.status_code, 200)
            self.assertTemplateUsed(response, 'view_client.html')
        else:
            raise PermissionDenied
