#!/bin/bash

# Use the staging machine
eval $(docker-machine env fairthreads-web-client)
docker-compose build && docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
