#! /usr/bin/env python
import os
import sys
import json
import logging
import urllib2
import datetime

from django.core.exceptions import ValidationError

sys.path.insert(0, os.getcwd().replace('/scripts', ''))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "nexus.settings")

from nexus.data import PROPERTY_SUBTYPE
from nexus.models import (Contact, Employee, Client, Property, Role, AMF,
                          Address, Appraisal, Assignment, Engagement,
                          EngagementProperty, AppraisalOccurrenceSchedule,
                          ScheduledAppraisal, ScheduledAssignment)
from access.models import (TblEngagementLetter, TblClientMaster,
                           TblClientType, TblClientContactList,
                           TblPropertyTypeListing, TblPropertySubType,
                           TblProjectManager, TblAppraiserEngagementDetails,
                           TblAppraiserMaster, TblAppraisalMgtFirmMaster,
                           TblAppraisalFirmContactList)


if __name__ != "__main__":
    sys.exit(1)

log = logging.getLogger('nexus')

# parse the command line for query_geos
query_geos = False
if len(sys.argv) == 2 and sys.argv[1] == 'geo':
    query_geos = True

# set some dates
today = datetime.date.today()
start_date = datetime.date(2010, 1, 1)
quarter_dates = [datetime.date(2014, 1, 1), datetime.date(2014, 4, 1),
                 datetime.date(2014, 7, 1), datetime.date(2014, 10, 1)]
for next_quarter_start_date in quarter_dates:
    if next_quarter_start_date > today:
        break

### initialize the global model counts
contact_count = 0
client_count = 0
property_count = 0
address_count = 0
engagement_count = 0
engagement_property_count = 0
active_appraisal_count = 0
scheduled_appraisal_count = 0
active_assignment_count = 0
scheduled_assignment_count = 0
amf_count = 0
geolocation_count = 0
aos_count = 0


def pass_criteria(record):

    # filter final_delivery_date - all data after 1-1-2010
    if record.final_delivery_date is None:
        return False
    else:
        final_delivery_date = record.final_delivery_date.date()
        if final_delivery_date < start_date:
            return False

    # other bad data
    if record.client_id is None or record.client_id == 0:
        return False
    if record.job_number is None or record.date_time_stamp is None:
        return False
    if record.client_id is None or record.client_id == 0:
        return False
    if record.property_name is None:
        return False

    else:
        return True


# ---------------------------------------------------------------
# utility function for finding Employee primary keys
def find_employee(last_name, first_name):

    try:
        contact = Contact.objects.get(last_name=last_name,
                                      first_name=first_name)
    except Contact.DoesNotExist:
        try:
            contact = Contact.objects.get(last_name=last_name,
                                          nickname=first_name)
        except Contact.DoesNotExist:
            return None
    try:
        employee = Employee.objects.get(contact=contact)
        return employee

    except Employee.DoesNotExist:
        print 'Employee.DoesNotExist - '+first_name+' '+last_name
        return None


# ---------------------------------------------------------------
# utility function for finding Appraisor Employee primary keys
def find_appraisers(engagement_id):

    appraisers = {}
    details = TblAppraiserEngagementDetails.objects.\
        using('legacy').filter(engagement_id=engagement_id)
    for detail in details:
        try:
            access_appraiser = TblAppraiserMaster.objects.using('legacy').\
                get(appraiser_id=detail.appraiser_id)

        except TblAppraiserMaster.DoesNotExist:
            #print 'TblAppraiserMaster.DoesNotExist'
            continue

        # catch some name issues
        first_name = access_appraiser.first_name
        test = first_name.split()
        if len(test) == 2:  # catches middle name
            first_name = test[0]
        last_name = access_appraiser.last_name

        # handle known unassigned appraisers
        if last_name == 'Unassigned':
            if first_name == 'Atlanta':
                last_name = 'Carr'
                first_name = 'Rebecca'
            elif first_name == 'Chicago':
                last_name = 'Walden'
                first_name = 'David'
        elif last_name == 'Walden-':
            last_name = 'Walden'
            first_name = 'David'

        # find the nexus_appraiser
        nexus_appraiser = find_employee(last_name, first_name)
        if nexus_appraiser and detail.fee_base is not None:
            appraisers[nexus_appraiser] = \
                float(detail.fee_base.replace('$', '').
                      replace(',', '').
                      replace('(', '').
                      replace(')', ''))

        if nexus_appraiser is None:
            print 'nexus_appraiser not found'

    print "appraisers - "+str(appraisers)
    return appraisers


# ---------------------------------------------------------------
# utility function for finding consolidated Client name
def consolidated_client(client_name):

    consolidated_clients = ['Bank of America', 'Wells Fargo']
    for client in consolidated_clients:
        if client_name.startswith(client):
            client_name = client
    return client_name


# ---------------------------------------------------------------
# utility function for creating an Appraisal
def create_appraisal(record, engagement_property, office, create_nexus_aos):

    # set the status using final_delivery_date
    status = 'COMPLETED'
    due_date = record.final_delivery_date.date()
    if datetime.date.today() < due_date:
        status = 'IN_PROGRESS'
    if record.cancel_job == 2:
        status = 'CANCELLED'

    # import fees and dates lists
    if 'M' in record.job_number:
        occurrence_type = 'ANNUALLY'
        if record.fee_year_one is None:
            record.fee_year_one = '0'
        if record.fee_year_two is None:
            record.fee_year_two = '0'
        if record.fee_year_three is None:
            record.fee_year_three = '0'
        fees = [float(record.fee_year_one.replace('$', '').
                      replace(',', '')),
                float(record.fee_year_two.replace('$', '').
                      replace(',', '')),
                float(record.fee_year_three.replace('$', '').
                      replace(',', ''))]

        dates = [record.date_year_one,
                 record.date_year_two,
                 record.date_year_three]

    elif 'Q' in record.job_number:
        occurrence_type = 'QUARTERLY'
        fees = [record.fee_qtr_1, record.fee_qtr_2,
                record.fee_qtr_3, record.fee_qtr_4,
                record.fee_qtr_5, record.fee_qtr_6,
                record.fee_qtr_7, record.fee_qtr_8,
                record.fee_qtr_9, record.fee_qtr_10,
                record.fee_qtr_11, record.fee_qtr_12]

        dates = [record.date_qtr_1, record.date_qtr_2,
                 record.date_qtr_3, record.date_qtr_4,
                 record.date_qtr_5, record.date_qtr_6,
                 record.date_qtr_7, record.date_qtr_8,
                 record.date_qtr_9, record.date_qtr_10,
                 record.date_qtr_11, record.date_qtr_12]

    # determine fee according to due date
    if 'M' in record.job_number or 'Q' in record.job_number:

        # find this occurrence
        occurrence = 0
        for date in dates:
            if date is None:
                occurrence = None
                break
            if due_date == date.date():
                break
            occurrence += 1
        if occurrence is not None and occurrence < len(dates):
            fee = fees[occurrence]
        else:
            fee = 0
    else:  # this is a one-off job
        fee = float(record.fee.replace('$', '').replace(',', ''))
    if fee == 0:
        fee = 1.0  # for now - Appraiser requires a fee

    # determine the nexus_aos
    if create_nexus_aos:
        # ...this is the first appraisal for this nexus_engagement_property
        # set values for create_aos()
        initial_due_date = due_date
        if 'M' in record.job_number:
            years = 3
            print fees
            initial_fee = fees[0]
            update_fee = fees[1]
            quarterly_fee = 0
        elif 'Q' in record.job_number:
            years = 3
            print fees
            initial_fee = fees[0]
            update_fee = fees[3]
            quarterly_fee = fees[11]
        else:
            initial_fee = fee
            update_fee = 0
            quarterly_fee = 0
            years = 1
            occurrence_type = 'SINGLE'

        # create the aos
        create_aos(nexus_engagement_property, years,
                   initial_due_date, initial_fee, update_fee,
                   quarterly_fee, occurrence_type)

    # create the appraisal
    if due_date < next_quarter_start_date or \
            due_date < today + datetime.timedelta(weeks=5):
        try:
            # create an active appraisal
            nexus_appraisal = Appraisal(
                job_number=record.job_number,
                due_date=due_date,
                fee=fee,
                restricted=False,
                engagement_property=engagement_property,
                office=office,
                status=status,
                )
            nexus_appraisal.save()
            print 'create active appraisal - ' +\
                str(nexus_appraisal.job_number)
            global active_appraisal_count
            active_appraisal_count += 1

        except ValidationError, e:
            print 'Appraisal - ValidationError - '+str(e)
            return None
    else:
        try:
            # create a scheduled appraisal
            nexus_appraisal = ScheduledAppraisal(
                legacy_job_number=record.job_number,
                due_date=due_date,
                fee=fee,
                restricted=False,
                engagement_property=engagement_property,
                )
            nexus_appraisal.save()
            print 'create scheduled appraisal - ' +\
                str(nexus_appraisal.legacy_job_number)
            global scheduled_appraisal_count
            scheduled_appraisal_count += 1

        except ValidationError, e:
            print 'ScheduledAppraisal - ValidationError - '+str(e)
            return None

    return nexus_appraisal


# ---------------------------------------------------------------
# utility function for creating an Assignment
def create_assignment(appraisal, employee, fee, role):

    if appraisal.__class__.__name__ == 'Appraisal':

        try:
            nexus_assignment = Assignment(
                appraisal=appraisal,
                employee=employee,
                fee=fee,
                role=role,
                )
            nexus_assignment.save()
            print 'create active assignment - ' +\
                str(nexus_assignment.employee.name)
            global active_assignment_count
            active_assignment_count += 1
            return nexus_assignment

        except ValidationError, e:
            print 'Assignment - ValidationError - '+str(e)
            sys.exit(0)
            return None

    else:  # it's a ScheduledAssignment - create only one

        # check if ScheduledAssignment already exists
        try:
            nexus_assignment = ScheduledAssignment.objects.\
                get(engagement_property=appraisal.engagement_property)

        except ScheduledAssignment.DoesNotExist:

            # create the scheduled assignment
            try:
                nexus_assignment = ScheduledAssignment(
                    engagement_property=appraisal.engagement_property,
                    employee=employee,
                    fee=fee,
                    role=role,
                    )
                nexus_assignment.save()
                print 'create scheduled assignment - ' +\
                    str(nexus_assignment.employee.name)
                global scheduled_assignment_count
                scheduled_assignment_count += 1
                return nexus_assignment

            except ValidationError, e:
                print 'ScheduledAssignment - ValidationError - '+str(e)
                sys.exit(0)
                return None


# ---------------------------------------------------------------
# utility function for creating a Contact
def create_contact(access_contact, client, amf, address):

    try:
        nexus_contact = Contact(
            last_name=access_contact.contact_last_name,
            first_name=access_contact.contact_first_name,
            mobile=access_contact.contact_mobile_phone,
            email=access_contact.contact_email_address,
            phone=access_contact.contact_phone,
            address=address,
            client=client,
            amf=amf,
            )
        nexus_contact.save()
        print 'create contact - '+str(nexus_contact.name)
        global contact_count
        contact_count += 1
        return nexus_contact

    except ValidationError, e:
        print 'Contact - ValidationError - '+str(e)
        return None


# ---------------------------------------------------------------
# utility function for creating a Client
def create_client(access_client, name):

    # set client_type
    nexus_client_type = "OTHER"
    if access_client.client_type_id is not None:
        try:
            access_client_type = TblClientType.objects.using('legacy')\
                .get(client_type_id=access_client.client_type_id)
            for key, client_type in Client.CLIENT_TYPES:
                if client_type == access_client_type.client_type:
                    nexus_client_type = key
        except TblClientType.DoesNotExist:
            pass

    try:
        nexus_client = Client(name=name, client_type=nexus_client_type)
        nexus_client.save()
        print 'create client - '+str(nexus_client.name)
        global client_count
        client_count += 1
        return nexus_client

    except ValidationError, e:
        print 'Client - ValidationError - '+str(e)
        return None


# ---------------------------------------------------------------
# utility function for creating an AMF
def create_amf(name):

    try:
        nexus_amf = AMF(name=access_amf.name)
        nexus_amf.save()
        print 'create amf - '+str(nexus_amf.name)
        global amf_count
        amf_count += 1
        return nexus_amf

    except ValidationError, e:
        print 'AMF - ValidationError - '+str(e)
        return None


# ---------------------------------------------------------------
# utility function for creating a Property
def create_property(record, client):

    if record.property_name is not None:
        property_name = record.property_name.encode('ascii', 'ignore')

    # determine nexus_property_type
    nexus_property_type = 'Other'
    if record.property_type_id is not None:
        try:
            access_property_type = TblPropertyTypeListing\
                .objects.using('legacy')\
                .get(property_type_id=record.property_type_id)
            for key, property_type in Property.PROPERTY_TYPE:
                if property_type == access_property_type.property_type:
                    nexus_property_type = key.lower().title()
        except TblPropertyTypeListing.DoesNotExist:
            pass

    # determine nexus_property_subtype
    nexus_property_subtype = None
    if record.property_sub_type_id is not None:
        try:
            access_property_subtype = TblPropertySubType.objects.\
                using('legacy').get(property_sub_type_id=record.
                                    property_sub_type_id)
            for property_subtype in \
                    PROPERTY_SUBTYPE[nexus_property_type]["subtype"]:
                if property_subtype == access_property_subtype:
                    nexus_property_subtype = property_subtype
                    break
        except TblPropertySubType.DoesNotExist:
            pass

    try:
        nexus_property = Property(
            name=property_name,
            client_asset_number=record.client_asset_number,
            client=client,
            property_type=nexus_property_type,
            property_subtype=nexus_property_subtype,
            )
        nexus_property.save()
        print 'create property - '+str(nexus_property.name)
        global property_count
        property_count += 1
        return nexus_property

    except UnicodeEncodeError:
        print 'Property - UnicodeEncodeError'
        return None

    except ValidationError, e:
        print 'Property - ValidationError - '+str(e)
        return None


# ---------------------------------------------------------------
# utility function for creating an Address
def create_address(record, property):

    # filter bad address data - just leave address = None
    if record.property_address is None or \
       record.property_city is None or \
       record.property_state is None or \
       record.property_zip is None:
        return None

    latitude = None
    longitude = None
    address = record.property_address.strip().encode('ascii', 'ignore')
    city = record.property_city.strip().encode('ascii', 'ignore')
    if record.property_county is not None:
        county = record.property_county.strip()
    else:
        county = None
    state = record.property_state.strip()
    zipcode = record.property_zip.strip()

    try:
        nexus_address = Address(
            address1=address,
            address2=None,
            city=city,
            county=county,
            state=state,
            zipcode=zipcode,
            property=property,
            latitude=latitude,
            longitude=longitude,
            )
        nexus_address.save()
        if query_geos:
            fetch_geo(nexus_address)
        global address_count
        address_count += 1
        return nexus_address

    except UnicodeEncodeError:
        print 'Address - UnicodeEncodeError'

    except ValidationError, e:
        print 'Address - ValidationError - '+str(e)
        return None


# ---------------------------------------------------------------
# utility function for fetching geolocations
def fetch_geo(nexus_address):

    if nexus_address.latitude or nexus_address.longitude is None:

        address = nexus_address.address1.encode('ascii', 'ignore')
        city = nexus_address.city.encode('ascii', 'ignore')
        state = nexus_address.state
        zipcode = nexus_address.zipcode[:5]

        # this greatly increases validation
        if address.startswith('NEC'):
            address = address.replace('NEC', 'Northeast Corner')
        if address.startswith('SEC'):
            address = address.replace('SEC', 'Southeast Corner')
        if address.startswith('NWC'):
            address = address.replace('NWC', 'Northwest Corner')
        if address.startswith('SWC'):
            address = address.replace('NEC', 'Southwest Corner')

        # request limit for free is 2500 per 24hrs
        req_url_base = ('http://maps.googleapis.com/maps/api/geocode/json?'
                        'sensor=true&address=')
        try:
            req_url = req_url_base + '+{}+{}+{}+{}'.format(
                address.replace(' ', '+'),
                city.replace(' ', '+'),
                state.replace(' ', '+'),
                zipcode
                )
        except UnicodeEncodeError:
            print 'req_url - UnicodeEncodeError'
            return 'UnicodeEncodeError'

        # make the request
        req = urllib2.Request(req_url)
        try:
            response = urllib2.urlopen(req)
            location_dict = json.loads(response.read())
            if location_dict["status"] == 'OK':
                geom = location_dict['results'][0]['geometry']
                location = geom['location']
                nexus_address.latitude = location['lat']
                nexus_address.longitude = location['lng']
                nexus_address.save()
                print 'fetch geolocation - '+nexus_address.address1
                global geolocation_count
                geolocation_count += 1

            elif location_dict["status"] == 'OVER_QUERY_LIMIT':
                print 'status: OVER_QUERY_LIMIT'
            else:
                print 'status: ZERO_RESULTS: '+req_url

        except urllib2.HTTPError:
            print 'urllib2.HTTPError: '+req_url
        except urllib2.URLError:
            print 'urllib2.URLError: '+req_url

        return location_dict["status"]


# ---------------------------------------------------------------
# utility function for creating an Engagement
def create_engagement(record, nexus_property, nexus_client,
                      nexus_client_contact, nexus_amf, nexus_amf_contact):

    try:
        nexus_engagement = Engagement(
            notes=record.general_comments,
            property=nexus_property,
            client=nexus_client,
            client_contact=nexus_client_contact,
            amf=nexus_amf,
            amf_contact=nexus_amf_contact,
            legacy=True,
            )
        nexus_engagement.save()
        print 'create engagement - '+str(nexus_engagement.id)
        global engagement_count
        engagement_count += 1
        return nexus_engagement

    except ValidationError, e:
        print 'Engagement - ValidationError - '+str(e)
        return None


# ---------------------------------------------------------------
# utility function for creating an EngagementProperty
def create_engagement_property(nexus_engagement, nexus_property,
                               nexus_office):

    try:
        nexus_engagement_property = EngagementProperty(
            engagement=nexus_engagement,
            property=nexus_property,
            office=nexus_office,
            )
        nexus_engagement_property.save()
        print 'create engagement_property - '+str(nexus_engagement_property.id)
        global engagement_property_count
        engagement_property_count += 1
        return nexus_engagement_property

    except ValidationError, e:
        print 'EngagementProperty - ValidationError - '+str(e)
        return None


# ---------------------------------------------------------------
# utility function for creating an AppraisalOccurrenceSchedule
def create_aos(nexus_engagement_property, years, initial_due_date,
               initial_fee, update_fee, quarterly_fee, occurrence_type):

    try:
        nexus_aos = AppraisalOccurrenceSchedule(
            engagement_property=nexus_engagement_property,
            years=years,
            initial_due_date=initial_due_date,
            initial_fee=initial_fee,
            update_fee=update_fee,
            quarterly_fee=quarterly_fee,
            occurrence_type=occurrence_type,
            )
        nexus_aos.save()
        print 'create aos - '+str(nexus_engagement_property.id)
        #print 'aos: '+nexus_aos.__dict__
        global aos_count
        aos_count += 1
        return nexus_aos

    except ValidationError, e:
        print 'AppraisalOccurrenceSchedule - ValidationError - '+str(e)
        return None


# ---------------------------------------------------------------
# utility function for retrieving the EngagementProperty
def get_engagement_property(record):

    engagement_number = record.job_number
    if 'Q' in record.job_number or 'M' in record.job_number:
        engagement_number = engagement_number[:7]
    if 'Q' in record.job_number:
        initial_job_number = engagement_number+'Q1'
    elif 'M' in record.job_number:
        initial_job_number = engagement_number+'M1'
    else:
        initial_job_number = engagement_number
    try:
        initial_appraisal = Appraisal.objects.\
            get(job_number=initial_job_number)
        nexus_engagement_property = initial_appraisal.engagement_property
    except Appraisal.DoesNotExist:
        try:
            initial_appraisal = ScheduledAppraisal.objects.\
                get(legacy_job_number=initial_job_number)
            nexus_engagement_property = initial_appraisal.engagement_property
        except ScheduledAppraisal.DoesNotExist:
            # no initial appraisal exists
            nexus_engagement_property = None
    return nexus_engagement_property


#############################################################################
# ---------------------------------------------------------------
# check for existing appraisal and its related models
#if __name__ == "__main__": - main loop
print '... check for existing records'
for record in TblEngagementLetter.objects.using('legacy').all():

    # apply data filters
    if not pass_criteria(record):
        continue

    # check if nexus_engagement_property already exists
    nexus_engagement_property = get_engagement_property(record)
    nexus_engagement = nexus_engagement_property.engagement\
        if nexus_engagement_property else None

    # check if this appraisal already exists
    try:
        nexus_appraisal = Appraisal.objects.get(job_number=record.job_number)
        print 'active appraisal exists - '+nexus_appraisal.job_number

        # update with the correct nexus_engagement_property
        if nexus_engagement_property:
            nexus_appraisal.engagement_property = nexus_engagement_property
            nexus_appraisal.save()

        continue  # appraisal already exists

    except Appraisal.DoesNotExist:

        # check if this appraisal already exists as scheduled appraisal
        try:
            nexus_appraisal = ScheduledAppraisal.objects.\
                get(legacy_job_number=record.job_number)
            print 'scheduled appraisal exists - ' +\
                nexus_appraisal.legacy_job_number

            # update with the correct nexus_engagement_property
            if nexus_engagement_property:
                nexus_appraisal.engagement_property = nexus_engagement_property
                nexus_appraisal.save()

            continue  # scheduled appraisal already exists

        except ScheduledAppraisal.DoesNotExist:
            pass  # keep going - create the appraisal

        # determine the nexus_client
        try:
            access_client = TblClientMaster.objects.using('legacy').\
                get(client_id=record.client_id)
        except TblClientMaster.DoesNotExist:
            print 'TblClientMaster.DoesNotExist'
            continue
        print 'legacy client: '+access_client.name
        client_name = consolidated_client(access_client.name)
        try:
            nexus_client = Client.objects.get(name=client_name)
            print 'existing client - '+nexus_client.name
        except Client.DoesNotExist:
            #print 'Client.DoesNotExist - '+client_name
            nexus_client = create_client(access_client, client_name)
        print 'nexus client: '+nexus_client.name

        # determine the nexus_property
        print 'legacy property: '+record.property_name
        try:
            nexus_property = Property.objects.get(name=record.property_name)
            print 'existing property - '+nexus_property.name
        except Property.DoesNotExist:

            # create the property and address - one-to-one
            # even though there are duplicate addresses
            nexus_property = create_property(record, nexus_client)

            # create address
            nexus_address = create_address(record, nexus_property)
        print 'nexus property: '+nexus_property.name

        # set the client address for contacts
        street_address = access_client.address_1
        if access_client.address_2 is not None:
            street_address += access_client.address_2
        address = street_address + ', '
        if access_client.city is not None:
            address += access_client.city + ', '
        if access_client.state is not None:
            address += access_client.state + ' '
        if access_client.zip is not None:
            address += access_client.zip

        # add client contacts - need to loop because
        # all access_client.contact_person_id == 0
        nexus_client_contact = None
        for access_client_contact in TblClientContactList.objects.\
                using('legacy').\
                filter(client_id=access_client.client_id):
            if access_client_contact.contact_last_name is None:
                continue

            try:
                nexus_client_contact = Contact.objects.get(
                    last_name=access_client_contact.contact_last_name,
                    first_name=access_client_contact.contact_first_name,
                    )
                'existing client contact - '+nexus_client_contact.name

            except Contact.DoesNotExist:

                # create the nexus_client_contact
                nexus_client_contact = create_contact(
                    access_client_contact,
                    nexus_client,
                    None, address)

        # handle the AMF
        nexus_amf = None
        nexus_amf_contact = None
        if record.appraisal_mgt_firm_id:

            try:
                access_amf = TblAppraisalMgtFirmMaster.\
                    objects.using('legacy').\
                    get(firm_id=record.appraisal_mgt_firm_id)

            except TblAppraisalMgtFirmMaster.DoesNotExist:
                #print 'TblAppraisalMgtFirmMaster.DoesNotExist'
                pass

            if access_amf:
                nexus_amf = None
                nexus_amf_contact = None
                try:
                    nexus_amf = AMF.objects.get(name=access_amf.name)
                    'existing amf - '+nexus_amf.name
                except AMF.DoesNotExist:

                    # create the nexus_amf
                    nexus_amf = create_amf(access_amf)
                    if nexus_amf:

                        # create the AMF contact
                        # set the amf address
                        street_address = access_amf.address_1
                        if access_amf.address_2 is not None:
                            street_address += access_amf.address_2
                        address = street_address + ', ' +\
                            access_amf.city + ', ' +\
                            access_amf.state + ' ' +\
                            access_amf.zip

                        # add amf contacts - need to loop because
                        # all access_amf.contact_id == 0
                        for access_amf_contact in TblAppraisalFirmContactList.\
                                objects.using('legacy').\
                                filter(firm_id=access_amf.firm_id):
                            if access_amf_contact.contact_last_name is None:
                                continue

                            try:
                                nexus_amf_contact = Contact.objects.get(
                                    last_name=access_amf_contact.
                                    contact_last_name,
                                    first_name=access_amf_contact.
                                    contact_first_name,
                                    )
                                print 'existing amf contact - ' + \
                                    nexus_amf_contact.name

                            except Contact.DoesNotExist:

                                # create the nexus_amf_contact
                                nexus_amf_contact = create_contact(
                                    access_amf_contact, None,
                                    nexus_amf, address)

        # determine the manager employee
        nexus_manager = None
        try:
            access_manager = TblProjectManager.objects.using('legacy').\
                get(project_manager_id=record.project_manager_id)
            nexus_manager = find_employee(access_manager.last_name,
                                          access_manager.first_name)
        except TblProjectManager.DoesNotExist:
            pass  # None

        # determine the Office
        nexus_office = None
        if nexus_manager:
            nexus_office = nexus_manager.office

        # create nexus_engagement if None
        create_nexus_aos = False
        if nexus_engagement_property is None:
            nexus_engagement = create_engagement(record,
                                                 nexus_property,
                                                 nexus_client,
                                                 nexus_client_contact,
                                                 nexus_amf,
                                                 nexus_amf_contact
                                                 )

            # create the nexus_engagement_property
            nexus_engagement_property = create_engagement_property(
                nexus_engagement, nexus_property, nexus_office)
            create_nexus_aos = True

        # appraisal does not exist - create it (active or scheduled)
        nexus_appraisal = create_appraisal(record,
                                           nexus_engagement_property,
                                           nexus_office,
                                           create_nexus_aos)

        # create the nexus_manager assignment
        if nexus_manager:
            nexus_assignment = create_assignment(nexus_appraisal,
                                                 nexus_manager,
                                                 0.0,
                                                 Role.MANAGER)

        # create the Appraiser Assignments - returns a dict
        appraisers = find_appraisers(record.engagement_id)
        if len(appraisers) == 0:

            # catch known unassigned appraisals
            if datetime.date.today() < nexus_appraisal.due_date:
                print 'unassigned: '+record.job_number

            if record.job_number == '14-7010Q1' or\
                    record.job_number == '14-7010Q2':
                appraiser = find_employee('Gathman', 'Michael')
                appraisers[appraiser] = nexus_appraisal.fee
            elif record.job_number == '14-8532':
                appraiser = find_employee('Heydweiller', 'Paul')
                appraisers[appraiser] = nexus_appraisal.fee
            elif nexus_manager:  # simply - unassigned
                appraiser = nexus_manager
                appraisers[appraiser] = nexus_appraisal.fee

        for appraiser, appraiser_fee in appraisers.items():
            #print str(appraiser)
            nexus_assignment = create_assignment(nexus_appraisal,
                                                 appraiser,
                                                 appraiser_fee,
                                                 Role.APPRAISER)

    print '----------------------------'

print
print '--- new records added ---'
print 'engagement_count: '+str(engagement_count)
print 'engagement_property_count: '+str(engagement_property_count)
print 'aos_count: '+str(aos_count)
print 'active_appraisal_count: '+str(active_appraisal_count)
print 'scheduled_appraisal_count: '+str(scheduled_appraisal_count)
print 'active_assignment_count: '+str(active_assignment_count)
print 'scheduled_assignment_count: '+str(scheduled_assignment_count)
print 'contact_count: '+str(contact_count)
print 'client_count: '+str(client_count)
print 'amf_count: '+str(amf_count)
print 'property_count: '+str(property_count)
print 'address_count: '+str(address_count)
print 'geolocation_count: '+str(geolocation_count)
print
