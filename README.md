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

Language runs under Docker micro containers.

Run from the `docker` folder with:

```sh
docker-compose up
```

3 containers:
- application
- client
- db (elasticsearch)
