#!/bin/bash

echo 'cleaning up...'
if [ "`find -name \*.pyc`" != "" ]; then
    find -name \*.pyc | xargs -n 100 rm
fi
if [ "`find -name \*.bak`" != "" ]; then
    find -name \*.bak | xargs -n 100 rm
fi
if [ "`find -name \*~`" != "" ]; then
    find -name \*~ | xargs -n 100 rm
fi
