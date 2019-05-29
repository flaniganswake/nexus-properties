import logging
import json
from datetime import date

from .test import NexusTestCase, HttpStatus as Status


log = logging.getLogger('nexus')


class FlatListMixinTest(NexusTestCase):

    def _cls(self):
        from nexus.api import FlatListMixin

        class Frob(FlatListMixin):
            pass
        return Frob

    def test_w_flat(self):
        class FakeRequest(object):
            GET = {'flat': '1'}
        req = FakeRequest()
        data = dict(objects=['some', 'thing'])
        self.assertEqual(self._cls()().alter_list_data_to_serialize(req, data),
                         ['some', 'thing'])

    def test_wo_flat(self):
        class FakeRequest(object):
            GET = {}
        req = FakeRequest()
        data = dict(objects=['some', 'thing'])
        self.assertEqual(self._cls()().alter_list_data_to_serialize(req, data),
                         dict(objects=['some', 'thing']))


class ClientResourceTest(NexusTestCase):

    # client properties collection URI

    def test_get_properties_for_client(self):
        self._client(id=1, name='Big Bank')
        self._client(id=2, name='Mr. Burns')
        self._property(name='Kwiki-Mart', client_id=1)
        self._property(name='Nuclear Power Plant', client_id=2)
        self._property(name='Moes Tavern', client_id=1)
        tc = self._tclient()

        res = tc.get('/api/v1/client/1/')
        self.assertEqual(res.status_code, Status.OK)
        data = json.loads(res.content)
        self.assertIn('client=1', data.get('properties_uri'))

        res = tc.get(data.get('properties_uri'))
        self.assertEqual(res.status_code, Status.OK)
        data = json.loads(res.content)
        self.assertEqual(data.get('meta', {}).get('total_count'), 2)
        self.assertItemsEqual([p.get('name') for p in data.get('objects', [])],
                              ['Moes Tavern', 'Kwiki-Mart'])

    # client portfolios collection URI

    def test_get_portfolios_for_client(self):
        self._client(id=1, name='Frugal Fred')
        self._client(id=2, name='Rich Uncle Pennybags')
        self._portfolio(id=1, name='Railroads', client_id=2)
        self._portfolio(id=2, name='Utilities', client_id=1)
        self._portfolio(id=3, name='Yellow Properties', client_id=2)
        tc = self._tclient()

        res = tc.get('/api/v1/client/2/')
        self.assertEqual(res.status_code, Status.OK)
        data = json.loads(res.content)
        self.assertIn('client=2', data.get('portfolios_uri'))

        res = tc.get(data.get('portfolios_uri'))
        self.assertEqual(res.status_code, Status.OK)
        data = json.loads(res.content)
        self.assertEqual(data.get('meta', {}).get('total_count'), 2)
        self.assertItemsEqual([p.get('name') for p in data.get('objects', [])],
                              ['Railroads', 'Yellow Properties'])

    def test_get_contacts_for_client(self):
        self._client(id=4, name='Egg Council')
        c = self._client(id=3, name='Bacon Brothers United')
        self._contact(id=1, first_name='Tony', last_name='Montana',
                      client_id=3)
        self._contact(id=2, first_name='Noah', last_name='Peele',
                      client_id=3)
        self._contact(id=3, first_name='Beck', last_name='Andcal',
                      client_id=4)
        tc = self._tclient()

        res = tc.get(c.uri)
        self.assertEqual(res.status_code, Status.OK)
        data = json.loads(res.content)
        self.assertIn('client=3', data.get('contacts_uri'))

        res = tc.get(data.get('contacts_uri'))
        self.assertEqual(res.status_code, Status.OK)
        data = json.loads(res.content)
        self.assertEqual(data.get('meta', {}).get('total_count'), 2)
        got = [p.get('first_name') for p in data.get('objects', [])]
        self.assertItemsEqual(got, ['Tony', 'Noah'])


class AMFResourceTest(NexusTestCase):

    def test_get_contacts_for_amf(self):
        self._amf(id=1, name='The Only AMF that matters.')
        self._amf(id=4, name='An AMF that does not matter')
        self._contact(id=1, first_name='Tony', last_name='Montana',
                      amf_id=1)
        self._contact(id=2, first_name='Noah', last_name='Peele',
                      amf_id=1)
        self._contact(id=3, first_name='Beck', last_name='Andcal',
                      amf_id=4)
        tc = self._tclient()

        res = tc.get('/api/v1/amf/1/')
        self.assertEqual(res.status_code, Status.OK)
        data = json.loads(res.content)
        self.assertIn('amf=1', data.get('contacts_uri'))

        res = tc.get(data.get('contacts_uri'))
        self.assertEqual(res.status_code, Status.OK)
        data = json.loads(res.content)
        self.assertEqual(data.get('meta', {}).get('total_count'), 2)
        got = [p.get('first_name') for p in data.get('objects', [])]
        self.assertItemsEqual(got, ['Tony', 'Noah'])


class EngagementResourceTest(NexusTestCase):

    def test_get_engagements_w_paging(self):
        self._client(id=1, name='Scrooge McDuck')
        self._contact(id=1, first_name='Daffy', last_name='Duck', client_id=1)
        self._property(id=1, name='Coin Pool Complex', client_id=1)
        self._engagement(id=1, client_id=1, property_id=1, client_contact_id=1)
        self._engagement(id=2, client_id=1, property_id=1, client_contact_id=1)
        e1 = self._engagement(id=3, client_id=1, property_id=1,
                              client_contact_id=1)
        e2 = self._engagement(id=4, client_id=1, property_id=1,
                              client_contact_id=1)
        self._engagement(id=5, client_id=1, property_id=1, client_contact_id=1)

        tc = self._tclient()

        res = tc.get('/api/v1/engagement/?offset=2&limit=2')
        self.assertEqual(res.status_code, Status.OK)
        data = json.loads(res.content)
        self.assertEqual(data.get('meta'),
                         dict(previous='/api/v1/engagement/?limit=2&offset=0',
                              total_count=5, offset=2, limit=2,
                              next='/api/v1/engagement/?limit=2&offset=4'))
        self.assertEqual([e1.uri, e2.uri],
                         [e.get('resource_uri') for e in data.get('objects')])


class AssignmentResourceTest(NexusTestCase):

    # Create

    def test_create_procuring_role(self):
        from nexus.models import Role, Appraisal
        self._office(id=1, name='Shenzhou')
        emp = self._employee(id=1, office_id=1)
        self._contact(id=1, last_name='Kinski', employee_id=1)
        self._client(id=1, name='Scrooge McDuck')
        self._property(id=1, name='Coin Pool Complex', client_id=1)
        self._engagement(id=1, client_id=1, property_id=1,
                         client_contact_id=1)
        self._engagement_property(id=1, engagement_id=1, property_id=1)
        appraisal = self._appraisal(id=1, engagement_property_id=1,
                                    due_date=date(2014, 1, 22))
        to_create = dict(role=Role.PROCURER, employee=emp.uri,
                         appraisal=appraisal.uri, fee=104.12)

        tc = self._tclient(emp.user.username)
        res = tc.post('/api/v1/assignment/', json.dumps(to_create),
                      content_type="application/json")

        self.assertEqual(res.status_code, Status.CREATED, res.content)
        uri = res.get('Location', '')
        self.assertIn('/api/v1/assignment/', uri)
        self.assertFalse(uri.endswith('/assignment/'),
                         'Location should point to created resource, not list')
        a = Appraisal.objects.get(pk=1)
        self.assertEqual(a.assignments.all().count(), 1)

    # def test_create_appraiser_role_wo_fee(self):
    #     from nexus.models import Role
    #     self._office(id=1, name='Viking')
    #     emp = self._employee(id=1, office_id=1)
    #     self._contact(id=1, last_name='Kinski', employee_id=1)
    #     self._client(id=1, name='Scrooge McDuck')
    #     self._property(id=1, name='Coin Pool Complex', client_id=1)
    #     self._engagement(id=1, client_id=1, property_id=1,
    #                      client_contact_id=1)
    #     appraisal = self._appraisal(id=1, engagement_id=1, property_id=1,
    #                                 due_date=date(2014, 1, 22))
    #     # XXX: TODO: bizzaro bug requires calling .uri twice before it works
    #     #      My guess is either an uncommitted transaction or a race
    #     #      condition.
    #     appraisal.uri
    #     to_create = dict(role=Role.APPRAISER, employee=emp.uri,
    #                      appraisal=appraisal.uri)

    #     res = self._tclient().post('/api/v1/assignment/',
    #                                json.dumps(to_create),
    #                                content_type="application/json")
    #     self.assertEqual(res.status_code, Status.BAD_REQUEST, res.content)

    # TODO: fail on caps / title validation

    # Update

    def test_update_inspector_role(self):
        from nexus.models import Role
        self._office(id=1, name='Chandrayaan')
        emp = self._employee(id=1, is_inspector=True, office_id=1)
        self._contact(id=1, last_name='Kinski', employee_id=1)
        self._client(id=1, name='Scrooge McDuck')
        self._property(id=1, name='Coin Pool Complex', client_id=1)
        self._engagement(id=1, client_id=1, property_id=1, client_contact_id=1)
        self._engagement_property(id=1, engagement_id=1, property_id=1)
        self._appraisal(id=1, engagement_property_id=1,
                        due_date=date(2014, 1, 22))
        self._assignment(id=23, role=Role.INSPECTOR, fee=42.02, employee_id=1,
                         appraisal_id=1)

        to_update = dict(role=Role.INSPECTOR,
                         employee='/api/v1/employee/1/',
                         appraisal='/api/v1/appraisal/1/',
                         fee=88.57, )

        tc = self._tclient(username=emp.user.username)
        res = tc.put('/api/v1/assignment/23/', json.dumps(to_update),
                     content_type="application/json")

        self.assertEqual(res.status_code, Status.OK)
        from nexus.models import Appraisal, Assignment
        # TODO: consider moving from DecimalField to FloatField
        self.assertEqual(float(Assignment.objects.get(pk=23).fee), 88.57)
        e = Appraisal.objects.get(pk=1)
        self.assertEqual(e.assignments.all().count(), 1)

    # def test_update_inspector_role_wo_fee(self):
    #     from nexus.models import Role
    #     self._office(id=1, name='Deep Impact')
    #     self._employee(id=1, office_id=1)
    #     self._contact(id=1, last_name='Kinski', employee_id=1)
    #     self._client(id=1, name='Scrooge McDuck')
    #     self._property(id=1, name='Coin Pool Complex', client_id=1)
    #     self._engagement(id=1, client_id=1, property_id=1)
    #     self._appraisal(id=1, engagement_id=1, property_id=1,
    #                     due_date=date(2014, 1, 22))
    #     self._assignment(id=23, role=Role.INSPECTOR, fee=42.02,
    #                      employee_id=1,
    #                      appraisal_id=1)

    #     to_update = dict(role=Role.INSPECTOR, employee='/api/v1/employee/1/',
    #                      fee=None, engagement='/api/v1/engagement/1/')

    #     res = self._tclient().put('/api/v1/assignment/23/',
    #                               json.dumps(to_update),
    #                               content_type="application/json")

    #     self.assertEqual(res.status_code, Status.BAD_REQUEST)

    def test_update_of_non_existing(self):
        from nexus.models import Role
        to_update = dict(role=Role.INSPECTOR, employee='/api/v1/employee/1/',
                         fee=22.22, engagement='/api/v1/engagement/1/',
                         property='/api/v1/property/1/')

        res = self._tclient().put('/api/v1/assignment/23/',
                                  json.dumps(to_update),
                                  content_type="application/json")

        self.assertEqual(res.status_code, Status.BAD_REQUEST)

    # Delete

    def test_delete(self):
        from nexus.models import Role
        self._office(id=1, name='Zond')
        self._employee(id=1, office_id=1)
        self._contact(id=1, last_name='Kinski', employee_id=1)
        self._client(id=1, name='Scrooge McDuck')
        self._property(id=1, name='Coin Pool Complex', client_id=1)
        self._engagement(id=1, client_id=1, property_id=1)
        self._engagement_property(id=1, engagement_id=1, property_id=1)
        self._appraisal(id=1, engagement_property_id=1,
                        due_date=date(2014, 1, 22))
        self._assignment(id=23, role=Role.INSPECTOR, fee=42.02, employee_id=1,
                         appraisal_id=1)

        res = self._tclient().delete('/api/v1/assignment/23/')

        self.assertEqual(res.status_code, Status.NO_CONTENT)

        from nexus.models import Appraisal, Assignment
        self.assertFalse(Assignment.objects.filter(pk=23).exists())
        e = Appraisal.objects.get(pk=1)
        self.assertEqual(e.assignments.all().count(), 0)


class OfficeResourceTest(NexusTestCase):

    def test_office_resource_has_engagement_defaults(self):
        office = self._office(id=1, name='McMurdo Station')
        self._employee(id=42, office_id=1)
        self._employee(id=23, office_id=1)
        office.default_engagement_procurer_id = 42
        office.default_engagement_principal_id = 23
        office.save()
        self._contact(id=12, first_name='Opus', last_name='Someone',
                      employee_id=42)
        self._contact(id=13, first_name='Pingu', last_name='Other',
                      employee_id=23)

        res = self._tclient().get(office.uri)
        self.assertEqual(res.status_code, Status.OK)
        data = json.loads(res.content)
        expected = dict(default_engagement_principal='/api/v1/employee/23/',
                        default_engagement_procurer='/api/v1/employee/42/',
                        name='McMurdo Station', contact=None,
                        resource_uri=office.uri)
        self.assertEqual(data, expected)


class EmployeeResourceTest(NexusTestCase):

    # filter by assignment role

    def _create_contacts(self):
        self._contact(id=1, first_name='f1', last_name='l1', employee_id=1)
        self._contact(id=2, first_name='f2', last_name='l2', employee_id=2)
        self._contact(id=3, first_name='f3', last_name='l3', employee_id=3)
        self._contact(id=4, first_name='f4', last_name='l4', employee_id=4)

    def test_list_w_role_researcher(self):
        from nexus.models import Title
        self._office(id=1, name='Skylab')
        self._employee(id=1, title=Title.SENIOR_ASSOCIATE, office_id=1)
        self._employee(id=2, title=Title.PRINCIPAL, office_id=1)
        self._employee(id=3, title=Title.DIRECTOR_RESEARCH, office_id=1)
        self._employee(id=4, title=Title.INTERN_RESEARCH, office_id=1)
        self._employee(id=5, title=Title.INTERN, office_id=1)
        self._create_contacts()

        res = self._tclient().get('/api/v1/employee/?role=RESEARCHER')
        self.assertEqual(res.status_code, Status.OK, res)
        data = json.loads(res.content)
        self.assertEqual(data.get('meta', {}).get('total_count'), 2)
        uris = [o.get('resource_uri') for o in data.get('objects', [])]
        self.assertItemsEqual(uris, ['/api/v1/employee/3/',
                                     '/api/v1/employee/4/'])

    def test_list_w_role_inspector(self):
        self._office(id=1, name='Pioneer')
        self._employee(id=1, is_inspector=False, office_id=1)
        self._employee(id=2, is_inspector=True, office_id=1)
        self._employee(id=3, is_inspector=True, office_id=1)
        self._employee(id=4, is_inspector=False, office_id=1)
        self._create_contacts()

        res = self._tclient().get('/api/v1/employee/?role=INSPECTOR')
        self.assertEqual(res.status_code, Status.OK)
        data = json.loads(res.content)
        self.assertEqual(data.get('meta', {}).get('total_count'), 2)
        uris = [o.get('resource_uri') for o in data.get('objects', [])]
        self.assertItemsEqual(uris, ['/api/v1/employee/2/',
                                     '/api/v1/employee/3/'])


class PortfolioResourceTest(NexusTestCase):

    # Create

    def test_create_portfolio(self):
        client = self._client(id=1, name='Bacon Brothers Unlimited')
        contact = self._contact(id=1, client_id=1, first_name='Noa',
                                last_name='Peel')
        to_create = dict(name='Something Great', client=client.uri,
                         client_contact=contact.uri,
                         notes='This is a test portfolio.')

        res = self._tclient().post('/api/v1/portfolio/',
                                   json.dumps(to_create),
                                   content_type='application/json')

        self.assertEqual(res.status_code, Status.CREATED)
        uri = res.get('Location', '')
        self.assertIn('/api/v1/portfolio/', uri)
        self.assertFalse(uri.endswith('/portfolio/'),
                         'Location should point to created resource, not list')
        from nexus.models import Portfolio
        portos = [p.name for p in Portfolio.objects.all()]
        self.assertEqual(portos, ['Something Great'])


class PropertyResourceTest(NexusTestCase):

    # Create

    def test_create_property(self):

        self._client(id=1, name='Bacon Brothers Unlimited',
                     notes='We do bacon right!', client_type='BANK')
        self._contact(id=1, client_id=1, first_name='Noa', last_name='Peel')
        self._portfolio(id=1, name='Super Import Places',
                        notes='The only portfolio that matters',
                        client_contact_id=1, client_id=1)
        addresses = [dict(address1='123 N Fake Street',
                          city='Fakington',
                          state='Illinois',
                          zipcode='12345'),
                     dict(address1='567 N Deception Ave',
                          city='BaconVille',
                          state='Porkland',
                          zipcode='45678')]
        to_create = dict(client='/api/v1/client/1/',
                         contact='/api/v1/contact/1/',
                         notes='This is a test property.',
                         portfolio='/api/v1/portfolio/1/',
                         name='Bacon Manor', property_type='Land',
                         addresses=addresses)

        res = self._tclient().post('/api/v1/property/',
                                   json.dumps(to_create),
                                   content_type='application/json')
        self.assertEqual(res.status_code, Status.CREATED)
        uri = res.get('Location', '')
        self.assertIn('/api/v1/property/', uri)
        self.assertFalse(uri.endswith('/property/'),
                         'Location should point to created resource, not list')
        from nexus.models import Property
        p = Property.objects.get(pk=1)
        self.assertEqual(Property.objects.all().count(), 1)
        self.assertEqual(p.address_set.all().count(), 2)


class AddressResourceTest(NexusTestCase):

    # Update

    def test_update_property_address(self):

        self._property(id=1, name='Spider Island')
        self._address(id=1, property_id=1, address1='Lerrrgh', zipcode='12345',
                      city='The Village', state='MO')

        to_update = dict(address1='852 N Brainwashed CT', city='Sheepland',
                         state='Fog')

        res = self._tclient().put('/api/v1/address/1/',
                                  json.dumps(to_update),
                                  content_type='application/json')

        self.assertEqual(res.status_code, Status.OK)

        res = self._tclient().get('/api/v1/address/1/')
        data = json.loads(res.content)
        self.assertItemsEqual([data.get('city'), data.get('state')],
                              ['Sheepland', 'Fog'])

    # Delete

    def test_delete_property_address(self):

        self._property(id=1, name='Spider Island')
        self._address(id=1, property_id=1, address1='Lerrrgh', zipcode='12345',
                      city='Pfffht', state='IA')
        self._address(id=2, property_id=1, address1='Bzzzzzzzzz',
                      zipcode='12345', city='Whomp', state='VT')

        res = self._tclient().delete('/api/v1/address/1/')

        self.assertEqual(res.status_code, Status.NO_CONTENT)
        from nexus.models import Address
        self.assertEqual(Address.objects.all().count(), 1)


class AppraisalStatusUpdateTest(NexusTestCase):

    def _setup_appraisal_create(self):
        self._client(id=1, name='Doctor What')
        self._contact(id=1, first_name='Herr', last_name='Arzt', client_id=1)
        self._property(id=1, name='Spider Island')
        self._engagement(id=1, property_id=1, client_id=1, client_contact_id=1)
        self._engagement_property(id=1, engagement_id=1, property_id=1)
        self._office(id=1, name='Pioneer')
        from nexus.models import Title
        emp = self._employee(id=1, office_id=1, title=Title.DIRECTOR)
        self._contact(id=2, first_name='Doctor', last_name='What',
                      employee_id=1)
        return emp

    def test_update_appraisal_status_to_draft_sent_wo_final_value(self):
        from nexus.models import AppraisalStatus
        self._setup_appraisal_create()
        appr = self._appraisal(id=1,
                               fee=5000.00,
                               restricted=False,
                               engagement_property_id=1,
                               due_date=date(2014, 1, 22),
                               status=AppraisalStatus.IN_PROGRESS)

        to_update = dict(status=AppraisalStatus.DRAFT_SENT)

        res = self._tclient().put(appr.uri,
                                  json.dumps(to_update),
                                  content_type='application/json')

        self.assertEqual(res.status_code, Status.BAD_REQUEST)

    def test_update_appraisal_status_to_draft_sent_w_final_value(self):
        from nexus.models import AppraisalStatus
        emp = self._setup_appraisal_create()
        appr = self._appraisal(id=1,
                               fee=5000.00,
                               restricted=False,
                               engagement_property_id=1,
                               due_date=date(2014, 1, 22),
                               status=AppraisalStatus.IN_PROGRESS,
                               final_value=4500.00)
        # XXX: TODO: crazy work-around; see AppraisalResourceTest wrt. uri x 2
        #appr.uri

        to_update = dict(status=AppraisalStatus.DRAFT_SENT)

        tc = self._tclient(emp.user.username)
        res = tc.patch(appr.uri, json.dumps(to_update),
                       content_type='application/json')

        self.assertEqual(res.status_code, Status.ACCEPTED)
        self.assertEqual(appr.__class__.objects.get(pk=1).status,
                         AppraisalStatus.DRAFT_SENT)
