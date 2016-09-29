#!/bin/bash
cd "$(dirname "$0")" #CWD

# Push the Docker image to the Docker HUB
docker push yboyer/winn-project
