#!/bin/bash
cd "$(dirname "$0")" #CWD

# Retreive image from the Docker HUB
echo \# Pulling...
docker pull yboyer/winn-project

echo
# Start or restart the server
echo \# Running...
docker stop yboyerwt
docker rm yboyerwt
docker run --name=yboyerwt --restart=always -d yboyer/winn-project
# or to expose port to the host interface, run:
# docker run --name=yboyerwt --restart=always -p 3000:3000 -d yboyer/winn-project

echo
# Display the yboyer/winn-project containers
echo \# Container started
docker ps -f ancestor=yboyer/winn-project
