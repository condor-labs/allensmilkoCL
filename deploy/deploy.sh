#!/bin/bash

# ./deploy/disableHostKeyChecking.sh
cat ~/.ssh/id_rsa
ssh ubuntu@${SERVER} -i ~/.ssh/id_rsa 'bash -s' < ./deploy/updateAndRestart.sh
