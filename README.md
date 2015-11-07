# Language

Language is an helpful application to learn English, Japanese and Chinese

# Requirements

## Development requirements
- Python
- Docker

## Install Python requirements with pip

```sh
pip install -r docker/application/requirements.txt
```

# Docker

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
from a loss of data.

## Runing the containers

Language runs under Docker micro containers.

Run from the `docker` folder with:

```sh
docker-compose up
```

3 containers:
- application
- client
- db (elasticsearch)
