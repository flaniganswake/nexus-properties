#! /usr/bin/env python
import os
import sys
import csv
import json
import logging
import datetime
import StringIO

sys.path.insert(0, os.getcwd().replace('/scripts', ''))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "nexus.settings")

from nexus.data import states, employee_data


if __name__ != "__main__":
    sys.exit(1)

log = logging.getLogger('nexus')


# generate timestamp file
file = open("nexus/fixtures/.timestamp", "w")
current_time = datetime.datetime.now()
file.write(str(current_time))
file.close()

### initialize the model counts and lists
user_count = 0
nexus_user_list = []
contact_count = 0
nexus_contact_list = []
employee_count = 0
nexus_employee_list = []
office_count = 0
nexus_office_list = []
license_count = 0
nexus_license_list = []
license_req_count = 0
nexus_license_req_list = []
zipcode_count = 0
zipcode_list = []


# ---------------------------------------------------------------
# ---- create a test Employee 'Dewey Decimal'
print '... creating test employee'

# create the test User
nexus_user = {
    "username": 'dewey',
    "last_name": "Decimal",
    "first_name": "Dewey",
    #"password": 'test',
    # run ./manage.py dumpdata auth.User to get hashed password
    "password": "pbkdf2_sha256$12000$zBhfx14P3Fje$l99Lp0ZHzcDYs+"
                "YwU9acsIEzFZ4iEnqBdckWWoYqb6s=",
    "is_superuser": True,
    "is_staff": True,
}
nexus_user_list.append(nexus_user)
user_count += 1

# create the Employee
nexus_employee = {
    "ssn": "111-11-1111",
    "dob": "11/1/2011",
    "title": "Principal",
    "office": 3,
    "split": 33,
    "is_procuring_agent": True,
    "is_inspector": True,
    "is_reviewer": True,
    "is_engagement_manager": True,
    "is_certified_general": True,
    "certifications": "MAI",
    "user": user_count,
}
nexus_employee_list.append(nexus_employee)
employee_count += 1

# create the Contact
nexus_contact = {
    "last_name": "Decimal",
    "first_name": "Dewey",
    "nickname": "The Dewster",
    "salutation": "Mr.",
    "mobile": "312-555-5555",
    "email": "dev@npvadvisors.com",
    "phone": "312-555-5555",
    "address": "555 Chicago Ave., Chicago, IL 60610",
    "client": None,
    "employee": employee_count,
    "amf": None,
}
nexus_contact_list.append(nexus_contact)
contact_count += 1


# ---------------------------------------------------------------
# populate Employees
print '... creating employees'

# parse data/qb_employees.csv to build csv_employees dictionary
csv_employees = {}
line_count = 0
lines = [line.strip() for line in open('data/qb_employees.csv')]
for line in lines:
    if len(line) == 1:
        break
    line_count += 1
    if line_count == 1:  # skip first line - column headings
        continue

    f = StringIO.StringIO(line)
    reader = csv.reader(f, delimiter=',')
    for row in reader:

        # clean/prepare data
        csv_name = row[0]
        #csv_name = row[0].replace('III', '').\
        #    replace('Jr.', '').\
        #    replace('Kramer ', '')
        csv_name = csv_name.split()
        last_name = csv_name[0].replace(',', '')
        first_name = csv_name[1].replace(',', '')
        full_name = first_name + " " + last_name
        address1 = row[6].replace(row[7], '').replace(row[8], '').\
            replace(row[9], '').replace(',', '').strip()
        city = row[7]
        state = row[8]
        zipcode = row[9]
        csv_employees[full_name] = {
            "salutation": row[2],
            "phone": row[3],
            "ssn": row[5],
            "email": row[10],
            "dob": row[11],
            "mobile": row[12],
            "address": address1+', '+city+', '+state+' '+zipcode,
        }

# load employee_data
for full_name in employee_data:

    name = full_name.split()
    first_name = name[0]
    last_name = name[1]
    if len(name) == 3:
        last_name += " "+name[2]  # handle Jr., III, etc.

    # initialize
    username = None
    title = None
    office_name = None
    nickname = None
    split = None
    is_procuring_agent = False
    is_engagement_manager = False
    is_certified_general = False
    is_inspector = False
    is_reviewer = False

    # set if exists
    if 'username' in employee_data[full_name]:
        username = employee_data[full_name]['username']
    if 'title' in employee_data[full_name]:
        title = employee_data[full_name]['title']
    if 'office' in employee_data[full_name]:
        office_name = employee_data[full_name]['office']
    if office_name is not None:
        if office_name == 'Chicago':
            office_pk = 1
        elif office_name == 'Atlanta':
            office_pk = 2
        else:
            office_pk = 3  # default 'Chicago'
    if 'nickname' in employee_data[full_name]:
        nickname = employee_data[full_name]["nickname"]
    if 'split' in employee_data[full_name]:
        split = employee_data[full_name]["split"]
    if 'is_procuring_agent' in employee_data[full_name]:
        is_procuring_agent = \
            employee_data[full_name]["is_procuring_agent"]
    if 'is_engagement_manager' in employee_data[full_name]:
        is_engagement_manager = \
            employee_data[full_name]["is_engagement_manager"]
    if 'is_certified_general' in employee_data[full_name]:
        is_certified_general = \
            employee_data[full_name]["is_certified_general"]
    if 'is_inspector' in employee_data[full_name]:
        is_inspector = employee_data[full_name]["is_inspector"]
    if 'is_reviewer' in employee_data[full_name]:
        is_reviewer = employee_data[full_name]["is_reviewer"]

    # admin user permissions
    is_superuser = False
    if 'is_superuser' in employee_data[full_name]:
        is_superuser = employee_data[full_name]["is_superuser"]

    # add more employee data is available
    if full_name in csv_employees:
        salutation = csv_employees[full_name]["salutation"]
        phone = csv_employees[full_name]["phone"]
        ssn = csv_employees[full_name]["ssn"]
        email = csv_employees[full_name]["email"]
        dob = csv_employees[full_name]["dob"]
        mobile = csv_employees[full_name]["mobile"]
        address = csv_employees[full_name]["address"]
    else:
        salutation = None
        phone = None
        ssn = None
        email = None
        dob = None
        mobile = None
        address = None

    # create the User
    nexus_user = {
        "username": username,
        "last_name": last_name,
        "first_name": first_name,
        "password": 'temp',
        "is_superuser": is_superuser,
        "is_staff": True,
    }
    nexus_user_list.append(nexus_user)
    user_count += 1

    # create the Employee
    nexus_employee = {
        "ssn": ssn,
        "dob": dob,
        "title": title,
        "office": office_pk,
        "split": split,
        "is_procuring_agent": is_procuring_agent,
        "is_inspector": is_inspector,
        "is_reviewer": is_reviewer,
        "is_engagement_manager": is_engagement_manager,
        "is_certified_general": is_certified_general,
        "certifications": None,  # set in License fixtures
        "user": user_count,
    }
    nexus_employee_list.append(nexus_employee)
    employee_count += 1

    # create the Contact
    nexus_contact = {
        "last_name": last_name,
        "first_name": first_name,
        "nickname": nickname,
        "salutation": salutation,
        "mobile": mobile,
        "email": email,
        "phone": phone,
        "address": address,
        "client": None,
        "employee": employee_count,
        "amf": None,
    }
    nexus_contact_list.append(nexus_contact)
    contact_count += 1


# ---------------------------------------------------------------
# utility function for finding Employee primary keys
def find_employee(last_name, first_name):

    nexus_employee_pk = None
    for nexus_contact in nexus_contact_list:
        if nexus_contact["last_name"] == last_name:
            if nexus_contact["first_name"] == first_name or \
                    nexus_contact["nickname"] == first_name:
                nexus_employee_pk = nexus_contact["employee"]
                break
    return nexus_employee_pk


# ---------------------------------------------------------------
# populate Offices
print '... creating offices'

# loop thru office_list
office_list = ["Chicago", "Atlanta", "Newport Beach", ]
for location in office_list:

    default_engagement_procurer_pk = None
    default_engagement_principal_pk = None
    default_engagement_researcher_pk = None
    if location == 'Chicago':
        default_engagement_procurer_pk = find_employee('Walden', 'David')
        default_engagement_principal_pk = find_employee('Walden', 'David')
        default_engagement_researcher_pk = find_employee('Forbes', 'Phillip')
    elif location == 'Atlanta':
        default_engagement_procurer_pk = find_employee('Carr', 'Rebecca')
        default_engagement_principal_pk = find_employee('Carr', 'Rebecca')
        default_engagement_researcher_pk = find_employee('Pierce', 'Keith')
    else:
        default_engagement_procurer_pk = find_employee('Strohl', 'Keith')
        default_engagement_principal_pk = find_employee('Strohl', 'Keith')
        default_engagement_researcher_pk = find_employee('Wang', 'Ching-Ting')

    nexus_office = {
        "name": location,
        "contact": None,  # for now
        "default_engagement_procurer": default_engagement_procurer_pk,
        "default_engagement_principal": default_engagement_principal_pk,
        "default_engagement_researcher": default_engagement_researcher_pk,
    }
    office_count += 1
    nexus_office_list.append(nexus_office)


# ---------------------------------------------------------------
# utility function used for extracting License data
def convert_date(date_string):  # example: December 31, 2013

    # needed for generating fixtures from csv data
    if len(date_string) == 0:
        return None
    months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December", ]
    date = date_string.split()
    ndx = 0
    for month in months:
        if date[0].strip(".") in months[ndx]:
            if ndx < 9:
                month_num = '0' + str(ndx+1)
            else:
                month_num = str(ndx + 1)
            break
        ndx = ndx + 1
    day = date[1].strip(",")
    year = date[2]
    return year+"-"+month_num+"-"+day


# ---------------------------------------------------------------
# populate Licenses
print '... creating licenses'

csv_file = open("data/employee_licenses.csv", "w")
columns = "Name, Certifications, State, Number, Expiration Date,\n"
csv_file.write(columns)

line_count = 0
new_employee = False
lines = [line.strip() for line in open('data/employee_licenses.dat')]
for line in lines:

    # employee blocks separated by blank lines
    if line == '':
        new_employee = True
        continue

    if new_employee:  # extract name and certifications
        # sample: David Walden, CRE, FRIC, MAI
        line = line.split('/')
        name_line = line[0].split()
        first_name = name_line[0]
        last_name = name_line[1]
        employee_pk = find_employee(last_name, first_name)
        certifications = line[1].strip() if len(line[1]) > 0 else None

        # csv file
        csv_name_line = first_name+" "+last_name+","
        if certifications is not None:
            csv_name_line = csv_name_line+"\""+certifications+"\","

        # update employee.certifications
        count = 0
        for employee in nexus_employee_list:
            count += 1
            if employee_pk == count:
                employee["certifications"] = certifications
                if certifications is not None and 'MAI' in certifications:
                    employee["is_certified_general"] = True

        new_employee = False

    else:  # create a license
        # use current employee_pk for license
        # sample: Arizona 31940   April 30, 2015
        line = line.split('/')
        state = str(line[0]).strip()
        number = str(line[1]).strip()
        expiration_date = str(line[2]).strip()
        expiration_date = convert_date(expiration_date)

        # csv file
        csv_line = csv_name_line + state + "," + number + "," + "\"" + \
            str(expiration_date)+"\","
        csv_line = csv_line+"\n"
        csv_file.write(csv_line)
        csv_line = ""

        # create the license
        nexus_license = {
            "employee": employee_pk,
            "state": state,
            "number": number,
            "expiration_date": expiration_date,
        }
        nexus_license_list.append(nexus_license)
        license_count += 1

csv_file.close()


# ---------------------------------------------------------------
# populate LicenseRequirements
print '... creating license requirements'

# create one for District of Cloumbia - not in provided data
nexus_license_req = {
    "state": 'DC',
    "temp_certification_required": True,
    "temp_limit": None,
    "inspector_temp_required": True,
    "signer_temp_required": True,
    "temp_fee": None,
    "perm_fee": None,
    "source": None,
    "contact": None,
}
nexus_license_req_list.append(nexus_license_req)
license_req_count += 1

line_count = 0
lines = [line.strip() for line in open('data/state_license_quals.csv')]
for line in lines:

    if len(line) == 1:
        break
    line_count += 1
    if line_count == 1:  # skip first line - column headings
        continue

    f = StringIO.StringIO(line)
    reader = csv.reader(f, delimiter=',')
    for row in reader:

        if row[0] == '':
            break  # last row
        else:
            state_name = row[0].replace('(Form Online)', '').\
                replace('(Online Portal)', '').strip()
        for key in states:
            if state_name == states[key]:
                state = key
                break
            else:
                state = None  # bad data

        # create the nexus_license_req
         # new fields... only test values for now
        temp_certification_required = True if 'CG' in row[1] else False
        temp_limit = row[2][:1]
        temp_limit = int(temp_limit) if temp_limit.isdigit() else None
        inspector_temp_required = True if 'yes' in row[3] else False
        signer_temp_required = True if 'yes' in row[4] else False
        temp_fee = None
        perm_fee = None
        nexus_license_req = {
            "state": state,
            "temp_certification_required": temp_certification_required,
            "temp_limit": temp_limit,
            "inspector_temp_required": inspector_temp_required,
            "signer_temp_required": signer_temp_required,
            "temp_fee": temp_fee,
            "perm_fee": perm_fee,
            "source": None,
            "contact": None,
        }
        nexus_license_req_list.append(nexus_license_req)
        license_req_count += 1


# get more data from data/state_license_info.csv
# add source and contact to nexus_license_req's
lines = [line.strip() for line in open('data/state_license_info.csv')]
line_count = 0
for line in lines:
    f = StringIO.StringIO(line)
    reader = csv.reader(f, delimiter=',')
    line_count += 1
    if line_count == 1:
        for row in reader:
            state_name = row[0]
            for key in states:
                if state_name.lower() == states[key].lower():
                    state = key
                    break
    elif line_count == 2:
        for row in reader:
            contact_name = row[1]
            contact_name = contact_name.split(',')
            full_name = contact_name[0]
            #title = contact_name[1] if len(contact_name) == 2 else None
            full_name = full_name.split()
            first_name = full_name[0]
            last_name = full_name[1] if len(full_name) == 2 else None
    elif line_count == 3:
        for row in reader:
            email = row[1]
    elif line_count == 5:
        for row in reader:
            address1 = row[2]
            source = row[6]
    elif line_count == 6:
        for row in reader:
            address2 = row[2]
            phone = row[6]
    elif line_count == 7:
        for row in reader:
            city = row[2]
            fax = row[6]
    elif line_count == 9:
        for row in reader:
            zipcode = row[2]
    elif line_count == 10:
        line_count = 0

        # create the Contact
        address = address1+', '+address2+', '+city+', '+state+' '+zipcode
        nexus_contact = {
            "last_name": last_name,
            "first_name": first_name,
            "nickname": None,
            "salutation": None,
            "mobile": mobile,
            "email": email,
            "phone": phone,
            "address": address,
            "client": None,
            "employee": None,
            "amf": None,
        }
        nexus_contact_list.append(nexus_contact)
        contact_count += 1
        #print '---------------'
        #print str(nexus_contact)

        # update the LicenseRequirements
        for nexus_license_req in nexus_license_req_list:
            if nexus_license_req["state"] == state:
                nexus_license_req["source"] = source
                nexus_license_req["contact"] = contact_count
                break
    else:
        continue

# ---------------------------------------------------------------
# populate Zipcodes from the database file
print '... creating zipcodes'

# read the lines into a list
lines = [line.strip() for line in open('data/z5llc.txt')]
for line in lines:
    if len(line) == 1:
        break
    line = line.replace("\"", "")
    line = line.split(',')
    zip_dict = {
        "city": line[0],
        "state": line[1],
        "zipcode": line[2],
        "areacode": line[3],
        "fips": line[4],
        "county": line[5],
        "timezone": line[6],
        "dst": line[7],
        "latitude": line[8],
        "longitude": line[9],
        "dtype": line[10],
        }
    zipcode_list.append(zip_dict)
    zipcode_count += 1

### build the json fixtures
print
print "writing json fixtures..."

# user.json
nexus_users = [
    {
        "model": "auth.user",
        "pk": count,
        "fields": {
            "username": item["username"],
            "first_name": item["first_name"],
            "last_name": item["last_name"],
            "password": item["password"],
            "is_superuser": item["is_superuser"],
            "is_staff": item["is_staff"],
        }
    } for count, item in enumerate(nexus_user_list, 1)]
print '... users ' + str(len(nexus_user_list))
nexus_users = json.dumps(nexus_users, indent=4, sort_keys=True)
file = open("nexus/fixtures/user.json", "w")
file.write(nexus_users)
file.close()

# employee.json
nexus_employees = [
    {
        "model": "nexus.Employee",
        "pk": count,
        "fields": {
            "ssn": item["ssn"],
            "dob": item["dob"],
            "title": item["title"],
            "office": item["office"],
            "split": item["split"],
            "is_procuring_agent": item["is_procuring_agent"],
            "is_inspector": item["is_inspector"],
            "is_reviewer": item["is_reviewer"],
            "is_engagement_manager": item["is_engagement_manager"],
            "is_certified_general": item["is_certified_general"],
            "certifications": item["certifications"],
            "user": item["user"],
        }
    } for count, item in enumerate(nexus_employee_list, 1)]
print '... employees ' + str(employee_count)
json_nexus_employees = json.dumps(nexus_employees, indent=4, sort_keys=True)
file = open("nexus/fixtures/employee.json", "w")
file.write(json_nexus_employees)
file.close()

# office.json
nexus_offices = [
    {
        "model": "nexus.Office",
        "pk": count,
        "fields": {
            "name": item["name"],
            "contact": item["contact"],
            "default_engagement_procurer":
            item["default_engagement_procurer"],
            "default_engagement_principal":
            item["default_engagement_principal"],
            "default_engagement_researcher":
            item["default_engagement_researcher"],
        }
    } for count, item in enumerate(nexus_office_list, 1)]
print '... offices ' + str(office_count)
json_nexus_offices = json.dumps(nexus_offices, indent=4, sort_keys=True)
file = open("nexus/fixtures/office.json", "w")
file.write(json_nexus_offices)
file.close()

# license.json
nexus_licenses = [
    {
        "model": "nexus.License",
        "pk": count,
        "fields": {
            "employee": item["employee"],
            "state": item["state"],
            "number": item["number"],
            "expiration_date": item["expiration_date"],
        }
    } for count, item in enumerate(nexus_license_list, 1)]
print '... licenses ' + str(license_count)
json_nexus_licenses = json.dumps(nexus_licenses, indent=4, sort_keys=True)
file = open("nexus/fixtures/license.json", "w")
file.write(json_nexus_licenses)
file.close()

# license_requirements.json
nexus_license_reqs = [
    {
        "model": "nexus.LicenseRequirements",
        "pk": count,
        "fields": {
            "state": item["state"],
            "temp_certification_required": item["temp_certification_required"],
            "temp_limit": item["temp_limit"],
            "inspector_temp_required": item["inspector_temp_required"],
            "signer_temp_required": item["signer_temp_required"],
            "temp_fee": item["temp_fee"],
            "perm_fee": item["perm_fee"],
            "source": item["source"],
            "contact": item["contact"],
        }
    } for count, item in enumerate(nexus_license_req_list, 1)]
print '... license requirements ' + str(license_req_count)
json_nexus_license_reqs = json.dumps(nexus_license_reqs, indent=4,
                                     sort_keys=True)
file = open("nexus/fixtures/license_requirements.json", "w")
file.write(json_nexus_license_reqs)
file.close()

# contact.json
nexus_contacts = [
    {
        "model": "nexus.Contact",
        "pk": count,
        "fields": {
            "last_name": item["last_name"],
            "first_name": item["first_name"],
            "nickname": item["nickname"],
            "salutation": item["salutation"],
            "mobile": item["mobile"],
            "email": item["email"],
            "phone": item["phone"],
            "address": item["address"],
            "employee": item["employee"],
            "client": item["client"],
            "amf": item["amf"],
        }
    } for count, item in enumerate(nexus_contact_list, 1)]
print '... contacts ' + str(contact_count)
json_nexus_contacts = json.dumps(nexus_contacts, indent=4, sort_keys=True)
file = open("nexus/fixtures/contact.json", "w")
file.write(json_nexus_contacts)
file.close()

# zipcode.json
zipcodes = [
    {
        "model": "nexus.Zipcode",
        "pk": count,
        "fields": {
            "city": item["city"],
            "state": item["state"],
            "zipcode": item["zipcode"],
            "areacode": item["areacode"],
            "fips": item["fips"],
            "county": item["county"],
            "timezone": item["timezone"],
            "dst": item["dst"],
            "latitude": item["latitude"],
            "longitude": item["longitude"],
            "dtype": item["dtype"],
            }
    } for count, item in enumerate(zipcode_list, 1)]
print '... zipcodes ' + str(zipcode_count)
json_nexus_zips = json.dumps(zipcodes, indent=4, sort_keys=True)
file = open("nexus/fixtures/zipcode.json", "w")
file.write(json_nexus_zips)
file.close()
