#!/bin/bash

# Use the staging machine
eval $(docker-machine env fairthreads-web-staging)
docker-compose build && docker-compose up -d
