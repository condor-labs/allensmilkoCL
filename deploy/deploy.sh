#!/bin/bash

# ./deploy/disableHostKeyChecking.sh

ssh ubuntu@${SERVER} -i ~/.ssh/id_rsa 'bash -s' < ./deploy/updateAndRestart.sh
