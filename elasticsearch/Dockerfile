FROM java:8-jre

RUN apt-key adv --keyserver ha.pool.sks-keyservers.net --recv-keys 46095ACC8548582C1A2699A9D27D666CD88E42B4

ENV ELASTICSEARCH_MAJOR 1.3
ENV ELASTICSEARCH_VERSION 1.3.9
ENV ELASTICSEARCH_REPO_BASE http://packages.elasticsearch.org/elasticsearch/1.3/debian

RUN echo "deb $ELASTICSEARCH_REPO_BASE stable main" > /etc/apt/sources.list.d/elasticsearch.list

# Installing ES
RUN apt-get update\
    && apt-get install -y elasticsearch=$ELASTICSEARCH_VERSION

# Adding ES bin folder to path
ENV PATH /usr/share/elasticsearch/bin:$PATH

# Exposing ES default ports
EXPOSE 9200 9300

CMD ["elasticsearch"]

MAINTAINER Quentin Fayet
