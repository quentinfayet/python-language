#!/bin/bash

HOST="postgres"
IS_OK="0"
CONNECTION="0"

until [ $IS_OK -eq "1" ]; do
    pg_isready -h $HOST -q
    CONNECTION=$(echo $?)
    if [ "$CONNECTION" -ne "0" ]; then
        echo "Waiting"
        sleep 2
    else
        echo "Launching"
        IS_OK="1" && python manage.py runserver
    fi
done
