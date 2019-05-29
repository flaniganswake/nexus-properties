from django.contrib import admin

from models import (Contact, AMF,
                    Client, Portfolio,
                    Employee,
                    Office,
                    Property,
                    Address,
                    License, TempLicense,
                    LicenseRequirements)


class ContactAdmin(admin.ModelAdmin):
    list_display = ('last_name',
                    'first_name',
                    'salutation',
                    'email',
                    'employee',
                    'client',
                    'amf')
admin.site.register(Contact, ContactAdmin)


class ContactInline(admin.TabularInline):
    model = Contact


class AMFAdmin(admin.ModelAdmin):
    inlines = (ContactInline, )
admin.site.register(AMF, AMFAdmin)


class ClientAdmin(admin.ModelAdmin):
    list_display = ('name',
                    'client_type',
                    'requirements_url',
                    'appraiser_must_sign',
                    'appraiser_must_inspect',
                    'invoice_delivery',
                    'report_delivery',)
    inlines = (ContactInline, )
admin.site.register(Client, ClientAdmin)


class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('name', 'client_contact', 'notes', )
admin.site.register(Portfolio, PortfolioAdmin)


class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('contact',
                    'title',
                    'office',
                    'is_certified_general',
                    'is_procuring_agent',
                    'is_inspector',
                    'is_reviewer',
                    'is_engagement_manager')
    exclude = ('ssn', 'dob', 'salary', 'manager')
    inlines = (ContactInline, )
admin.site.register(Employee, EmployeeAdmin)


class OfficeAdmin(admin.ModelAdmin):
    list_display = ('name',)
    exclude = ('contact',)
admin.site.register(Office, OfficeAdmin)


class PropertyAdmin(admin.ModelAdmin):
    list_display = ('name',
                    'client_asset_number',
                    'portfolio',
                    'property_type',
                    'property_subtype')
    exclude = ['contact']
admin.site.register(Property, PropertyAdmin)


class AddressAdmin(admin.ModelAdmin):
    list_display = ('address1',
                    'address2',
                    'city',
                    'county',
                    'state',
                    'zipcode',
                    'property')
admin.site.register(Address, AddressAdmin)


class LicenseAdmin(admin.ModelAdmin):
    list_display = ('number',
                    'state',
                    'employee',
                    'issue_date',
                    'expiration_date')
admin.site.register(License, LicenseAdmin)


class TempLicenseAdmin(admin.ModelAdmin):
    list_display = ('number',
                    'state',
                    'employee',
                    'issue_date',
                    'expiration_date')
admin.site.register(TempLicense, TempLicenseAdmin)


admin.site.register(LicenseRequirements)
