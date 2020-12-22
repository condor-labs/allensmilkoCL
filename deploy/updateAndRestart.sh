#!/bin/bash

# Delete the old repo
rm -rf /home/ubuntu/allensmilkoCL/

# clone the repo again
git clone --branch dev git@github.com:condor-labs/allensmilkoCL.git

pm2 kill

pm2 status

cd /home/ubuntu/allensmilkoCL
#install npm packages
echo "Running npm install"
npm install

#Compiling packages
npm run build

#Restart the node server
npm run start:deploy