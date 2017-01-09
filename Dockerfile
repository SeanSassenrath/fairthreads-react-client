FROM node:6.7.0

MAINTAINER Sean Sassenrath

# create app directory
RUN mkdir -p /usr/src/app
COPY . /usr/src/app

# install dependencies
WORKDIR /usr/src/app
RUN npm install

# build app
RUN npm run build

EXPOSE 8080

CMD npm start
