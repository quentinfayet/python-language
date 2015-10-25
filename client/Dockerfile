FROM nginx

# Installing basic packages
RUN apt-get update && apt-get install -y\
                                        nodejs\
                                        nodejs-dev\
                                        npm\
                                        git\
                                        curl

# Installing last node version
RUN curl -sL https://deb.nodesource.com/setup_0.12 | bash -
RUN apt-get install -y nodejs

# Runing npm install in /tmp (force to not
# use cache)
ADD package.json /tmp/package.json
ADD README.md /tmp/README.md
RUN cd /tmp && npm install

# Making main client directory
# and copying node_modules inside
RUN mkdir /client
RUN cp -a /tmp/node_modules /client

# Defining workdir
WORKDIR /client

# Adding basic config files to /client
# to run initials bower installation
ADD .bowerrc /client/
ADD bower.json /client/

# Installing gulp & bower (general)
RUN npm install -g bower gulp

# Installing bower dependencies
RUN bower install --allow-root

MAINTAINER Quentin Fayet
