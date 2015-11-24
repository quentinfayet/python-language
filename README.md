# Language

[![Build Status](https://travis-ci.org/quentinfayet/python-language.svg?branch=master)](https://travis-ci.org/quentinfayet/python-language)
[![Documentation Status](https://readthedocs.org/projects/language/badge/?version=latest)](http://language.readthedocs.org/en/latest/?badge=latest)
[![Stories in Ready](https://badge.waffle.io/quentinfayet/python-language.png?label=ready&title=Ready)](https://waffle.io/quentinfayet/python-language)

Language is an helpful application to learn English, Japanese and Chinese

# Requirements

## Development requirements
- Python
- Docker
- Docker Toolbox (if under Windows or Mac OSX)
- Postgres client (psql)

## Install Python requirements with pip

If you want your IDE to be able to perform autocompletion with the
library used by the Language python application, you should
install the depedencies.

Note that anyway, the Docker container will run it for you, and
as the application folder is mounted into the container, the installation
of dependencies will be written on the host.

If you want to manually install the depedencies, run the following command:

```sh
pip install -r docker/application/requirements.txt
```

# The Application

The application itself is running with Python and based on Django framework.

# The Client

The client is an SPA application, served with Nginx and based on
Angular framework.

# The databases

There are two databases systems used by Language application:

- Elasticsearch (used to perform full-text search, store the multi-language
data)
- PostgreSQL (used for user credentials, etc.)

## PostgreSQL database

### Connection *via* a shell

In order to connect to the PostgreSQL database, a postrgres client is required.
**For development purposes, such a client has been set up into the `application`
container.**

To connect the docker container, se the corresponsing section, under "Docker".

Once you established a shell between host and the app's docker container, you
will be able to connect the PostgreSQL client this way:

```sh
psql -hpostgres -Upostgres
```

Then, the prompt will ask you for the password, which, **in development environnement**
has been set to `toto` (yes, I have a very fertile imagination, I know that).

As a reminder, to connect a specific database use `\c db_name`, to list databases use
`\l`, to quit the shell use `\q`

### Setup the database with Django

**First, ensure that the dabase named `language` exists**

Once connected to the application container, executing the following command will synchronize the Django models with the database:

```sh
python manage.py migrate
```

# Docker

Language runs under Docker micro containers.

There are different containers, with different usages:

- A container for Elasticsearch with persistency on host
- A container for PostgreSQL, currently without persistency
- A container for the python API (the application itself)
- A container for the client (SPA served with Nginx)

## Note for users under Mac OSX

As Docker is only available on Linux distributions, users under Mac OSX
have to install Docker Toolbox.

### Enable Elasticsearch persistency under Mac OSX

To enable the persistency under Mac OSX, run the following commands:

```sh
cd elasticsearch
mkdir data && chown 775 data
mkdir logs && chown 775 logs
```

Now, the data written into Elasticsearch via the Docker container
will be in fact written on your HDD, under `elasticsearch/data`
folder. That allows you to turn off the container without suffering
a loss of data.

## Runing the containers

Language runs under Docker micro containers.

Run from the `docker` folder with:

```sh
docker-compose up
```

4 containers:
- application
- client
- db (elasticsearch)
- db (postgresql)

## Connect to a running container *via* a remote shell

### Connect to the python application container

If you want to connect to the python application container, use the `shell.sh`
in the rood directory of the project:

```sh
./shell.sh
```

If you get an error while runing this script, you can either:
- Run it with `sh shell.sh`
- Apply `chmod u+x shell.sh` on it
- Use the "classical" way to connect a container using `docker exec`

### Connect to an other container

In order to connect a **running** container, first, you need to get its ID:

```sh
docker ps
```

Once you spotted the corresponding container in the prompted table, copy its ID.
Then, connect to it *via*:

```sh
docker exec -it [CONTAINER_ID_GOES_HERE] /bin/bash
```
