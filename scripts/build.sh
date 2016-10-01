#!/bin/bash
cd "$(dirname "$0")" #CWD

# Build the client
(cd ../client && npm run build)

echo
echo \# Build image...
# Build the Docker image
docker build -t yboyer/winn-project ..

echo
# Display the yboyer/winn-project image
echo \# Image builded
docker images yboyer/winn-project
