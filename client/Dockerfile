FROM nginx
RUN apt-get update && apt-get install -y\
                                        nodejs\
                                        nodejs-dev\
                                        npm\
                                        git
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN mkdir /client
WORKDIR /client
ADD .bowerrc /client/
ADD bower.json /client/
ADD package.json /client/
RUN npm install -g bower
RUN npm install
RUN bower install --allow-root
MAINTAINER Quentin Fayet
