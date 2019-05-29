#! /usr/bin/env python
import sys
import os

sys.path.insert(0, os.getcwd().replace('/scripts', ''))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "nexus.settings")

from nexus.models import Employee

if __name__ != "__main__":
    sys.exit(1)

for employee in Employee.objects.all():

    employee.ssn = ''

    if employee.title == 'Programmer' or employee.title == 'Admin':
        employee.title = 'Support Staff'
    if employee.title == 'Research':
        employee.title = 'Intern Research'
    if employee.title == 'Advisory':
        employee.title = 'Associate'

    employee.save()
