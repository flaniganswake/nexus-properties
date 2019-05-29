import logging
from datetime import date

from .test import NexusTestCase


log = logging.getLogger('nexus')


class AbstractBaseAppraisalTest(NexusTestCase):
    # NOTE: Tested via the ScheduledAppraisal concrete class

    # quarter_due property

    def test_quarter_due(self):
        self._property(id=1, name='Somewhere')
        self._engagement(id=1, property_id=1)
        self._engagement_property(id=1, engagement_id=1, property_id=1)
        appr = self._appraisal(id=1, engagement_property_id=1,
                               due_date=date(2015, 2, 22))
        self.assertEqual(appr.quarter_due, 1)
        appr.due_date = date(2015, 5, 1)
        self.assertEqual(appr.quarter_due, 2)
        appr.due_date = date(2015, 9, 1)
        self.assertEqual(appr.quarter_due, 3)
        appr.due_date = date(2015, 12, 1)
        self.assertEqual(appr.quarter_due, 4)


class ScheduledAppraisalTest(NexusTestCase):

    # schedule property

    def test_schedule(self):
        self._client(id=1, name='Chester Beastington')
        self._property(id=1, name='Squalid Hole', client_id=1)
        self._engagement(id=12345, property_id=1, client_id=1)
        due = date(2016, 1, 23)
        self._engagement_property(id=1, engagement_id=12345, property_id=1,
                                  index=242)
        sched = self._appraisal_occurrence_schedule(engagement_property_id=1,
                                                    initial_fee=24.0,
                                                    update_fee=44.0,
                                                    occurrence_type='ANNUALLY',
                                                    years=3,
                                                    initial_due_date=due)
        appr = self._scheduled_appraisal(id=1, engagement_property_id=1,
                                         due_date=date(2015, 1, 1))
        self.assertEqual(appr.schedule, sched)

    # job_number property

    def test_job_number_w_annually(self):
        self._client(id=1, name='Chester Beastington')
        self._property(id=1, name='Squalid Hole', client_id=1)
        self._engagement(id=12345, property_id=1, client_id=1)
        self._engagement_property(id=1, engagement_id=12345, property_id=1,
                                  index=242)
        self._appraisal_occurrence_schedule(engagement_property_id=1,
                                            initial_fee=24.0,
                                            update_fee=44.0,
                                            occurrence_type='ANNUALLY',
                                            years=3,
                                            initial_due_date=date(2016, 1, 23))
        appr = self._scheduled_appraisal(id=1, engagement_property_id=1,
                                         due_date=date(2015, 1, 1))
        # TODO: figure out what the last bit is for the annually version
        self.assertEqual(appr.job_number, '15-12345-242-A')

    def test_job_number_w_quarterly(self):
        self._client(id=1, name='Chester Beastington')
        self._property(id=1, name='Pit', client_id=1)
        self._engagement(id=8, property_id=1, client_id=1)
        self._engagement_property(id=1, engagement_id=8, property_id=1,
                                  index=24)
        self._appraisal_occurrence_schedule(engagement_property_id=1,
                                            initial_fee=24.0, update_fee=44.0,
                                            quarterly_fee=6.0, years=4,
                                            occurrence_type='QUARTERLY',
                                            initial_due_date=date(2016, 1, 23))
        appr = self._scheduled_appraisal(id=1, engagement_property_id=1,
                                         due_date=date(2016, 5, 13))
        self.assertEqual(appr.job_number, '16-00008-024-Q2')

    def test_job_number_w_semiannually(self):
        self._client(id=1, name='Chester Beastington')
        self._property(id=1, name='Dank Cellar', client_id=1)
        self._engagement(id=88, property_id=1, client_id=1)
        self._engagement_property(id=1, engagement_id=88, property_id=1,
                                  index=3)
        self._appraisal_occurrence_schedule(engagement_property_id=1,
                                            initial_fee=24.0,
                                            update_fee=44.0, quarterly_fee=6.0,
                                            occurrence_type='SEMIANNUALLY',
                                            years=12,
                                            initial_due_date=date(2016, 1, 23))
        appr = self._scheduled_appraisal(id=1, engagement_property_id=1,
                                         due_date=date(2017, 11, 13))
        self.assertEqual(appr.job_number, '17-00088-003-Q4')

    # to_be_activated classmethod

    # TODO: Use mock to set explicit NX_ACTIVATE_APPRAISAL_WINDOW value.
    #       Right now this test will fail if there is a substantial change
    #       from the default set 5 weeks.

    def _sched_appr_and_related(self, pk, due_date):
        self._engagement(id=pk, property_id=1, client_id=1)
        self._engagement_property(id=pk, engagement_id=pk, property_id=1,
                                  index=1)
        self._appraisal_occurrence_schedule(engagement_property_id=pk,
                                            initial_fee=24.0,
                                            update_fee=44.0, quarterly_fee=6.0,
                                            occurrence_type='SEMIANNUALLY',
                                            years=2, initial_due_date=due_date)
        return self._scheduled_appraisal(id=pk, engagement_property_id=pk,
                                         due_date=due_date, fee='1.00')

    def test_to_be_activated_w_future_and_past_excluded_w_from_date(self):
        self._client(id=1, name='Chester Beastington')
        self._property(id=1, name='Dank Cellar', client_id=1)

        self._sched_appr_and_related(1, date(2012, 1, 2))
        sappr1 = self._sched_appr_and_related(2, date(2012, 1, 15))
        sappr2 = self._sched_appr_and_related(3, date(2012, 2, 26))
        self._sched_appr_and_related(4, date(2012, 11, 22))

        from nexus.models import ScheduledAppraisal
        from_dt = date(2012, 1, 15)
        self.assertItemsEqual(ScheduledAppraisal.to_be_activated(from_dt),
                              [sappr1, sappr2])

    def test_to_be_activated_w_in_next_qtr_but_within_window(self):
        self._client(id=1, name='Chester Beastington')
        self._property(id=1, name='Dank Cellar', client_id=1)
        sappr = self._sched_appr_and_related(1, date(2012, 4, 22))

        from nexus.models import ScheduledAppraisal
        from_dt = date(2012, 3, 25)
        self.assertItemsEqual(ScheduledAppraisal.to_be_activated(from_dt),
                              [sappr])

    def test_to_be_activated_w_past_window_but_in_this_qtr(self):
        self._client(id=1, name='Chester Beastington')
        self._property(id=1, name='Dank Cellar', client_id=1)
        sappr = self._sched_appr_and_related(1, date(2012, 3, 27))

        from nexus.models import ScheduledAppraisal
        from_dt = date(2012, 1, 1)
        self.assertItemsEqual(ScheduledAppraisal.to_be_activated(from_dt),
                              [sappr])

    def test_to_be_activated_wo_any_w_default_from_date(self):
        from nexus.models import ScheduledAppraisal
        self.assertEqual(ScheduledAppraisal.to_be_activated().count(), 0)

    # to_active_appraisal

    def test_to_active_appraisal(self):
        from nexus.models import Role, Title
        self._client(id=1, name='Chester Beastington')
        self._property(id=1, name='Dank Cellar', client_id=1)
        self._engagement(id=1, property_id=1, client_id=1)
        self._engagement_property(id=1, engagement_id=1, property_id=1,
                                  index=3)
        due = date(2016, 1, 23)
        self._appraisal_occurrence_schedule(engagement_property_id=1,
                                            initial_fee=24.0,
                                            update_fee=44.0, quarterly_fee=6.0,
                                            occurrence_type='SEMIANNUALLY',
                                            years=2, initial_due_date=due)
        sched_appr = self._scheduled_appraisal(id=1, engagement_property_id=1,
                                               due_date=due, fee='88.01')
        self._office(id=1, name='Mariner')
        self._employee(id=1, title=Title.DIRECTOR, is_inspector=True,
                       is_reviewer=True, is_procuring_agent=True, office_id=1)
        self._employee(id=2, title=Title.DIRECTOR, is_inspector=True,
                       is_reviewer=True, is_procuring_agent=True, office_id=1)
        self._contact(id=1, last_name='Halifax', employee_id=1)
        self._contact(id=2, last_name='Froedrick', employee_id=2)
        self._scheduled_assignment(engagement_property_id=1,
                                   employee_id=1, role=Role.APPRAISER,
                                   fee=42.88)
        self._scheduled_assignment(engagement_property_id=1,
                                   employee_id=2, role=Role.SIGNER,
                                   fee=13.01)

        appr = sched_appr.to_active_appraisal()

        from nexus.models import Appraisal
        self.assertIsInstance(appr, Appraisal)
        self.assertEqual([appr.due_date, appr.engagement_property_id,
                         str(appr.fee)],
                         [sched_appr.due_date, 1, '88.01'])
        # ensure active assignments were created too
        assns = [(a.employee_id, a.role, str(a.fee))
                 for a in appr.assignments.all()]
        expected = [(1, Role.APPRAISER, '42.88'), (2, Role.SIGNER, '13.01')]
        self.assertItemsEqual(assns, expected)


class AppraisalTest(NexusTestCase):

    # related appraisals

    def test_related_appraisals_excludes_same_engagement(self):
        self._client(id=1, name='The Bourgeoisie')
        self._property(id=1, name='Bacon Manor', client_id=1)
        self._address(id=1, address1='a1', city='city1', state='VT',
                      zipcode='12345', property_id=1)
        self._property(id=2, name='Bacon Castle', client_id=1)
        self._address(id=2, address1='a1', city='city1', state='VT',
                      zipcode='12345', property_id=2)
        self._engagement(id=1, property_id=1, client_id=1)
        self._engagement(id=2, property_id=2, client_id=1)

        due = date(2016, 1, 22)
        self._engagement_property(id=1, engagement_id=1, property_id=1)
        self._engagement_property(id=2, engagement_id=1, property_id=2)
        self._engagement_property(id=3, engagement_id=2, property_id=2)

        a1 = self._appraisal(id=1, engagement_property_id=1,
                             job_number='test1', due_date=due)
        self._appraisal(id=2, engagement_property_id=1,
                        job_number='test2', due_date=due)
        a2 = self._appraisal(id=3, engagement_property_id=2,
                             job_number='test3', due_date=due)
        self.assertItemsEqual(a1.related_appraisals(), [a2])

    def test_related_appraisals_excludes_diff_property_type(self):
        self._client(id=1, name='The Bourgeoisie')

        self._property(id=1, name='land plot', client_id=1,
                       property_type='Land')
        self._address(id=1, address1='a1', city='city1', state='VT',
                      zipcode='12345', property_id=1)

        self._property(id=2, name='a store', client_id=1,
                       property_type='Retail')
        self._address(id=2, address1='a1', city='city1', state='VT',
                      zipcode='12345', property_id=2)

        self._property(id=3, name='other land plot', client_id=1,
                       property_type='Land')
        self._address(id=3, address1='a1', city='city1', state='VT',
                      zipcode='12345', property_id=3)

        self._engagement(id=1, property_id=1, client_id=1)
        self._engagement(id=2, property_id=2, client_id=1)
        self._engagement(id=3, property_id=3, client_id=1)

        self._engagement_property(id=1, engagement_id=1, property_id=1)
        self._engagement_property(id=2, engagement_id=2, property_id=2)
        self._engagement_property(id=3, engagement_id=3, property_id=3)

        due = date(2016, 1, 22)

        a1 = self._appraisal(id=1, engagement_property_id=1,
                             job_number='test1', due_date=due)
        self._appraisal(id=2, engagement_property_id=2, job_number='test2',
                        due_date=due)
        a2 = self._appraisal(id=3, engagement_property_id=3,
                             job_number='test3', due_date=due)

        self.assertItemsEqual(a1.related_appraisals(), [a2])

    def test_related_appraisals_matched_by_zipcodes(self):
        self._client(id=1, name='The Bourgeoisie')

        self._property(id=1, name='land plot', client_id=1,
                       property_type='Land')
        self._address(id=1, address1='a1', city='city1', state='VT',
                      zipcode='12345', property_id=1)
        self._address(id=20, address1='a1', city='city1', state='VT',
                      zipcode='54321', property_id=1)

        self._property(id=2, name='empty lot', client_id=1,
                       property_type='Land')
        self._address(id=2, address1='a1', city='city1', state='VT',
                      zipcode='54321', property_id=2)

        self._property(id=3, name='empty lot', client_id=1,
                       property_type='Land')
        self._address(id=3, address1='a1', city='city1', state='VT',
                      zipcode='777777', property_id=3)
        self._address(id=30, address1='a1', city='city1', state='VT',
                      zipcode='12345', property_id=3)

        self._engagement(id=1, property_id=1, client_id=1)
        self._engagement(id=2, property_id=2, client_id=1)
        self._engagement(id=3, property_id=3, client_id=1)

        self._engagement_property(id=1, engagement_id=1, property_id=1)
        self._engagement_property(id=2, engagement_id=2, property_id=2)
        self._engagement_property(id=3, engagement_id=3, property_id=3)

        due = date(2016, 1, 22)
        a1 = self._appraisal(id=1, engagement_property_id=1,
                             job_number='test1', due_date=due)
        a2 = self._appraisal(id=2, engagement_property_id=2,
                             job_number='test2', due_date=due)
        a3 = self._appraisal(id=3, engagement_property_id=3,
                             job_number='test3', due_date=due)

        self.assertItemsEqual(a1.related_appraisals(), [a2, a3])
        self.assertItemsEqual(a2.related_appraisals(), [a1])
        self.assertItemsEqual(a3.related_appraisals(), [a1])

    # assignments related

    def test_assignments_grouped(self):
        from nexus.models import Role, Title
        self._client(id=1, name='The Man')
        self._property(id=1, name="The Man's Property")
        self._engagement(id=1, property_id=1, client_id=1)
        self._office(id=1, name='Voyager')
        self._employee(id=1, title=Title.DIRECTOR, is_inspector=True,
                       is_reviewer=True, is_procuring_agent=True, office_id=1)
        self._employee(id=2, title=Title.DIRECTOR, is_inspector=True,
                       is_reviewer=True, is_procuring_agent=True, office_id=1)
        self._contact(id=1, last_name='Halifax', employee_id=1)
        self._contact(id=2, last_name='Froedrick', employee_id=2)
        due = date(2016, 1, 2)
        self._engagement_property(id=1, engagement_id=1, property_id=1)
        appraisal = self._appraisal(id=1, engagement_property_id=1,
                                    job_number='test1', due_date=due, fee=1.0)
        self._appraisal(id=2, engagement_property_id=1,
                        job_number='test2', due_date=due, fee=1.0)
        a1 = self._assignment(id=1, role=Role.INSPECTOR, fee=42.02,
                              employee_id=1, appraisal_id=1)
        a2 = self._assignment(id=2, role=Role.REVIEWER, employee_id=1,
                              appraisal_id=1)
        a3 = self._assignment(id=3, role=Role.REVIEWER, employee_id=2,
                              appraisal_id=1)
        a4 = self._assignment(id=4, role=Role.SIGNER, employee_id=1,
                              appraisal_id=1)
        a5 = self._assignment(id=5, role=Role.APPRAISER, fee=1.00,
                              employee_id=1, appraisal_id=1)
        # for a different appraisal
        self._assignment(id=6, role=Role.APPRAISER, fee=1.00,
                         employee_id=2, appraisal_id=2)
        a7 = self._assignment(id=7, role=Role.PROCURER, fee=42.02,
                              employee_id=1, appraisal_id=1)

        got = appraisal.assignments_grouped()
        self.assertItemsEqual(got[Role.INSPECTOR], [a1])
        self.assertItemsEqual(got[Role.REVIEWER], [a2, a3])
        self.assertItemsEqual(got[Role.SIGNER], [a4])
        self.assertItemsEqual(got[Role.APPRAISER], [a5])
        self.assertItemsEqual(got[Role.PROCURER], [a7])

    def test_assignments_by_role(self):
        from nexus.models import Role, Title
        self._client(id=1, name='The Man')
        self._property(id=1, name='High Castle', client_id=1)
        self._engagement(id=1, property_id=1, client_id=1)
        self._engagement_property(id=1, engagement_id=1, property_id=1)
        self._office(id=1, name='Mariner')
        self._employee(id=1, title=Title.DIRECTOR, is_inspector=True,
                       is_reviewer=True, is_procuring_agent=True, office_id=1)
        self._employee(id=2, title=Title.DIRECTOR, is_inspector=True,
                       is_reviewer=True, is_procuring_agent=True, office_id=1)
        self._contact(id=1, last_name='Halifax', employee_id=1)
        self._contact(id=2, last_name='Froedrick', employee_id=2)

        due = date(2016, 1, 2)
        appraisal = self._appraisal(id=1, engagement_property_id=1,
                                    job_number='test1', due_date=due, fee=1.0)
        self._appraisal(id=2, engagement_property_id=1, due_date=due,
                        job_number='test2', fee=1.0)
        self._assignment(id=2, role=Role.REVIEWER, employee_id=1,
                         appraisal_id=1)
        self._assignment(id=3, role=Role.REVIEWER, employee_id=2,
                         appraisal_id=1)
        self._assignment(id=5, role=Role.APPRAISER, fee=1.00, employee_id=1,
                         appraisal_id=1)
        self._assignment(id=6, role=Role.APPRAISER, fee=1.00, employee_id=2,
                         appraisal_id=2)

        assignments = appraisal.assignments_by_role(Role.APPRAISER)
        self.assertEqual(len(assignments), 1)
        self.assertEqual(assignments[0].id, 5)
        assignments = appraisal.assignments_by_role(Role.REVIEWER)
        self.assertEqual(len(assignments), 2)
        self.assertItemsEqual([a.id for a in assignments], [2, 3])

    # lead_appraiser

    def test_lead_appraiser_wo_one(self):
        due = date(2016, 1, 2)
        self._client(id=1, name='The Man')
        self._property(id=1, name='High Castle', client_id=1)
        self._engagement(id=1, property_id=1, client_id=1)
        self._engagement_property(id=1, engagement_id=1, property_id=1)
        appr = self._appraisal(id=1, engagement_property_id=1,
                               due_date=due)
        self.assertIsNone(appr.lead_appraiser)

    def test_lead_appraiser_w_one(self):
        from nexus.models import Role, Title
        due = date(2016, 1, 2)
        self._client(id=1, name='The Man')
        self._property(id=1, name='High Castle', client_id=1)
        self._office(id=1, name='Hubble')
        self._engagement(id=1, property_id=1, client_id=1)
        self._engagement_property(id=1, engagement_id=1, property_id=1)
        self._employee(id=1, title=Title.DIRECTOR, is_inspector=True,
                       is_reviewer=True, is_procuring_agent=True, office_id=1)
        self._employee(id=2, title=Title.DIRECTOR, is_inspector=True,
                       is_reviewer=True, is_procuring_agent=True, office_id=1)
        self._contact(id=1, last_name='Halifax', employee_id=1)
        self._contact(id=2, last_name='Froedrick', employee_id=2)
        appr = self._appraisal(id=1, engagement_property_id=1,
                               due_date=due)
        # NOTE: The 2nd assignment has the higher fee to ensure the lead
        #       appraiser assignment returned is the one with the highest fee
        #       not just the first one found. Appraisal.assignments_by_role()
        #       returns a list sorted by fee in descending order
        self._assignment(id=1, role=Role.APPRAISER, fee=1.00, employee_id=1,
                         appraisal_id=1)
        assn = self._assignment(id=2, role=Role.APPRAISER, fee=88.42,
                                employee_id=2, appraisal_id=1)
        self.assertEqual(appr.lead_appraiser, assn)

    # TODO: validation: DRAFT_SENT and final_value


class AppraisalOccurrenceScheduleTest(NexusTestCase):

    def test_scheduled_assignments_grouped_w_portfolio(self):
        from nexus.models import Role, Title
        self._client(id=1, name='The Man')
        self._portfolio(id=1, name='Everything', client_id=1)
        self._property(id=1, name='High Castle', client_id=1, portfolio_id=1)
        self._property(id=2, name='Spire', client_id=1, portfolio_id=1)
        self._engagement(id=1, portfolio_id=1, client_id=1)
        self._office(id=1, name='Salyut')
        self._employee(id=1, title=Title.DIRECTOR, is_inspector=True,
                       is_reviewer=True, is_procuring_agent=True, office_id=1)
        self._employee(id=2, title=Title.DIRECTOR, is_inspector=True,
                       is_reviewer=True, is_procuring_agent=True, office_id=1)
        self._contact(id=1, last_name='Halifax', employee_id=1)
        self._contact(id=2, last_name='Froedrick', employee_id=2)
        due = date(2016, 1, 2)
        self._engagement_property(id=1, engagement_id=1, property_id=1,
                                  index=1)
        self._engagement_property(id=2, engagement_id=1, property_id=2,
                                  index=2)
        aos = self._appraisal_occurrence_schedule(engagement_property_id=1,
                                                  initial_due_date=due,
                                                  initial_fee=1.0)
        self._appraisal_occurrence_schedule(engagement_property_id=2,
                                            initial_due_date=due,
                                            initial_fee=1.0)
        a1 = self._scheduled_assignment(id=1, role=Role.REVIEWER,
                                        employee_id=1,
                                        engagement_property_id=1)
        a2 = self._scheduled_assignment(id=2, role=Role.REVIEWER,
                                        employee_id=2,
                                        engagement_property_id=1)
        # for a different property in the engagement
        self._scheduled_assignment(id=3, role=Role.APPRAISER,
                                   employee_id=2, fee=1.00,
                                   engagement_property_id=2)
        a4 = self._scheduled_assignment(id=4, role=Role.APPRAISER,
                                        employee_id=1,  fee=1.00,
                                        engagement_property_id=1)

        got = aos.scheduled_assignments_grouped()
        self.assertItemsEqual(got[Role.REVIEWER], [a1, a2])
        self.assertItemsEqual(got[Role.APPRAISER], [a4])

    def test_scheduled_assignments_grouped(self):
        from nexus.models import Role, Title
        self._client(id=1, name='The Man')
        self._property(id=1, name='High Castle', client_id=1)
        # self._property(id=2, name='Spire', client_id=1)
        self._office(id=1, name='Luna')
        self._engagement(id=1, property_id=1, client_id=1)
        self._engagement(id=2, property_id=1, client_id=1)
        self._engagement_property(id=1, engagement_id=1, property_id=1,
                                  index=1)
        self._engagement_property(id=2, engagement_id=2, property_id=1,
                                  index=1)
        self._employee(id=1, title=Title.DIRECTOR, is_inspector=True,
                       is_reviewer=True, is_procuring_agent=True, office_id=1)
        self._employee(id=2, title=Title.DIRECTOR, is_inspector=True,
                       is_reviewer=True, is_procuring_agent=True, office_id=1)
        self._contact(id=1, last_name='Halifax', employee_id=1)
        self._contact(id=2, last_name='Froedrick', employee_id=2)
        due = date(2016, 1, 2)
        self._appraisal_occurrence_schedule(engagement_property_id=2,
                                            initial_due_date=due,
                                            initial_fee=1.0)
        aos = self._appraisal_occurrence_schedule(engagement_property_id=1,
                                                  initial_due_date=due,
                                                  initial_fee=1.0)
        a1 = self._scheduled_assignment(id=1, role=Role.INSPECTOR,
                                        employee_id=1, fee=42.02,
                                        engagement_property_id=1)
        a2 = self._scheduled_assignment(id=2, role=Role.REVIEWER,
                                        employee_id=1,
                                        engagement_property_id=1)
        a3 = self._scheduled_assignment(id=3, role=Role.REVIEWER,
                                        employee_id=2,
                                        engagement_property_id=1)
        a4 = self._scheduled_assignment(id=4, role=Role.SIGNER,
                                        employee_id=1,
                                        engagement_property_id=1)
        a5 = self._scheduled_assignment(id=5, role=Role.APPRAISER,
                                        employee_id=1,  fee=1.00,
                                        engagement_property_id=1)
        # for a different engagement
        self._scheduled_assignment(id=6, role=Role.APPRAISER,
                                   employee_id=2, fee=1.00,
                                   engagement_property_id=2)
        a7 = self._scheduled_assignment(id=7, role=Role.PROCURER, fee=42.02,
                                        employee_id=1,
                                        engagement_property_id=1)

        got = aos.scheduled_assignments_grouped()
        self.assertItemsEqual(got[Role.INSPECTOR], [a1])
        self.assertItemsEqual(got[Role.REVIEWER], [a2, a3])
        self.assertItemsEqual(got[Role.SIGNER], [a4])
        self.assertItemsEqual(got[Role.APPRAISER], [a5])
        self.assertItemsEqual(got[Role.PROCURER], [a7])


# TODO: disabled tests as fee validation is more complex,
#       see: AbstractAssignment.clean() for details.
# class AssignmentTest(NexusTestCase):

#     # validation

#     # fee validation

#     def _validation_setup(self):
#         self._office(id=1, name='Sputnik')
#         self._employee(id=1, office_id=1)
#         self._client(id=1, name='Scrooge McDuck')
#         self._property(id=2, name='Coin Pool Complex', client_id=1)
#         self._engagement(id=3, client_id=1, property_id=2)
#         self._appraisal(id=4, engagement_id=3, property_id=2,
#                         due_date=date(2014, 1, 22))

#     def test_clean_w_optional_fee_w_fee(self):
#         self._validation_setup()

#         from nexus.models import Assignment, Role
#         Assignment.objects.create(role=Role.PROCURER, employee_id=1,
#                                   fee=104.12, appraisal_id=4)

#     def test_clean_w_optional_fee_wo_fee(self):
#         self._validation_setup()

#         from nexus.models import Assignment, Role
#         Assignment.objects.create(role=Role.PROCURER, employee_id=1,
#                                   appraisal_id=4)

#     def test_clean_w_never_fee_wo_fee(self):
#         self._validation_setup()

#         from nexus.models import Assignment, Role
#         Assignment.objects.create(role=Role.SIGNER, employee_id=1,
#                                   appraisal_id=4)

#     def test_clean_w_never_fee_w_fee(self):
#         self._validation_setup()

#         from nexus.models import Assignment, Role
#         from django.core.exceptions import ValidationError
#         self.assertRaises(ValidationError, Assignment.objects.create,
#                           role=Role.SIGNER, employee_id=1, fee=142.01,
#                           appraisal_id=4)

#     def test_clean_w_always_fee_wo_fee(self):
#         self._validation_setup()

#         from nexus.models import Assignment, Role
#         from django.core.exceptions import ValidationError
#         self.assertRaises(ValidationError, Assignment.objects.create,
#                           role=Role.APPRAISER, employee_id=1,
#                           appraisal_id=4)

#     def test_clean_w_always_fee_w_fee(self):
#         self._validation_setup()

#         from nexus.models import Assignment, Role
#         from django.core.exceptions import ValidationError
#         try:
#             Assignment.objects.create(role=Role.APPRAISER, employee_id=1,
#                                       fee=55.10, appraisal_id=4)
#         except ValidationError as e:
#             self.fail(e)


class EmployeeTest(NexusTestCase):

    def _employee(self, **kwargs):
        kwargs['office_id'] = 1
        return super(EmployeeTest, self)._employee(**kwargs)

    def test_name(self):
        self._office(id=1, name='Mir')
        self._employee(id=1)
        self._contact(id=1, first_name='Moe', last_name='Szyslak',
                      employee_id=1)
        from nexus.models import Employee
        self.assertEqual(Employee.objects.get(pk=1).name, 'Moe Szyslak')

    # by_assignment_role

    def test_by_assignment_role_procurer(self):
        from nexus.models import Role, Title, Employee
        self._office(id=1, name='Mir')
        self._employee(id=1, is_procuring_agent=True)
        self._employee(id=2, is_procuring_agent=False)
        self._employee(id=3, is_procuring_agent=True)
        self._employee(id=4, is_procuring_agent=True, title=Title.PRINCIPAL)
        self._employee(id=5, is_procuring_agent=True)

        qs = Employee.by_assignment_role(Role.PROCURER)
        self.assertItemsEqual([e.id for e in qs], [1, 3, 5])

    def test_by_assignment_role_manager(self):
        self._office(id=1, name='Mir')
        self._employee(id=1, is_engagement_manager=False)
        self._employee(id=2, is_engagement_manager=True)
        self._employee(id=3, is_engagement_manager=True)
        self._employee(id=4, is_engagement_manager=True)

        from nexus.models import Role, Employee
        qs = Employee.by_assignment_role(Role.MANAGER)
        self.assertItemsEqual([e.id for e in qs], [2, 3, 4])

    def test_by_assignment_role_inspector(self):
        self._office(id=1, name='Mir')
        self._employee(id=1, is_inspector=False)
        self._employee(id=2, is_inspector=True)
        self._employee(id=3, is_inspector=True)
        self._employee(id=4, is_inspector=False)

        from nexus.models import Role, Employee
        qs = Employee.by_assignment_role(Role.INSPECTOR)
        self.assertItemsEqual([e.id for e in qs], [2, 3])

    def test_by_assignment_role_appraiser(self):
        from nexus.models import Title, Role, Employee
        self._office(id=1, name='Mir')
        self._employee(id=1, title=Title.SENIOR_ASSOCIATE)
        self._employee(id=2, title=Title.INTERN)
        self._employee(id=3, title=Title.DIRECTOR_RESEARCH)
        self._employee(id=4, title=Title.DIRECTOR)

        qs = Employee.by_assignment_role(Role.APPRAISER)
        self.assertItemsEqual([e.id for e in qs], [1, 4])

    def test_by_assignment_role_reviewer(self):
        self._office(id=1, name='Mir')
        self._employee(id=1, is_reviewer=False)
        self._employee(id=2, is_reviewer=True)
        self._employee(id=3, is_reviewer=False)
        self._employee(id=4, is_reviewer=True)

        from nexus.models import Role, Employee
        qs = Employee.by_assignment_role(Role.REVIEWER)
        self.assertItemsEqual([e.id for e in qs], [2, 4])

    def test_by_assignment_role_signer(self):
        self._office(id=1, name='Mir')
        self._employee(id=1, is_certified_general=True)
        self._employee(id=2, is_certified_general=True)
        self._employee(id=3, is_certified_general=False)
        self._employee(id=4, is_certified_general=True)

        from nexus.models import Role, Employee
        qs = Employee.by_assignment_role(Role.SIGNER)
        self.assertItemsEqual([e.id for e in qs], [1, 2, 4])

    def test_by_assignment_role_principal_signer(self):
        from nexus.models import Title, Role, Employee
        self._office(id=1, name='Mir')
        self._employee(id=1, title=Title.SENIOR_ASSOCIATE)
        self._employee(id=2, title=Title.PRINCIPAL)
        self._employee(id=3, title=Title.DIRECTOR_RESEARCH)
        self._employee(id=4, title=Title.PRINCIPAL)

        qs = Employee.by_assignment_role(Role.PRINCIPAL_SIGNER)
        self.assertItemsEqual([e.id for e in qs], [2, 4])

    def test_by_assignment_role_associate(self):
        from nexus.models import Title, Role, Employee
        self._office(id=1, name='Mir')
        self._employee(id=1, title=Title.SENIOR_ASSOCIATE)
        self._employee(id=2, title=Title.PRINCIPAL)
        self._employee(id=3, title=Title.ASSOCIATE)
        self._employee(id=4, title=Title.DIRECTOR_RESEARCH)
        self._employee(id=5, title=Title.INTERN_RESEARCH)
        self._employee(id=6, title=Title.INTERN)

        qs = Employee.by_assignment_role(Role.ASSOCIATE)
        self.assertItemsEqual([e.id for e in qs], [1, 2, 3, 6])

    def test_by_assignment_role_researcher(self):
        from nexus.models import Title, Role, Employee
        self._office(id=1, name='Mir')
        self._employee(id=1, title=Title.SENIOR_ASSOCIATE)
        self._employee(id=2, title=Title.PRINCIPAL)
        self._employee(id=3, title=Title.DIRECTOR_RESEARCH)
        self._employee(id=4, title=Title.INTERN_RESEARCH)
        self._employee(id=5, title=Title.INTERN)

        qs = Employee.by_assignment_role(Role.RESEARCHER)
        self.assertItemsEqual([e.id for e in qs], [3, 4])

    def test_by_assignment_role_w_unknown_role(self):
        from nexus.models import Employee
        self.assertRaises(Exception, Employee.by_assignment_role,
                          'Wild and Crazy Guy')


class EngagementTest(NexusTestCase):

    # TODO: json

    # related_engagements

    def test_related_engagements(self):
        self._client(id=1, name='The Bourgeoisie')
        self._client(id=3, name='Mr. Mister')
        self._property(id=1, name='Bacon Manor', client_id=1)
        self._property(id=2, name='Bacon Castle', client_id=1)
        eng = self._engagement(id=1, property_id=1, client_id=1)
        self._engagement(id=2, property_id=1, client_id=1)
        self._engagement(id=3, property_id=2, client_id=1)
        self._engagement(id=4, property_id=1, client_id=3)

        self.assertItemsEqual([e.id for e in eng.related_engagements()],
                              [2, 4])

    # validation

    def test_clean_w_property_wo_portfolio(self):
        self._client(id=1, name='Da Client')
        self._property(id=23, name='Da Spot')

        from nexus.models import Engagement
        from django.core.exceptions import ValidationError
        try:
            Engagement.objects.create(client_id=1, property_id=23)
        except ValidationError as e:
            self.fail(e)

    def test_clean_wo_property_w_portfolio(self):
        self._client(id=1, name='The Combine')
        self._portfolio(id=42, name='City 17')

        from nexus.models import Engagement
        from django.core.exceptions import ValidationError
        try:
            Engagement.objects.create(client_id=1, portfolio_id=42)
        except ValidationError as e:
            self.fail(e)

    def test_clean_wo_property_or_portfolio(self):
        self._client(id=1, name='Da Client')

        from nexus.models import Engagement
        from django.core.exceptions import ValidationError
        self.assertRaises(ValidationError, Engagement.objects.create,
                          client_id=1)

    def test_clean_w_property_and_portfolio(self):
        self._client(id=1, name='The Combine')
        self._portfolio(id=42, name='City 17')
        self._property(id=88, name='Citadel', portfolio_id=42)

        from nexus.models import Engagement
        from django.core.exceptions import ValidationError
        self.assertRaises(ValidationError, Engagement.objects.create,
                          client_id=1, property_id=88, portfolio_id=42)


class PropertyTest(NexusTestCase):

    def test_json(self):
        prop = self._property(id=1, name='Somewhere Super Great')
        self.assertIsInstance(prop.json(), basestring)
        self.assertIn('resource_uri', prop.json())


class PortfolioTest(NexusTestCase):

    def test_get_appraisals(self):
        """retrieve array of appraisals for a portfolio"""
        port = self._portfolio(id=1, name='Baconfolio')
        self._portfolio(id=2, name='Portbacon')
        self._property(id=1, portfolio_id=1, name='THE CASTLE OF BACON',
                       property_type='Retail')
        self._property(id=2, portfolio_id=2, name='THE MANOR OF BACON',
                       property_type='Retail')
        self._engagement(id=1, portfolio_id=1)
        self._engagement(id=7, portfolio_id=2)
        self._engagement_property(id=1, engagement_id=1, property_id=1)
        self._engagement_property(id=2, engagement_id=7, property_id=2)
        self._engagement_property(id=3, engagement_id=7, property_id=1)
        a1 = self._appraisal(id=1, status='IN_PROGRESS',
                             engagement_property_id=1,
                             job_number='test1', fee=8000.00,
                             due_date=date(2014, 1, 22))
        self._appraisal(id=2, status='COMPLETED',
                        engagement_property_id=2,
                        job_number='test2', fee=9000.00,
                        due_date=date(2014, 2, 22))
        a3 = self._appraisal(id=3, status='IN_PROGRESS',
                             engagement_property_id=3,
                             job_number='test3', fee=5000.00,
                             due_date=date(2014, 3, 22))
        self.assertItemsEqual(port.get_appraisals(), [a1, a3])

    def test_get_historical_appraisals(self):
        """retrieve array of historic appraisals for a portfolio"""
        port = self._portfolio(id=1, name='Baconfolio')
        self._portfolio(id=2, name='Portbacon')
        self._property(id=1, portfolio_id=1, name='THE CASTLE OF BACON',
                       property_type='Retail')
        self._property(id=2, portfolio_id=2, name='THE MANOR OF BACON',
                       property_type='Retail')
        self._engagement(id=1, portfolio_id=1)
        self._engagement(id=7, portfolio_id=2)
        self._engagement_property(id=1, engagement_id=1, property_id=1)
        self._engagement_property(id=2, engagement_id=7, property_id=2)

        a1 = self._appraisal(id=1, status='COMPLETED',
                             engagement_property_id=1,
                             job_number='test1', fee=8000.00,
                             due_date=date(2014, 1, 22))
        self._appraisal(id=2, status='IN_PROGRESS', engagement_property_id=2,
                        job_number='test2', fee=9000.00,
                        due_date=date(2014, 2, 22))
        a3 = self._appraisal(id=3, status='COMPLETED',
                             engagement_property_id=1, fee=5000.00,
                             job_number='test3', due_date=date(2014, 1, 22))
        #print str(port.get_historical_appraisals())

        self.assertItemsEqual(port.get_historical_appraisals(), [a1, a3])
