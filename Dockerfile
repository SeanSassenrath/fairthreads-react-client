FROM node:6.7.0

MAINTAINER Sean Sassenrath

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install dependencies
COPY . /usr/src/app/
RUN npm install

EXPOSE 8080
