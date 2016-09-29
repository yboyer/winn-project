#!/bin/bash
cd "$(dirname "$0")" #CWD

# Retreive image from the Docker HUB
docker pull yboyer/winn-project
# Start or restart the server
docker run --restart=always -d yboyer/winn-project
# or to exposed port to the host interface, run:
# docker run --restart=always -p 3000:3000 -d yboyer/winn-project
