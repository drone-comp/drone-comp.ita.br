#!/bin/bash

cd /home/cursino/portal/backups

find uploads* -type f -mtime +60 -exec rm {} \;
find mongodb* -type f -mtime +60 -exec rm {} \;

MONGOFILE=mongodb-portal-dev`date +%F-%H%M`.dump
mongodump  --archive=$MONGOFILE --uri=''mongodb://portalAdmin:P%40ssw0rdD0P0rt%40l1t%402019@localhost:27017/portal''
tar -zcvf $MONGOFILE.tar.gz $MONGOFILE
rm $MONGOFILE

tar -zcvf uploads`date +%F-%H%M`.tar.gz /home/cursino/portal/site01/assets/static/core/uploads

find /home/cursino/portal/backups/uploads* -type f -mtime +60 -exec ls {} \;
find /home/cursino/portal/backups/mongodb* -type f -mtime +60 -exec ls {} \;