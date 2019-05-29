from django.conf import settings


client_types = { '3':'Pension Fund', '4':'Bank', '5':'Conduit', '6':'Life Company', '7':'Other', '8':'Corporate', '9':'Developer', '10':'Private Investor', '11':'Hedge Fund', '12':'Law Firm', }

job_status = { '13':'On Hold', '14':'Cancelled', '15':'Active', '16':'Completed', }

property_types = { '3':'Industrial', '4':'Office', '5':'Multifamily', '7':'Hospitality', '8':'Land', '11':'Retail', '12':'Other', '24':'Single Family', '25':'Special Purpose', }

property_subtypes = { '4':'CBD', '5':'Suburban', '6':'Limited Service', '7':'Full Service', '8':'Retail', '9':'Industrial', '10':'Multi-family', '11':'OfficeMid/High-Rise', '12':'Bulk', '13':'Warehouse/Distribution', '14':'Flex/R&D', '15':'Regional Mall', '16':'Lifestyle Center', '17':'Community', '18':'Neighborhood', '19':'Strip', '20':'Freestanding', '23':'NEED TO FIX', '24':'Apartments', '25':'Condominiums', '26':'Net-Lease', '27':'Power', '28':'Urban', '30':'Mixed-Use', '31':'Storage', '32':'Golf Course', '33':'Commercial', '34':'Land', '35':'School', '36':'Outlet', '37':'Manufacturing', '38':'Auto Dealership', '39':'Medical Office', '40':'Student Housing', '41':'Airport/Airplane Hangar', '42':'Mid/High-Rise', '43':'Low-Rise', '44':'Auto', '45':'Garden', '46':'Low-rise', '47':'FF&E', '48':'FMV', '49':'Data Center', }

qtr_fee_types = { '4':'Self-Contained', '5':'Summary', '6':'Restricted', '7':'Other', '8':'Letter', '9':'Billed Time', }

expense_types = { '4':'Airfare', '5':'Hotel', '6':'Meals', '7':'Data Services', '8':'Licensing/Certification', '9':'Appraisal Institute', '10':'Rental Car / Gas', '11':'Mileage', '12':'Taxi', '13':'Supplies', '14':'Parking / Tolls', '15':'Other', '16':'Assistant', '17':'Healthcare Marketing', '18':'null', }

DCF_software_types = { '3':'Argus', '4':'Dyna', '5':'FundIndependent', }

preferred_report_delivery_types = { '26':'Upload an electronic copy of the complete report to the RIMS website.', '27':'Upon review and notification of release, please deliver 3 hard copies of the report, the invoice and all property', '28':'Upload an electronic copy of the report and argus to TIAA-CREF website', '29':'RIMS', '31':'RIMS', '32':'Email entire report including all exhibits in PDF along with Executive Summary, Comparison Form to Nick Wuench and Barbara Bowne at NVC (Pru Appraisal Mgmt. Firm).  A hard copy of the report should be delivered to Nick Wuench at the Hamilton, NJ address.', '33':'Upon review and notification of release, please deliver 3 hard copies of the report, the invoice and all property', '34':'Email electronic copy of the report, Argus file and invoice and deliver two hardcopies of the draft report to Tyler Brown in Hartford', '35':'see engagement letter', '36':'RIMS', '37':'Deliver one (1) report with original signatures and photographs to Luciana Areheart. Additionally, upload an electronic copy to http://www.rimscentral.com', '38':'Deliver one (1) electronic copy via email with electronically signed PDF attachment to Mcappetta@parkwaybank.com' }
