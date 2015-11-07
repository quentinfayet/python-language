# Language

Language is an helpful application to learn English, Japanese and Chinese

# Requirements

## Development requirements
- Python
- Docker
- Docker Toolbox (if under Windows or Mac OSX)

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


Run from the `docker` folder with:

```sh
docker-compose up
```

3 containers:
- application
- client
- db (elasticsearch)
