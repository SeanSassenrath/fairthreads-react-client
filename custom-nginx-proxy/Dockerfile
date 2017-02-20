FROM jwilder/nginx-proxy

MAINTAINER Sean Sassenrath

RUN mkdir /etc/nginx/vhost.d

COPY ./redirects.conf /etc/ngnix/conf.d/redirects.conf
COPY ./shopfairthreads.com_location /etc/nginx/vhost.d/shopfairthreads.com_location

VOLUME /etc/nginx/vhost.d
