#!/bin/bash

# ./deploy/disableHostKeyChecking.sh

ssh ubuntu@${SERVER} 'bash -s' < ./deploy/updateAndRestart.sh
