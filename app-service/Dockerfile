FROM node:6.7.0

MAINTAINER Sean Sassenrath

WORKDIR /opt/app

# Install yarn from local .tgz
RUN mkdir -p /opt
ADD latest.tar.gz /opt/
RUN mv /opt/dist /opt/yarn
ENV PATH "$PATH:/opt/yarn/bin"

# Copy local app to app directory
COPY . /opt/app

# install dependencies
ADD package.json yarn.lock /tmp/
RUN cd /tmp && yarn
RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules

# build app
RUN yarn run build

EXPOSE 8080

CMD yarn start
