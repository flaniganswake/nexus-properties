#! /usr/bin/env python
import os
import sys


sys.path.insert(0, os.getcwd().replace('/scripts', ''))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "nexus.settings")

from compress_js import compress

SCRIPTS = ['../static/lib/jquery/jquery.min.js',
           '../static/lib/underscore/underscore-min.js',
           '../static/lib/bootstrap/js/bootstrap.min.js',
           '../static/lib/bootstrap/js/bootstraptooltip.min.js',
           '../static/lib/jquery/footable.js',
           '../static/lib/jquery/footable.sort.js',
           '../static/lib/jquery/datatables.js',
           '../static/FriendlyDictionary.js',
           '../static/Nexusv1.js',
           '../static/common.js',]
SCRIPTS_OUT_DEBUG = '../static/prod/NexusApp.js'
SCRIPTS_OUT = '../static/prod/NexusApp.min.js'

##STYLESHEETS = [
##    'app/media/style.css',
##    ]
##STYLESHEETS_OUT = 'app/media/style.min.css'
def main():
    print 'Compressing JavaScript...'
    compress(SCRIPTS, SCRIPTS_OUT, 'js', False, SCRIPTS_OUT_DEBUG)

    #print 'Compressing CSS...'
    #compress(STYLESHEETS, STYLESHEETS_OUT, 'css')
if __name__ == '__main__':
    main()