#!/bin/bash
cd "$(dirname "$0")" #CWD

# Build the Docker image
docker build -t yboyer/winn-project ..
