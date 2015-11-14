#!/bin/bash

docker exec -it $(docker ps | grep language_pythonapp | awk '{print $1}') /bin/bash
