FROM nginx
RUN apt-get install nodejs nodejs-dev npm
RUN mkdir /client
WORKDIR /client
ADD .bowerrc /client
ADD bower.json /client
ADD package.json /client
RUN npm install -g bower
RUN npm install
RUN bower install
MAINTAINER Quentin Fayet
