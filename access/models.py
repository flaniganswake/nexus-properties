from __future__ import unicode_literals
from django.db import models

# Important - never change this file - it is a static ORM which accesses the
# legacy Access database DBConverted to a postgres instance named 'access'.
# Also - the app 'access' is not installed to prevent syncing and migrations.


class TblAppraisalFirmContactList(models.Model):
    contact_last_name = models.CharField(max_length=50, db_column='Contact Last Name', blank=True)
    contact_first_name = models.CharField(max_length=50, db_column='Contact First Name', blank=True)
    title = models.CharField(max_length=50, db_column='Title', blank=True)
    contact_phone = models.CharField(max_length=10, db_column='Contact Phone', blank=True)
    contact_mobile_phone = models.CharField(max_length=10, db_column='Contact Mobile  Phone', blank=True)
    contact_email_address = models.CharField(max_length=50, db_column='Contact Email Address', blank=True)
    contact_id = models.IntegerField(primary_key=True, db_column='Contact ID')
    firm_id = models.IntegerField(null=True, db_column='Firm ID', blank=True)
    designation = models.CharField(max_length=14, db_column='Designation', blank=True)
    class Meta:
        db_table = 'tbl Appraisal Firm Contact List'


class TblAppraisalMgtFirmMaster(models.Model):
    firm_id = models.IntegerField(primary_key=True, db_column='Firm ID')
    name = models.CharField(max_length=50, db_column='Name', blank=True)
    address_1 = models.CharField(max_length=50, db_column='Address 1', blank=True)
    address_2 = models.CharField(max_length=50, db_column='Address 2', blank=True)
    address_3 = models.CharField(max_length=50, db_column='Address 3', blank=True)
    city = models.CharField(max_length=50, db_column='City', blank=True)
    state = models.CharField(max_length=2, db_column='State', blank=True)
    zip = models.CharField(max_length=10, db_column='Zip', blank=True)
    phone_1 = models.CharField(max_length=12, db_column='Phone 1', blank=True)
    phone_2 = models.CharField(max_length=12, db_column='Phone 2', blank=True)
    email_address = models.CharField(max_length=50, db_column='Email Address', blank=True)
    contact_id = models.IntegerField(null=True, db_column='Contact ID', blank=True)
    class Meta:
        db_table = 'tbl Appraisal Mgt Firm Master'


class TblAppraiserEngagementDetails(models.Model):
    last_name = models.CharField(max_length=50, db_column='Last Name', blank=True)
    first_name = models.CharField(max_length=50, db_column='First Name', blank=True)
    title = models.CharField(max_length=50, db_column='Title', blank=True)
    fee_base = models.TextField(db_column='Fee Base', blank=True)
    standard_fee_split = models.FloatField(null=True, db_column='Standard Fee Split', blank=True)
    subject_to_director_overirde = models.NullBooleanField(null=True, db_column='Subject to Director Overirde', blank=True)
    date_due = models.DateTimeField(null=True, db_column='Date Due', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_detail_id = models.IntegerField(primary_key=True, db_column='Appraiser Detail ID')
    primary = models.NullBooleanField(null=True, db_column='Primary', blank=True)
    class Meta:
        db_table = 'tbl Appraiser Engagement Details'


class TblAppraiserMaster(models.Model):
    last_name = models.CharField(max_length=50, db_column='Last Name', blank=True)
    first_name = models.CharField(max_length=50, db_column='First Name', blank=True)
    title = models.CharField(max_length=50, db_column='Title', blank=True)
    standard_fee_split = models.FloatField(null=True, db_column='Standard Fee Split', blank=True)
    subject_to_director_overirde = models.NullBooleanField(null=True, db_column='Subject to Director Overirde', blank=True)
    overide = models.FloatField(null=True, db_column='Overide', blank=True)
    annual_salary = models.TextField(db_column='Annual Salary', blank=True)
    address_1 = models.CharField(max_length=50, db_column='Address 1', blank=True)
    address_2 = models.CharField(max_length=50, db_column='Address 2', blank=True)
    city = models.CharField(max_length=50, db_column='City', blank=True)
    state = models.CharField(max_length=2, db_column='State', blank=True)
    zip_code = models.CharField(max_length=10, db_column='Zip Code', blank=True)
    phone_1 = models.CharField(max_length=10, db_column='Phone 1', blank=True)
    phone_2 = models.CharField(max_length=10, db_column='Phone 2', blank=True)
    mobile_phone = models.CharField(max_length=10, db_column='Mobile Phone', blank=True)
    email_address = models.CharField(max_length=50, db_column='Email Address', blank=True)
    appraiser_id = models.IntegerField(primary_key=True, db_column='Appraiser ID')
    expense_password = models.CharField(max_length=255, db_column='Expense Password', blank=True)
    class Meta:
        db_table = 'tbl Appraiser Master'


class TblBankWireInfo(models.Model):
    id = models.IntegerField(primary_key=True, db_column='ID')
    bank_name = models.CharField(max_length=255, db_column='Bank Name', blank=True)
    routing_number = models.CharField(max_length=255, db_column='Routing Number', blank=True)
    account_number = models.CharField(max_length=255, db_column='Account Number', blank=True)
    additional_info = models.CharField(max_length=255, db_column='Additional Info', blank=True)
    class Meta:
        db_table = 'tbl Bank Wire Info'


class TblBidRfp(models.Model):
    bid_id = models.IntegerField(primary_key=True, db_column='Bid ID')
    fee = models.TextField(db_column='Fee', blank=True)
    delivery_date = models.DateTimeField(null=True, db_column='Delivery Date', blank=True)
    rfp_contact = models.CharField(max_length=50, db_column='RFP Contact', blank=True)
    rfp_phone = models.CharField(max_length=50, db_column='RFP Phone', blank=True)
    rfp_comments = models.TextField(db_column='RFP Comments', blank=True)
    project_name = models.CharField(max_length=50, db_column='Project Name', blank=True)
    property_description = models.TextField(db_column='Property Description', blank=True)
    property_type = models.IntegerField(null=True, db_column='Property Type', blank=True)
    city = models.CharField(max_length=50, db_column='City', blank=True)
    state = models.CharField(max_length=2, db_column='State', blank=True)
    zip = models.CharField(max_length=10, db_column='Zip', blank=True)
    class Meta:
        db_table = 'tbl Bid RFP'


class TblBidRfpPropertyInfo(models.Model):
    project_number = models.CharField(max_length=50, db_column='Project Number', blank=True)
    fee = models.TextField(db_column='Fee', blank=True)
    delivery_date = models.DateTimeField(null=True, db_column='Delivery Date', blank=True)
    rfp_contact = models.CharField(max_length=50, db_column='RFP Contact', blank=True)
    rfp_phone = models.CharField(max_length=10, db_column='RFP Phone', blank=True)
    rfp_comments = models.TextField(db_column='RFP Comments', blank=True)
    project_name = models.CharField(max_length=50, db_column='Project Name', blank=True)
    street_address_1 = models.CharField(max_length=50, db_column='Street Address 1', blank=True)
    street_address_2 = models.CharField(max_length=50, db_column='Street Address 2', blank=True)
    city = models.CharField(max_length=50, db_column='City', blank=True)
    state = models.CharField(max_length=2, db_column='State', blank=True)
    county = models.CharField(max_length=50, db_column='County', blank=True)
    zip_code = models.CharField(max_length=10, db_column='Zip Code', blank=True)
    land_size = models.CharField(max_length=50, db_column='Land Size', blank=True)
    property_description_construction_type = models.TextField(db_column='Property Description/Construction Type', blank=True)
    property_type = models.IntegerField(null=True, db_column='Property Type', blank=True)
    property_tennancy = models.CharField(max_length=50, db_column='Property Tennancy', blank=True)
    improvement_size_primary = models.CharField(max_length=50, db_column='Improvement Size Primary', blank=True)
    year_built = models.CharField(max_length=4, db_column='Year Built', blank=True)
    ground_lease = models.NullBooleanField(null=True, db_column='Ground Lease', blank=True)
    bid_id = models.IntegerField(primary_key=True, db_column='Bid ID')
    bid_date = models.DateTimeField(null=True, db_column='Bid Date', blank=True)
    office_location_id = models.IntegerField(null=True, db_column='Office Location ID', blank=True)
    class Meta:
        db_table = 'tbl Bid RFP Property Info'


class TblBonusReportDetails(models.Model):
    bonus_report_id = models.IntegerField(primary_key=True, db_column='Bonus Report ID')
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    job_number = models.CharField(max_length=50, db_column='Job Number', blank=True)
    job_name = models.CharField(max_length=255, db_column='Job Name', blank=True)
    gross_fee = models.TextField(db_column='Gross Fee', blank=True)
    expenses = models.TextField(db_column='Expenses', blank=True)
    split = models.FloatField(null=True, db_column='Split', blank=True)
    adjusted_fee = models.TextField(db_column='Adjusted Fee', blank=True)
    share = models.TextField(db_column='Share', blank=True)
    allotted_review_time = models.FloatField(null=True, db_column='Allotted Review Time', blank=True)
    required_review_time = models.FloatField(null=True, db_column='Required Review Time', blank=True)
    written_off_review_time = models.FloatField(null=True, db_column='Written Off Review Time', blank=True)
    time_charged = models.FloatField(null=True, db_column='Time Charged', blank=True)
    review_charge = models.TextField(db_column='Review Charge', blank=True)
    net_share = models.TextField(db_column='Net Share', blank=True)
    year = models.IntegerField(null=True, db_column='Year', blank=True)
    qtr = models.IntegerField(null=True, db_column='Qtr', blank=True)
    misc_amount = models.TextField(db_column='Misc Amount', blank=True)
    misc_desc = models.CharField(max_length=100, db_column='Misc Desc', blank=True)
    calculated_salary = models.TextField(db_column='Calculated Salary', blank=True)
    test_salary = models.TextField(db_column='Test Salary', blank=True)
    misc_adjustment = models.TextField(db_column='Misc Adjustment', blank=True)
    class Meta:
        db_table = 'tbl Bonus Report Details'


class TblClientContactList(models.Model):
    contact_last_name = models.CharField(max_length=50, db_column='Contact Last Name', blank=True)
    contact_first_name = models.CharField(max_length=50, db_column='Contact First Name', blank=True)
    title = models.CharField(max_length=50, db_column='Title', blank=True)
    contact_phone = models.CharField(max_length=10, db_column='Contact Phone', blank=True)
    contact_mobile_phone = models.CharField(max_length=10, db_column='Contact Mobile  Phone', blank=True)
    contact_email_address = models.CharField(max_length=50, db_column='Contact Email Address', blank=True)
    contact_id = models.IntegerField(primary_key=True, db_column='Contact ID')
    client_id = models.IntegerField(null=True, db_column='Client ID', blank=True)
    designation = models.CharField(max_length=14, db_column='Designation', blank=True)
    class Meta:
        db_table = 'tbl Client Contact List'


class TblClientMaster(models.Model):
    client_id = models.IntegerField(primary_key=True, db_column='Client ID')
    name = models.CharField(max_length=50, db_column='Name', blank=True)
    address_1 = models.CharField(max_length=50, db_column='Address 1', blank=True)
    address_2 = models.CharField(max_length=50, db_column='Address 2', blank=True)
    address_3 = models.CharField(max_length=50, db_column='Address 3', blank=True)
    city = models.CharField(max_length=50, db_column='City', blank=True)
    state = models.CharField(max_length=2, db_column='State', blank=True)
    zip = models.CharField(max_length=10, db_column='Zip', blank=True)
    phone_1 = models.CharField(max_length=12, db_column='Phone 1', blank=True)
    fax = models.CharField(max_length=12, db_column='Fax', blank=True)
    email_address = models.CharField(max_length=50, db_column='Email Address', blank=True)
    preferred_report_delivery = models.IntegerField(null=True, db_column='Preferred Report Delivery', blank=True)
    number_of_hard_copies = models.IntegerField(null=True, db_column='Number of Hard Copies', blank=True)
    preferred_dcf_software = models.IntegerField(null=True, db_column='Preferred DCF Software', blank=True)
    invoice_delivery_instructions = models.TextField(db_column='Invoice Delivery Instructions', blank=True)
    invoice_contact_name = models.CharField(max_length=50, db_column='Invoice Contact Name', blank=True)
    client_requirements = models.TextField(db_column='Client Requirements', blank=True)
    contact_person_id = models.IntegerField(null=True, db_column='Contact Person ID', blank=True)
    client_type_id = models.IntegerField(null=True, db_column='Client Type ID', blank=True)
    class Meta:
        db_table = 'tbl Client Master'


class TblClientType(models.Model):
    client_type_id = models.IntegerField(primary_key=True, db_column='Client Type ID')
    client_type = models.CharField(max_length=50, db_column='Client Type', blank=True)
    class Meta:
        db_table = 'tbl Client Type'


class TblContractTermsListing(models.Model):
    contract_term = models.CharField(max_length=50, db_column='Contract Term', blank=True)
    contract_term_id = models.IntegerField(primary_key=True, db_column='Contract Term ID')
    class Meta:
        db_table = 'tbl Contract Terms Listing'


class TblDcfSoftware(models.Model):
    dcf_software_id = models.IntegerField(primary_key=True, db_column='DCF Software ID')
    dcf_software = models.CharField(max_length=50, db_column='DCF Software', blank=True)
    class Meta:
        db_table = 'tbl DCF Software'


class TblEngagementLetter(models.Model):
    engagement_id = models.IntegerField(primary_key=True, db_column='Engagement ID')
    property_number = models.CharField(max_length=50, db_column='Property Number', blank=True)
    job_number = models.CharField(max_length=50, db_column='Job Number', blank=True)
    job_number_year = models.IntegerField(null=True, db_column='Job Number Year', blank=True)
    job_number_suffix = models.IntegerField(null=True, db_column='Job Number Suffix', blank=True)
    client_id = models.IntegerField(null=True, db_column='Client ID', blank=True)
    client_asset_number = models.CharField(max_length=50, db_column='Client Asset Number', blank=True)
    property_name = models.CharField(max_length=50, db_column='Property Name', blank=True)
    property_address = models.CharField(max_length=50, db_column='Property Address', blank=True)
    property_city = models.CharField(max_length=50, db_column='Property City', blank=True)
    property_state = models.CharField(max_length=2, db_column='Property State', blank=True)
    property_zip = models.CharField(max_length=10, db_column='Property Zip', blank=True)
    property_county = models.CharField(max_length=50, db_column='Property County', blank=True)
    fee = models.TextField(db_column='Fee', blank=True)
    fee_due_date = models.DateTimeField(null=True, db_column='Fee Due Date', blank=True)
    draft_delivery_date = models.DateTimeField(null=True, db_column='Draft Delivery Date', blank=True)
    final_delivery_date = models.DateTimeField(null=True, db_column='Final Delivery Date', blank=True)
    revised_delivery_date = models.DateTimeField(null=True, db_column='Revised Delivery Date', blank=True)
    report_type = models.IntegerField(null=True, db_column='Report Type', blank=True)
    report_link = models.TextField(db_column='Report Link', blank=True)
    delivery_date_comments = models.TextField(db_column='Delivery Date Comments', blank=True)
    engagement_letter_pdf = models.TextField(db_column='Engagement Letter PDF', blank=True)
    general_comments = models.TextField(db_column='General Comments', blank=True)
    appraisal_mgt_firm_id = models.IntegerField(null=True, db_column='Appraisal Mgt Firm ID', blank=True)
    contract_term_id = models.IntegerField(null=True, db_column='Contract Term ID', blank=True)
    tenancy_id = models.IntegerField(null=True, db_column='Tenancy ID', blank=True)
    property_type_id = models.IntegerField(null=True, db_column='Property Type ID', blank=True)
    property_sub_type_id = models.IntegerField(null=True, db_column='Property Sub Type ID', blank=True)
    project_manager_id = models.IntegerField(null=True, db_column='Project Manager ID', blank=True)
    office_location_id = models.IntegerField(null=True, db_column='Office Location ID', blank=True)
    job_status_id = models.IntegerField(null=True, db_column='Job Status ID', blank=True)
    fee_year_one = models.TextField(db_column='Fee Year One', blank=True)
    fee_year_two = models.TextField(db_column='Fee Year Two', blank=True)
    fee_year_three = models.TextField(db_column='Fee Year Three', blank=True)
    date_year_one = models.DateTimeField(null=True, db_column='Date Year One', blank=True)
    date_year_two = models.DateTimeField(null=True, db_column='Date Year Two', blank=True)
    date_year_three = models.DateTimeField(null=True, db_column='Date Year Three', blank=True)
    fee_qtr_1 = models.IntegerField(null=True, db_column='Fee Qtr 1', blank=True)
    fee_qtr_2 = models.IntegerField(null=True, db_column='Fee Qtr 2', blank=True)
    fee_qtr_3 = models.IntegerField(null=True, db_column='Fee Qtr 3', blank=True)
    fee_qtr_4 = models.IntegerField(null=True, db_column='Fee Qtr 4', blank=True)
    fee_qtr_5 = models.IntegerField(null=True, db_column='Fee Qtr 5', blank=True)
    fee_qtr_6 = models.IntegerField(null=True, db_column='Fee Qtr 6', blank=True)
    fee_qtr_7 = models.IntegerField(null=True, db_column='Fee Qtr 7', blank=True)
    fee_qtr_8 = models.IntegerField(null=True, db_column='Fee Qtr 8', blank=True)
    fee_qtr_9 = models.IntegerField(null=True, db_column='Fee Qtr 9', blank=True)
    fee_qtr_10 = models.IntegerField(null=True, db_column='Fee Qtr 10', blank=True)
    fee_qtr_11 = models.IntegerField(null=True, db_column='Fee Qtr 11', blank=True)
    fee_qtr_12 = models.IntegerField(null=True, db_column='Fee Qtr 12', blank=True)
    date_qtr_1 = models.DateTimeField(null=True, db_column='Date Qtr 1', blank=True)
    date_qtr_2 = models.DateTimeField(null=True, db_column='Date Qtr 2', blank=True)
    date_qtr_3 = models.DateTimeField(null=True, db_column='Date Qtr 3', blank=True)
    date_qtr_4 = models.DateTimeField(null=True, db_column='Date Qtr 4', blank=True)
    date_qtr_5 = models.DateTimeField(null=True, db_column='Date Qtr 5', blank=True)
    date_qtr_6 = models.DateTimeField(null=True, db_column='Date Qtr 6', blank=True)
    date_qtr_7 = models.DateTimeField(null=True, db_column='Date Qtr 7', blank=True)
    date_qtr_8 = models.DateTimeField(null=True, db_column='Date Qtr 8', blank=True)
    date_qtr_9 = models.DateTimeField(null=True, db_column='Date Qtr 9', blank=True)
    date_qtr_10 = models.DateTimeField(null=True, db_column='Date Qtr 10', blank=True)
    date_qtr_11 = models.DateTimeField(null=True, db_column='Date Qtr 11', blank=True)
    date_qtr_12 = models.DateTimeField(null=True, db_column='Date Qtr 12', blank=True)
    type_qtr_1 = models.IntegerField(null=True, db_column='Type Qtr 1', blank=True)
    type_qtr_2 = models.IntegerField(null=True, db_column='Type Qtr 2', blank=True)
    type_qtr_3 = models.IntegerField(null=True, db_column='Type Qtr 3', blank=True)
    type_qtr_4 = models.IntegerField(null=True, db_column='Type Qtr 4', blank=True)
    type_qtr_5 = models.IntegerField(null=True, db_column='Type Qtr 5', blank=True)
    type_qtr_6 = models.IntegerField(null=True, db_column='Type Qtr 6', blank=True)
    type_qtr_7 = models.IntegerField(null=True, db_column='Type Qtr 7', blank=True)
    type_qtr_8 = models.IntegerField(null=True, db_column='Type Qtr 8', blank=True)
    type_qtr_9 = models.IntegerField(null=True, db_column='Type Qtr 9', blank=True)
    type_qtr_10 = models.IntegerField(null=True, db_column='Type Qtr 10', blank=True)
    type_qtr_11 = models.IntegerField(null=True, db_column='Type Qtr 11', blank=True)
    type_qtr_12 = models.IntegerField(null=True, db_column='Type Qtr 12', blank=True)
    contract_type = models.IntegerField(null=True, db_column='Contract Type', blank=True)
    seq_no_mult = models.IntegerField(null=True, db_column='Seq No Mult', blank=True)
    future_jobs_created_qtr = models.NullBooleanField(null=True,
    db_column='Future Jobs Created Qtr', blank=True)
    future_jobs_created_my = models.NullBooleanField(null=True, db_column='Future Jobs Created MY', blank=True)
    child_record = models.NullBooleanField(null=True, db_column='Child Record', blank=True)
    child_engagement_number = models.IntegerField(null=True, db_column='Child Engagement Number', blank=True)
    cancel_job = models.IntegerField(null=True, db_column='Cancel Job', blank=True)
    future_jobs_cancelled = models.NullBooleanField(null=True, db_column='Future Jobs Cancelled', blank=True)
    date_time_stamp = models.DateTimeField(null=True, db_column='Date Time Stamp', blank=True)
    amount_due_this_job = models.TextField(db_column='Amount Due This Job', blank=True)
    class Meta:
        db_table = 'tbl Engagement Letter'


class TblEngagementLetterBackup62907(models.Model):
    engagement_id = models.IntegerField(primary_key=True, db_column='Engagement ID')
    property_number = models.CharField(max_length=50, db_column='Property Number', blank=True)
    job_number = models.CharField(max_length=50, db_column='Job Number', blank=True)
    client_id = models.IntegerField(null=True, db_column='Client ID', blank=True)
    property_name = models.CharField(max_length=50, db_column='Property Name', blank=True)
    property_address = models.CharField(max_length=50, db_column='Property Address', blank=True)
    property_city = models.CharField(max_length=50, db_column='Property City', blank=True)
    property_state = models.CharField(max_length=2, db_column='Property State', blank=True)
    property_zip = models.CharField(max_length=50, db_column='Property Zip', blank=True)
    property_county = models.CharField(max_length=50, db_column='Property County', blank=True)
    fee = models.TextField(db_column='Fee', blank=True)
    draft_delivery_date = models.DateTimeField(null=True, db_column='Draft Delivery Date', blank=True)
    final_delivery_date = models.DateTimeField(null=True, db_column='Final Delivery Date', blank=True)
    revised_delivery_date = models.DateTimeField(null=True, db_column='Revised Delivery Date', blank=True)
    report_type = models.IntegerField(null=True, db_column='Report Type', blank=True)
    report_link = models.TextField(db_column='Report Link', blank=True)
    delivery_date_comments = models.TextField(db_column='Delivery Date Comments', blank=True)
    engagement_letter_pdf = models.TextField(db_column='Engagement Letter PDF', blank=True)
    general_comments = models.TextField(db_column='General Comments', blank=True)
    appraisal_mgt_firm_id = models.IntegerField(null=True, db_column='Appraisal Mgt Firm ID', blank=True)
    contract_term_id = models.IntegerField(null=True, db_column='Contract Term ID', blank=True)
    tenancy_id = models.IntegerField(null=True, db_column='Tenancy ID', blank=True)
    property_type_id = models.IntegerField(null=True, db_column='Property Type ID', blank=True)
    property_sub_type_id = models.IntegerField(null=True, db_column='Property Sub Type ID', blank=True)
    project_manager_id = models.IntegerField(null=True, db_column='Project Manager ID', blank=True)
    office_location_id = models.IntegerField(null=True, db_column='Office Location ID', blank=True)
    job_status_id = models.IntegerField(null=True, db_column='Job Status ID', blank=True)
    fee_year_one = models.TextField(db_column='Fee Year One', blank=True)
    fee_year_two = models.TextField(db_column='Fee Year Two', blank=True)
    fee_year_three = models.TextField(db_column='Fee Year Three', blank=True)
    date_year_one = models.DateTimeField(null=True, db_column='Date Year One', blank=True)
    date_year_two = models.DateTimeField(null=True, db_column='Date Year Two', blank=True)
    date_year_three = models.DateTimeField(null=True, db_column='Date Year Three', blank=True)
    fee_qtr_1 = models.IntegerField(null=True, db_column='Fee Qtr 1', blank=True)
    fee_qtr_2 = models.IntegerField(null=True, db_column='Fee Qtr 2', blank=True)
    fee_qtr_3 = models.IntegerField(null=True, db_column='Fee Qtr 3', blank=True)
    fee_qtr_4 = models.IntegerField(null=True, db_column='Fee Qtr 4', blank=True)
    fee_qtr_5 = models.IntegerField(null=True, db_column='Fee Qtr 5', blank=True)
    fee_qtr_6 = models.IntegerField(null=True, db_column='Fee Qtr 6', blank=True)
    fee_qtr_7 = models.IntegerField(null=True, db_column='Fee Qtr 7', blank=True)
    fee_qtr_8 = models.IntegerField(null=True, db_column='Fee Qtr 8', blank=True)
    fee_qtr_9 = models.IntegerField(null=True, db_column='Fee Qtr 9', blank=True)
    fee_qtr_10 = models.IntegerField(null=True, db_column='Fee Qtr 10', blank=True)
    fee_qtr_11 = models.IntegerField(null=True, db_column='Fee Qtr 11', blank=True)
    fee_qtr_12 = models.IntegerField(null=True, db_column='Fee Qtr 12', blank=True)
    date_qtr_1 = models.DateTimeField(null=True, db_column='Date Qtr 1', blank=True)
    date_qtr_2 = models.DateTimeField(null=True, db_column='Date Qtr 2', blank=True)
    date_qtr_3 = models.DateTimeField(null=True, db_column='Date Qtr 3', blank=True)
    date_qtr_4 = models.DateTimeField(null=True, db_column='Date Qtr 4', blank=True)
    date_qtr_5 = models.DateTimeField(null=True, db_column='Date Qtr 5', blank=True)
    date_qtr_6 = models.DateTimeField(null=True, db_column='Date Qtr 6', blank=True)
    date_qtr_7 = models.DateTimeField(null=True, db_column='Date Qtr 7', blank=True)
    date_qtr_8 = models.DateTimeField(null=True, db_column='Date Qtr 8', blank=True)
    date_qtr_9 = models.DateTimeField(null=True, db_column='Date Qtr 9', blank=True)
    date_qtr_10 = models.DateTimeField(null=True, db_column='Date Qtr 10', blank=True)
    date_qtr_11 = models.DateTimeField(null=True, db_column='Date Qtr 11', blank=True)
    date_qtr_12 = models.DateTimeField(null=True, db_column='Date Qtr 12', blank=True)
    type_qtr_1 = models.IntegerField(null=True, db_column='Type Qtr 1', blank=True)
    type_qtr_2 = models.IntegerField(null=True, db_column='Type Qtr 2', blank=True)
    type_qtr_3 = models.IntegerField(null=True, db_column='Type Qtr 3', blank=True)
    type_qtr_4 = models.IntegerField(null=True, db_column='Type Qtr 4', blank=True)
    type_qtr_5 = models.IntegerField(null=True, db_column='Type Qtr 5', blank=True)
    type_qtr_6 = models.IntegerField(null=True, db_column='Type Qtr 6', blank=True)
    type_qtr_7 = models.IntegerField(null=True, db_column='Type Qtr 7', blank=True)
    type_qtr_8 = models.IntegerField(null=True, db_column='Type Qtr 8', blank=True)
    type_qtr_9 = models.IntegerField(null=True, db_column='Type Qtr 9', blank=True)
    type_qtr_10 = models.IntegerField(null=True, db_column='Type Qtr 10', blank=True)
    type_qtr_11 = models.IntegerField(null=True, db_column='Type Qtr 11', blank=True)
    type_qtr_12 = models.IntegerField(null=True, db_column='Type Qtr 12', blank=True)
    contract_type = models.IntegerField(null=True, db_column='Contract Type', blank=True)
    class Meta:
        db_table = 'tbl Engagement Letter Backup 6-29-07'


class TblExpenseDetails(models.Model):
    expense_detail_id = models.IntegerField(primary_key=True, db_column='Expense Detail ID')
    expense_id = models.IntegerField(null=True, db_column='Expense ID', blank=True)
    establishment = models.CharField(max_length=50, db_column='Establishment', blank=True)
    description = models.CharField(max_length=50, db_column='Description', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    amount = models.TextField(db_column='Amount', blank=True)
    expense_type_id = models.IntegerField(null=True, db_column='Expense Type ID', blank=True)
    personal_or_amex = models.IntegerField(null=True, db_column='Personal or Amex', blank=True)
    job_related = models.IntegerField(null=True, db_column='Job Related', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    primary_appraiser_id = models.IntegerField(null=True, db_column='Primary Appraiser ID', blank=True)
    submittal_date = models.DateTimeField(null=True, db_column='Submittal Date', blank=True)
    submittal_id = models.IntegerField(null=True, db_column='Submittal ID', blank=True)
    submitted = models.NullBooleanField(null=True, db_column='Submitted', blank=True)
    class Meta:
        db_table = 'tbl Expense Details'


class TblExpenseDetailsGeneral(models.Model):
    expense_detail_id = models.IntegerField(primary_key=True, db_column='Expense Detail ID')
    expense_id = models.IntegerField(null=True, db_column='Expense ID', blank=True)
    establishment = models.CharField(max_length=50, db_column='Establishment', blank=True)
    description = models.CharField(max_length=50, db_column='Description', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    amount = models.TextField(db_column='Amount', blank=True)
    expense_type_id = models.IntegerField(null=True, db_column='Expense Type ID', blank=True)
    personal_or_amex = models.IntegerField(null=True, db_column='Personal or Amex', blank=True)
    job_related = models.IntegerField(null=True, db_column='Job Related', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    primary_appraiser_id = models.IntegerField(null=True, db_column='Primary Appraiser ID', blank=True)
    class Meta:
        db_table = 'tbl Expense Details General'


class TblExpenseDetailsGeneral1(models.Model):
    expense_detail_id = models.IntegerField(primary_key=True, db_column='Expense Detail ID')
    expense_id = models.IntegerField(null=True, db_column='Expense ID', blank=True)
    establishment = models.CharField(max_length=50, db_column='Establishment', blank=True)
    description = models.CharField(max_length=50, db_column='Description', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    amount = models.TextField(db_column='Amount', blank=True)
    expense_type_id = models.IntegerField(null=True, db_column='Expense Type ID', blank=True)
    personal_or_amex = models.IntegerField(null=True, db_column='Personal or Amex', blank=True)
    job_related = models.IntegerField(null=True, db_column='Job Related', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    primary_appraiser_id = models.IntegerField(null=True, db_column='Primary Appraiser ID', blank=True)
    class Meta:
        db_table = 'tbl Expense Details General1'


class TblExpenseDetailsGeneral2(models.Model):
    expense_detail_id = models.IntegerField(primary_key=True, db_column='Expense Detail ID')
    expense_id = models.IntegerField(null=True, db_column='Expense ID', blank=True)
    establishment = models.CharField(max_length=50, db_column='Establishment', blank=True)
    description = models.CharField(max_length=50, db_column='Description', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    amount = models.TextField(db_column='Amount', blank=True)
    expense_type_id = models.IntegerField(null=True, db_column='Expense Type ID', blank=True)
    personal_or_amex = models.IntegerField(null=True, db_column='Personal or Amex', blank=True)
    job_related = models.IntegerField(null=True, db_column='Job Related', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    primary_appraiser_id = models.IntegerField(null=True, db_column='Primary Appraiser ID', blank=True)
    class Meta:
        db_table = 'tbl Expense Details General2'


class TblExpenseDetails1(models.Model):
    expense_detail_id = models.IntegerField(primary_key=True, db_column='Expense Detail ID')
    expense_id = models.IntegerField(null=True, db_column='Expense ID', blank=True)
    establishment = models.CharField(max_length=50, db_column='Establishment', blank=True)
    description = models.CharField(max_length=50, db_column='Description', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    amount = models.TextField(db_column='Amount', blank=True)
    expense_type_id = models.IntegerField(null=True, db_column='Expense Type ID', blank=True)
    personal_or_amex = models.IntegerField(null=True, db_column='Personal or Amex', blank=True)
    job_related = models.IntegerField(null=True, db_column='Job Related', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    primary_appraiser_id = models.IntegerField(null=True, db_column='Primary Appraiser ID', blank=True)
    submittal_date = models.DateTimeField(null=True, db_column='Submittal Date', blank=True)
    submittal_id = models.IntegerField(null=True, db_column='Submittal ID', blank=True)
    submitted = models.NullBooleanField(null=True, db_column='Submitted', blank=True)
    class Meta:
        db_table = 'tbl Expense Details1'


class TblExpenseDetails2(models.Model):
    expense_detail_id = models.IntegerField(primary_key=True, db_column='Expense Detail ID')
    expense_id = models.IntegerField(null=True, db_column='Expense ID', blank=True)
    establishment = models.CharField(max_length=50, db_column='Establishment', blank=True)
    description = models.CharField(max_length=50, db_column='Description', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    amount = models.TextField(db_column='Amount', blank=True)
    expense_type_id = models.IntegerField(null=True, db_column='Expense Type ID', blank=True)
    personal_or_amex = models.IntegerField(null=True, db_column='Personal or Amex', blank=True)
    job_related = models.IntegerField(null=True, db_column='Job Related', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    primary_appraiser_id = models.IntegerField(null=True, db_column='Primary Appraiser ID', blank=True)
    submittal_date = models.DateTimeField(null=True, db_column='Submittal Date', blank=True)
    submittal_id = models.IntegerField(null=True, db_column='Submittal ID', blank=True)
    submitted = models.NullBooleanField(null=True, db_column='Submitted', blank=True)
    class Meta:
        db_table = 'tbl Expense Details2'


class TblExpenseMaster(models.Model):
    expense_id = models.IntegerField(primary_key=True, db_column='Expense ID')
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    primary_appraiser_id = models.IntegerField(null=True, db_column='Primary Appraiser ID', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    general_or_job = models.IntegerField(null=True, db_column='General or Job', blank=True)
    class Meta:
        db_table = 'tbl Expense Master'


class TblExpenseMasterGeneral(models.Model):
    expense_id = models.IntegerField(primary_key=True, db_column='Expense ID')
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    primary_appraiser_id = models.IntegerField(null=True, db_column='Primary Appraiser ID', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    general_or_job = models.IntegerField(null=True, db_column='General or Job', blank=True)
    class Meta:
        db_table = 'tbl Expense Master General'


class TblExpenseMasterGeneral1(models.Model):
    expense_id = models.IntegerField(primary_key=True, db_column='Expense ID')
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    primary_appraiser_id = models.IntegerField(null=True, db_column='Primary Appraiser ID', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    general_or_job = models.IntegerField(null=True, db_column='General or Job', blank=True)
    class Meta:
        db_table = 'tbl Expense Master General1'


class TblExpenseMasterGeneral2(models.Model):
    expense_id = models.IntegerField(primary_key=True, db_column='Expense ID')
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    primary_appraiser_id = models.IntegerField(null=True, db_column='Primary Appraiser ID', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    general_or_job = models.IntegerField(null=True, db_column='General or Job', blank=True)
    class Meta:
        db_table = 'tbl Expense Master General2'


class TblExpenseMaster1(models.Model):
    expense_id = models.IntegerField(primary_key=True, db_column='Expense ID')
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    primary_appraiser_id = models.IntegerField(null=True, db_column='Primary Appraiser ID', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    general_or_job = models.IntegerField(null=True, db_column='General or Job', blank=True)
    class Meta:
        db_table = 'tbl Expense Master1'


class TblExpenseMaster2(models.Model):
    expense_id = models.IntegerField(primary_key=True, db_column='Expense ID')
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    appraiser_id = models.IntegerField(null=True, db_column='Appraiser ID', blank=True)
    primary_appraiser_id = models.IntegerField(null=True, db_column='Primary Appraiser ID', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    general_or_job = models.IntegerField(null=True, db_column='General or Job', blank=True)
    class Meta:
        db_table = 'tbl Expense Master2'


class TblExpenseTypeListing(models.Model):
    expense_type = models.CharField(max_length=50, db_column='Expense Type', blank=True)
    expense_type_id = models.IntegerField(primary_key=True, db_column='Expense Type ID')
    class Meta:
        db_table = 'tbl Expense Type Listing'


class TblExpenseTypeListing1(models.Model):
    expense_type = models.CharField(max_length=50, db_column='Expense Type', blank=True)
    expense_type_id = models.IntegerField(primary_key=True, db_column='Expense Type ID')
    class Meta:
        db_table = 'tbl Expense Type Listing1'


class TblExpenseTypeListing2(models.Model):
    expense_type = models.CharField(max_length=50, db_column='Expense Type', blank=True)
    expense_type_id = models.IntegerField(primary_key=True, db_column='Expense Type ID')
    class Meta:
        db_table = 'tbl Expense Type Listing2'


class TblInvoiceItems(models.Model):
    invoice_item_id = models.IntegerField(primary_key=True, db_column='Invoice Item ID')
    invoice_item = models.CharField(max_length=50, db_column='Invoice Item', blank=True)
    class Meta:
        db_table = 'tbl Invoice Items'


class TblInvoiceItems1(models.Model):
    invoice_item_id = models.IntegerField(primary_key=True, db_column='Invoice Item ID')
    invoice_item = models.CharField(max_length=50, db_column='Invoice Item', blank=True)
    class Meta:
        db_table = 'tbl Invoice Items1'


class TblInvoiceItems2(models.Model):
    invoice_item_id = models.IntegerField(primary_key=True, db_column='Invoice Item ID')
    invoice_item = models.CharField(max_length=50, db_column='Invoice Item', blank=True)
    class Meta:
        db_table = 'tbl Invoice Items2'


class TblInvoices(models.Model):
    invoice_id = models.IntegerField(primary_key=True, db_column='Invoice ID')
    client_id = models.IntegerField(null=True, db_column='Client ID', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    contact_name = models.CharField(max_length=50, db_column='Contact Name', blank=True)
    client_name = models.CharField(max_length=50, db_column='Client Name', blank=True)
    address_1 = models.CharField(max_length=50, db_column='Address 1', blank=True)
    address_2 = models.CharField(max_length=50, db_column='Address 2', blank=True)
    address_3 = models.CharField(max_length=50, db_column='Address 3', blank=True)
    city = models.CharField(max_length=50, db_column='City', blank=True)
    state = models.CharField(max_length=50, db_column='State', blank=True)
    zip = models.CharField(max_length=10, db_column='Zip', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    job_description = models.CharField(max_length=50, db_column='Job Description', blank=True)
    invoice_number = models.CharField(max_length=50, db_column='Invoice Number', blank=True)
    client_asset_number = models.CharField(max_length=50, db_column='Client Asset Number', blank=True)
    item = models.CharField(max_length=50, db_column='Item', blank=True)
    description = models.TextField(db_column='Description', blank=True)
    amount = models.TextField(db_column='Amount', blank=True)
    paid = models.NullBooleanField(null=True, db_column='Paid', blank=True)
    amount_paid = models.TextField(db_column='Amount Paid', blank=True)
    date_paid = models.DateTimeField(null=True, db_column='Date Paid', blank=True)
    invoice_item_id = models.IntegerField(null=True, db_column='Invoice Item ID', blank=True)
    class Meta:
        db_table = 'tbl Invoices'


class TblInvoices1(models.Model):
    invoice_id = models.IntegerField(primary_key=True, db_column='Invoice ID')
    client_id = models.IntegerField(null=True, db_column='Client ID', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    contact_name = models.CharField(max_length=50, db_column='Contact Name', blank=True)
    client_name = models.CharField(max_length=50, db_column='Client Name', blank=True)
    address_1 = models.CharField(max_length=50, db_column='Address 1', blank=True)
    address_2 = models.CharField(max_length=50, db_column='Address 2', blank=True)
    address_3 = models.CharField(max_length=50, db_column='Address 3', blank=True)
    city = models.CharField(max_length=50, db_column='City', blank=True)
    state = models.CharField(max_length=50, db_column='State', blank=True)
    zip = models.CharField(max_length=10, db_column='Zip', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    job_description = models.CharField(max_length=50, db_column='Job Description', blank=True)
    invoice_number = models.CharField(max_length=50, db_column='Invoice Number', blank=True)
    client_asset_number = models.CharField(max_length=50, db_column='Client Asset Number', blank=True)
    item = models.CharField(max_length=50, db_column='Item', blank=True)
    description = models.TextField(db_column='Description', blank=True)
    amount = models.TextField(db_column='Amount', blank=True)
    paid = models.NullBooleanField(null=True, db_column='Paid', blank=True)
    amount_paid = models.TextField(db_column='Amount Paid', blank=True)
    date_paid = models.DateTimeField(null=True, db_column='Date Paid', blank=True)
    invoice_item_id = models.IntegerField(null=True, db_column='Invoice Item ID', blank=True)
    class Meta:
        db_table = 'tbl Invoices1'


class TblInvoices2(models.Model):
    invoice_id = models.IntegerField(primary_key=True, db_column='Invoice ID')
    client_id = models.IntegerField(null=True, db_column='Client ID', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    contact_name = models.CharField(max_length=50, db_column='Contact Name', blank=True)
    client_name = models.CharField(max_length=50, db_column='Client Name', blank=True)
    address_1 = models.CharField(max_length=50, db_column='Address 1', blank=True)
    address_2 = models.CharField(max_length=50, db_column='Address 2', blank=True)
    address_3 = models.CharField(max_length=50, db_column='Address 3', blank=True)
    city = models.CharField(max_length=50, db_column='City', blank=True)
    state = models.CharField(max_length=50, db_column='State', blank=True)
    zip = models.CharField(max_length=10, db_column='Zip', blank=True)
    date = models.DateTimeField(null=True, db_column='Date', blank=True)
    job_description = models.CharField(max_length=50, db_column='Job Description', blank=True)
    invoice_number = models.CharField(max_length=50, db_column='Invoice Number', blank=True)
    client_asset_number = models.CharField(max_length=50, db_column='Client Asset Number', blank=True)
    item = models.CharField(max_length=50, db_column='Item', blank=True)
    description = models.TextField(db_column='Description', blank=True)
    amount = models.TextField(db_column='Amount', blank=True)
    paid = models.NullBooleanField(null=True, db_column='Paid', blank=True)
    amount_paid = models.TextField(db_column='Amount Paid', blank=True)
    date_paid = models.DateTimeField(null=True, db_column='Date Paid', blank=True)
    invoice_item_id = models.IntegerField(null=True, db_column='Invoice Item ID', blank=True)
    class Meta:
        db_table = 'tbl Invoices2'


class TblJobStatusListing(models.Model):
    job_status = models.CharField(max_length=50, db_column='Job Status', blank=True)
    job_status_id = models.IntegerField(primary_key=True, db_column='Job Status ID')
    class Meta:
        db_table = 'tbl Job Status Listing'


class TblJobStatusListing1(models.Model):
    job_status = models.CharField(max_length=50, db_column='Job Status', blank=True)
    job_status_id = models.IntegerField(primary_key=True, db_column='Job Status ID')
    class Meta:
        db_table = 'tbl Job Status Listing1'


class TblJobStatusListing2(models.Model):
    job_status = models.CharField(max_length=50, db_column='Job Status', blank=True)
    job_status_id = models.IntegerField(primary_key=True, db_column='Job Status ID')
    class Meta:
        db_table = 'tbl Job Status Listing2'


class TblOfficeLocationListing(models.Model):
    office_location = models.CharField(max_length=50, db_column='Office Location', blank=True)
    office_location_id = models.IntegerField(primary_key=True, db_column='Office Location ID')
    class Meta:
        db_table = 'tbl Office Location Listing'


class TblOfficeLocationListing1(models.Model):
    office_location = models.CharField(max_length=50, db_column='Office Location', blank=True)
    office_location_id = models.IntegerField(primary_key=True, db_column='Office Location ID')
    class Meta:
        db_table = 'tbl Office Location Listing1'


class TblOfficeLocationListing2(models.Model):
    office_location = models.CharField(max_length=50, db_column='Office Location', blank=True)
    office_location_id = models.IntegerField(primary_key=True, db_column='Office Location ID')
    class Meta:
        db_table = 'tbl Office Location Listing2'


class TblPreferredReportDelivery(models.Model):
    report_delivery_id = models.IntegerField(primary_key=True, db_column='Report Delivery ID')
    preferred_report_delivery = models.CharField(max_length=255, db_column='Preferred Report Delivery', blank=True)
    class Meta:
        db_table = 'tbl Preferred Report Delivery'


class TblPreferredReportDelivery1(models.Model):
    report_delivery_id = models.IntegerField(primary_key=True, db_column='Report Delivery ID')
    preferred_report_delivery = models.CharField(max_length=255, db_column='Preferred Report Delivery', blank=True)
    class Meta:
        db_table = 'tbl Preferred Report Delivery1'


class TblPreferredReportDelivery2(models.Model):
    report_delivery_id = models.IntegerField(primary_key=True, db_column='Report Delivery ID')
    preferred_report_delivery = models.CharField(max_length=255, db_column='Preferred Report Delivery', blank=True)
    class Meta:
        db_table = 'tbl Preferred Report Delivery2'


class TblProjectManager(models.Model):
    project_manager_id = models.IntegerField(primary_key=True, db_column='Project Manager ID')
    last_name = models.CharField(max_length=50, db_column='Last Name', blank=True)
    first_name = models.CharField(max_length=50, db_column='First Name', blank=True)
    class Meta:
        db_table = 'tbl Project Manager'


class TblProjectManager1(models.Model):
    project_manager_id = models.IntegerField(primary_key=True, db_column='Project Manager ID')
    last_name = models.CharField(max_length=50, db_column='Last Name', blank=True)
    first_name = models.CharField(max_length=50, db_column='First Name', blank=True)
    class Meta:
        db_table = 'tbl Project Manager1'


class TblProjectManager2(models.Model):
    project_manager_id = models.IntegerField(primary_key=True, db_column='Project Manager ID')
    last_name = models.CharField(max_length=50, db_column='Last Name', blank=True)
    first_name = models.CharField(max_length=50, db_column='First Name', blank=True)
    class Meta:
        db_table = 'tbl Project Manager2'


class TblPropertySubType(models.Model):
    property_sub_type_id = models.IntegerField(primary_key=True, db_column='Property Sub Type ID')
    property_sub_type = models.CharField(max_length=50, db_column='Property Sub-type', blank=True)
    class Meta:
        db_table = 'tbl Property Sub-type'


class TblPropertySubType1(models.Model):
    property_sub_type_id = models.IntegerField(primary_key=True, db_column='Property Sub Type ID')
    property_sub_type = models.CharField(max_length=50, db_column='Property Sub-type', blank=True)
    class Meta:
        db_table = 'tbl Property Sub-type1'


class TblPropertySubType2(models.Model):
    property_sub_type_id = models.IntegerField(primary_key=True, db_column='Property Sub Type ID')
    property_sub_type = models.CharField(max_length=50, db_column='Property Sub-type', blank=True)
    class Meta:
        db_table = 'tbl Property Sub-type2'


class TblPropertyTypeListing(models.Model):
    property_type = models.CharField(max_length=50, db_column='Property Type', blank=True)
    property_type_id = models.IntegerField(primary_key=True, db_column='Property Type ID')
    class Meta:
        db_table = 'tbl Property Type Listing'


class TblPropertyTypeListing1(models.Model):
    property_type = models.CharField(max_length=50, db_column='Property Type', blank=True)
    property_type_id = models.IntegerField(primary_key=True, db_column='Property Type ID')
    class Meta:
        db_table = 'tbl Property Type Listing1'


class TblPropertyTypeListing2(models.Model):
    property_type = models.CharField(max_length=50, db_column='Property Type', blank=True)
    property_type_id = models.IntegerField(primary_key=True, db_column='Property Type ID')
    class Meta:
        db_table = 'tbl Property Type Listing2'


class TblQuarterlyBonus(models.Model):
    qtr_share_id = models.IntegerField(primary_key=True, db_column='Qtr Share ID')
    job_number = models.CharField(max_length=50, db_column='Job Number', blank=True)
    job_name = models.CharField(max_length=255, db_column='Job Name', blank=True)
    gross_fee = models.TextField(db_column='Gross Fee', blank=True)
    expenses = models.TextField(db_column='Expenses', blank=True)
    adjusted_fee = models.TextField(db_column='Adjusted Fee', blank=True)
    split = models.FloatField(null=True, db_column='Split', blank=True)
    share = models.TextField(db_column='Share', blank=True)
    allotted_review_time = models.IntegerField(null=True, db_column='Allotted Review Time', blank=True)
    required_review_time = models.IntegerField(null=True, db_column='Required Review Time', blank=True)
    written_off_review_time = models.IntegerField(null=True, db_column='Written Off Review Time', blank=True)
    time_charged = models.IntegerField(null=True, db_column='Time Charged', blank=True)
    review_charge = models.TextField(db_column='Review Charge', blank=True)
    net_share = models.TextField(db_column='Net Share', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    class Meta:
        db_table = 'tbl Quarterly Bonus'


class TblQuarterlyBonus1(models.Model):
    qtr_share_id = models.IntegerField(primary_key=True, db_column='Qtr Share ID')
    job_number = models.CharField(max_length=50, db_column='Job Number', blank=True)
    job_name = models.CharField(max_length=255, db_column='Job Name', blank=True)
    gross_fee = models.TextField(db_column='Gross Fee', blank=True)
    expenses = models.TextField(db_column='Expenses', blank=True)
    adjusted_fee = models.TextField(db_column='Adjusted Fee', blank=True)
    split = models.FloatField(null=True, db_column='Split', blank=True)
    share = models.TextField(db_column='Share', blank=True)
    allotted_review_time = models.IntegerField(null=True, db_column='Allotted Review Time', blank=True)
    required_review_time = models.IntegerField(null=True, db_column='Required Review Time', blank=True)
    written_off_review_time = models.IntegerField(null=True, db_column='Written Off Review Time', blank=True)
    time_charged = models.IntegerField(null=True, db_column='Time Charged', blank=True)
    review_charge = models.TextField(db_column='Review Charge', blank=True)
    net_share = models.TextField(db_column='Net Share', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    class Meta:
        db_table = 'tbl Quarterly Bonus1'


class TblQuarterlyBonus2(models.Model):
    qtr_share_id = models.IntegerField(primary_key=True, db_column='Qtr Share ID')
    job_number = models.CharField(max_length=50, db_column='Job Number', blank=True)
    job_name = models.CharField(max_length=255, db_column='Job Name', blank=True)
    gross_fee = models.TextField(db_column='Gross Fee', blank=True)
    expenses = models.TextField(db_column='Expenses', blank=True)
    adjusted_fee = models.TextField(db_column='Adjusted Fee', blank=True)
    split = models.FloatField(null=True, db_column='Split', blank=True)
    share = models.TextField(db_column='Share', blank=True)
    allotted_review_time = models.IntegerField(null=True, db_column='Allotted Review Time', blank=True)
    required_review_time = models.IntegerField(null=True, db_column='Required Review Time', blank=True)
    written_off_review_time = models.IntegerField(null=True, db_column='Written Off Review Time', blank=True)
    time_charged = models.IntegerField(null=True, db_column='Time Charged', blank=True)
    review_charge = models.TextField(db_column='Review Charge', blank=True)
    net_share = models.TextField(db_column='Net Share', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    class Meta:
        db_table = 'tbl Quarterly Bonus2'


class TblQuarterlyFeeSchedule(models.Model):
    qtr_fee_id = models.IntegerField(primary_key=True, db_column='Qtr Fee ID')
    fee_qtr_1 = models.IntegerField(null=True, db_column='Fee Qtr 1', blank=True)
    fee_qtr_2 = models.IntegerField(null=True, db_column='Fee Qtr 2', blank=True)
    fee_qtr_3 = models.IntegerField(null=True, db_column='Fee Qtr 3', blank=True)
    fee_qtr_4 = models.IntegerField(null=True, db_column='Fee Qtr 4', blank=True)
    fee_qtr_5 = models.IntegerField(null=True, db_column='Fee Qtr 5', blank=True)
    fee_qtr_6 = models.IntegerField(null=True, db_column='Fee Qtr 6', blank=True)
    fee_qtr_7 = models.IntegerField(null=True, db_column='Fee Qtr 7', blank=True)
    fee_qtr_8 = models.IntegerField(null=True, db_column='Fee Qtr 8', blank=True)
    fee_qtr_9 = models.IntegerField(null=True, db_column='Fee Qtr 9', blank=True)
    fee_qtr_10 = models.IntegerField(null=True, db_column='Fee Qtr 10', blank=True)
    fee_qtr_11 = models.IntegerField(null=True, db_column='Fee Qtr 11', blank=True)
    fee_qtr_12 = models.IntegerField(null=True, db_column='Fee Qtr 12', blank=True)
    date_qtr_1 = models.DateTimeField(null=True, db_column='Date Qtr 1', blank=True)
    date_qtr_2 = models.DateTimeField(null=True, db_column='Date Qtr 2', blank=True)
    date_qtr_3 = models.DateTimeField(null=True, db_column='Date Qtr 3', blank=True)
    date_qtr_4 = models.DateTimeField(null=True, db_column='Date Qtr 4', blank=True)
    date_qtr_5 = models.DateTimeField(null=True, db_column='Date Qtr 5', blank=True)
    date_qtr_6 = models.DateTimeField(null=True, db_column='Date Qtr 6', blank=True)
    date_qtr_7 = models.DateTimeField(null=True, db_column='Date Qtr 7', blank=True)
    date_qtr_8 = models.DateTimeField(null=True, db_column='Date Qtr 8', blank=True)
    date_qtr_9 = models.DateTimeField(null=True, db_column='Date Qtr 9', blank=True)
    date_qtr_10 = models.DateTimeField(null=True, db_column='Date Qtr 10', blank=True)
    date_qtr_11 = models.DateTimeField(null=True, db_column='Date Qtr 11', blank=True)
    date_qtr_12 = models.DateTimeField(null=True, db_column='Date Qtr 12', blank=True)
    type_qtr_1 = models.IntegerField(null=True, db_column='Type Qtr 1', blank=True)
    type_qtr_2 = models.IntegerField(null=True, db_column='Type Qtr 2', blank=True)
    type_qtr_3 = models.IntegerField(null=True, db_column='Type Qtr 3', blank=True)
    type_qtr_4 = models.IntegerField(null=True, db_column='Type Qtr 4', blank=True)
    type_qtr_5 = models.IntegerField(null=True, db_column='Type Qtr 5', blank=True)
    type_qtr_6 = models.IntegerField(null=True, db_column='Type Qtr 6', blank=True)
    type_qtr_7 = models.IntegerField(null=True, db_column='Type Qtr 7', blank=True)
    type_qtr_8 = models.IntegerField(null=True, db_column='Type Qtr 8', blank=True)
    type_qtr_9 = models.IntegerField(null=True, db_column='Type Qtr 9', blank=True)
    type_qtr_10 = models.IntegerField(null=True, db_column='Type Qtr 10', blank=True)
    type_qtr_11 = models.IntegerField(null=True, db_column='Type Qtr 11', blank=True)
    type_qtr_12 = models.IntegerField(null=True, db_column='Type Qtr 12', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    class Meta:
        db_table = 'tbl Quarterly Fee Schedule'


class TblQuarterlyFeeSchedule1(models.Model):
    qtr_fee_id = models.IntegerField(primary_key=True, db_column='Qtr Fee ID')
    fee_qtr_1 = models.IntegerField(null=True, db_column='Fee Qtr 1', blank=True)
    fee_qtr_2 = models.IntegerField(null=True, db_column='Fee Qtr 2', blank=True)
    fee_qtr_3 = models.IntegerField(null=True, db_column='Fee Qtr 3', blank=True)
    fee_qtr_4 = models.IntegerField(null=True, db_column='Fee Qtr 4', blank=True)
    fee_qtr_5 = models.IntegerField(null=True, db_column='Fee Qtr 5', blank=True)
    fee_qtr_6 = models.IntegerField(null=True, db_column='Fee Qtr 6', blank=True)
    fee_qtr_7 = models.IntegerField(null=True, db_column='Fee Qtr 7', blank=True)
    fee_qtr_8 = models.IntegerField(null=True, db_column='Fee Qtr 8', blank=True)
    fee_qtr_9 = models.IntegerField(null=True, db_column='Fee Qtr 9', blank=True)
    fee_qtr_10 = models.IntegerField(null=True, db_column='Fee Qtr 10', blank=True)
    fee_qtr_11 = models.IntegerField(null=True, db_column='Fee Qtr 11', blank=True)
    fee_qtr_12 = models.IntegerField(null=True, db_column='Fee Qtr 12', blank=True)
    date_qtr_1 = models.DateTimeField(null=True, db_column='Date Qtr 1', blank=True)
    date_qtr_2 = models.DateTimeField(null=True, db_column='Date Qtr 2', blank=True)
    date_qtr_3 = models.DateTimeField(null=True, db_column='Date Qtr 3', blank=True)
    date_qtr_4 = models.DateTimeField(null=True, db_column='Date Qtr 4', blank=True)
    date_qtr_5 = models.DateTimeField(null=True, db_column='Date Qtr 5', blank=True)
    date_qtr_6 = models.DateTimeField(null=True, db_column='Date Qtr 6', blank=True)
    date_qtr_7 = models.DateTimeField(null=True, db_column='Date Qtr 7', blank=True)
    date_qtr_8 = models.DateTimeField(null=True, db_column='Date Qtr 8', blank=True)
    date_qtr_9 = models.DateTimeField(null=True, db_column='Date Qtr 9', blank=True)
    date_qtr_10 = models.DateTimeField(null=True, db_column='Date Qtr 10', blank=True)
    date_qtr_11 = models.DateTimeField(null=True, db_column='Date Qtr 11', blank=True)
    date_qtr_12 = models.DateTimeField(null=True, db_column='Date Qtr 12', blank=True)
    type_qtr_1 = models.IntegerField(null=True, db_column='Type Qtr 1', blank=True)
    type_qtr_2 = models.IntegerField(null=True, db_column='Type Qtr 2', blank=True)
    type_qtr_3 = models.IntegerField(null=True, db_column='Type Qtr 3', blank=True)
    type_qtr_4 = models.IntegerField(null=True, db_column='Type Qtr 4', blank=True)
    type_qtr_5 = models.IntegerField(null=True, db_column='Type Qtr 5', blank=True)
    type_qtr_6 = models.IntegerField(null=True, db_column='Type Qtr 6', blank=True)
    type_qtr_7 = models.IntegerField(null=True, db_column='Type Qtr 7', blank=True)
    type_qtr_8 = models.IntegerField(null=True, db_column='Type Qtr 8', blank=True)
    type_qtr_9 = models.IntegerField(null=True, db_column='Type Qtr 9', blank=True)
    type_qtr_10 = models.IntegerField(null=True, db_column='Type Qtr 10', blank=True)
    type_qtr_11 = models.IntegerField(null=True, db_column='Type Qtr 11', blank=True)
    type_qtr_12 = models.IntegerField(null=True, db_column='Type Qtr 12', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    class Meta:
        db_table = 'tbl Quarterly Fee Schedule1'


class TblQuarterlyFeeSchedule2(models.Model):
    qtr_fee_id = models.IntegerField(primary_key=True, db_column='Qtr Fee ID')
    fee_qtr_1 = models.IntegerField(null=True, db_column='Fee Qtr 1', blank=True)
    fee_qtr_2 = models.IntegerField(null=True, db_column='Fee Qtr 2', blank=True)
    fee_qtr_3 = models.IntegerField(null=True, db_column='Fee Qtr 3', blank=True)
    fee_qtr_4 = models.IntegerField(null=True, db_column='Fee Qtr 4', blank=True)
    fee_qtr_5 = models.IntegerField(null=True, db_column='Fee Qtr 5', blank=True)
    fee_qtr_6 = models.IntegerField(null=True, db_column='Fee Qtr 6', blank=True)
    fee_qtr_7 = models.IntegerField(null=True, db_column='Fee Qtr 7', blank=True)
    fee_qtr_8 = models.IntegerField(null=True, db_column='Fee Qtr 8', blank=True)
    fee_qtr_9 = models.IntegerField(null=True, db_column='Fee Qtr 9', blank=True)
    fee_qtr_10 = models.IntegerField(null=True, db_column='Fee Qtr 10', blank=True)
    fee_qtr_11 = models.IntegerField(null=True, db_column='Fee Qtr 11', blank=True)
    fee_qtr_12 = models.IntegerField(null=True, db_column='Fee Qtr 12', blank=True)
    date_qtr_1 = models.DateTimeField(null=True, db_column='Date Qtr 1', blank=True)
    date_qtr_2 = models.DateTimeField(null=True, db_column='Date Qtr 2', blank=True)
    date_qtr_3 = models.DateTimeField(null=True, db_column='Date Qtr 3', blank=True)
    date_qtr_4 = models.DateTimeField(null=True, db_column='Date Qtr 4', blank=True)
    date_qtr_5 = models.DateTimeField(null=True, db_column='Date Qtr 5', blank=True)
    date_qtr_6 = models.DateTimeField(null=True, db_column='Date Qtr 6', blank=True)
    date_qtr_7 = models.DateTimeField(null=True, db_column='Date Qtr 7', blank=True)
    date_qtr_8 = models.DateTimeField(null=True, db_column='Date Qtr 8', blank=True)
    date_qtr_9 = models.DateTimeField(null=True, db_column='Date Qtr 9', blank=True)
    date_qtr_10 = models.DateTimeField(null=True, db_column='Date Qtr 10', blank=True)
    date_qtr_11 = models.DateTimeField(null=True, db_column='Date Qtr 11', blank=True)
    date_qtr_12 = models.DateTimeField(null=True, db_column='Date Qtr 12', blank=True)
    type_qtr_1 = models.IntegerField(null=True, db_column='Type Qtr 1', blank=True)
    type_qtr_2 = models.IntegerField(null=True, db_column='Type Qtr 2', blank=True)
    type_qtr_3 = models.IntegerField(null=True, db_column='Type Qtr 3', blank=True)
    type_qtr_4 = models.IntegerField(null=True, db_column='Type Qtr 4', blank=True)
    type_qtr_5 = models.IntegerField(null=True, db_column='Type Qtr 5', blank=True)
    type_qtr_6 = models.IntegerField(null=True, db_column='Type Qtr 6', blank=True)
    type_qtr_7 = models.IntegerField(null=True, db_column='Type Qtr 7', blank=True)
    type_qtr_8 = models.IntegerField(null=True, db_column='Type Qtr 8', blank=True)
    type_qtr_9 = models.IntegerField(null=True, db_column='Type Qtr 9', blank=True)
    type_qtr_10 = models.IntegerField(null=True, db_column='Type Qtr 10', blank=True)
    type_qtr_11 = models.IntegerField(null=True, db_column='Type Qtr 11', blank=True)
    type_qtr_12 = models.IntegerField(null=True, db_column='Type Qtr 12', blank=True)
    engagement_id = models.IntegerField(null=True, db_column='Engagement ID', blank=True)
    class Meta:
        db_table = 'tbl Quarterly Fee Schedule2'


class TblStateAbbreviations(models.Model):
    state_id = models.IntegerField(primary_key=True, db_column='State ID')
    state = models.CharField(max_length=50, db_column='State', blank=True)
    abbreviation = models.CharField(max_length=2, db_column='Abbreviation', blank=True)
    class Meta:
        db_table = 'tbl State Abbreviations'


class TblStateAbbreviations1(models.Model):
    state_id = models.IntegerField(primary_key=True, db_column='State ID')
    state = models.CharField(max_length=50, db_column='State', blank=True)
    abbreviation = models.CharField(max_length=2, db_column='Abbreviation', blank=True)
    class Meta:
        db_table = 'tbl State Abbreviations1'


class TblStateAbbreviations2(models.Model):
    state_id = models.IntegerField(primary_key=True, db_column='State ID')
    state = models.CharField(max_length=50, db_column='State', blank=True)
    abbreviation = models.CharField(max_length=2, db_column='Abbreviation', blank=True)
    class Meta:
        db_table = 'tbl State Abbreviations2'


class TblTenancyListing(models.Model):
    tenancy = models.CharField(max_length=50, db_column='Tenancy', blank=True)
    tenancy_id = models.IntegerField(primary_key=True, db_column='Tenancy ID')
    class Meta:
        db_table = 'tbl Tenancy Listing'


class TblTenancyListing1(models.Model):
    tenancy = models.CharField(max_length=50, db_column='Tenancy', blank=True)
    tenancy_id = models.IntegerField(primary_key=True, db_column='Tenancy ID')
    class Meta:
        db_table = 'tbl Tenancy Listing1'


class TblTenancyListing2(models.Model):
    tenancy = models.CharField(max_length=50, db_column='Tenancy', blank=True)
    tenancy_id = models.IntegerField(primary_key=True, db_column='Tenancy ID')
    class Meta:
        db_table = 'tbl Tenancy Listing2'


class TblTypeOfQtrAppraisal(models.Model):
    qtr_fee_type_id = models.IntegerField(primary_key=True, db_column='Qtr Fee Type ID')
    type_of_appraisal = models.CharField(max_length=50, db_column='Type of Appraisal', blank=True)
    class Meta:
        db_table = 'tbl Type of Qtr Appraisal'


class TblTypeOfQtrAppraisal1(models.Model):
    qtr_fee_type_id = models.IntegerField(primary_key=True, db_column='Qtr Fee Type ID')
    type_of_appraisal = models.CharField(max_length=50, db_column='Type of Appraisal', blank=True)
    class Meta:
        db_table = 'tbl Type of Qtr Appraisal1'


class TblTypeOfQtrAppraisal2(models.Model):
    qtr_fee_type_id = models.IntegerField(primary_key=True, db_column='Qtr Fee Type ID')
    type_of_appraisal = models.CharField(max_length=50, db_column='Type of Appraisal', blank=True)
    class Meta:
        db_table = 'tbl Type of Qtr Appraisal2'

""" these crash when accessed due to missing primary keys
class TblYearList(models.Model):
    year = models.CharField(max_length=50, db_column='Year', blank=True)
    class Meta:
        db_table = 'tbl Year List'


class TblYearList1(models.Model):
    year = models.CharField(max_length=50, db_column='Year', blank=True)
    class Meta:
        db_table = 'tbl Year List1'


class TblYearList2(models.Model):
    year = models.CharField(max_length=50, db_column='Year', blank=True)
    class Meta:
        db_table = 'tbl Year List2'
"""
