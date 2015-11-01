#!/bin/bash

HOST="postgres"
NOT_CONNECTED="no response"
IS_OK="0"

until [ $IS_OK -eq "1" ]; do
    if [ $(pg_isready -h postgres | grep -q "$NOT_CONNECTED") ]; then
        echo "Waiting"
        sleep 2
    else
        echo "Launching"
        IS_OK="1" && python manage.py runserver
    fi
done
