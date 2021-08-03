from radioactivehub0/php-fpm:latest
USER root
RUN apt update && apt install -y curl
RUN mkdir -p /var/lib/application && chmod 777 /var/lib/application
RUN mkdir -p /var/log/nginx && chmod 777 /var/log/nginx
WORKDIR /opt
COPY nginx.conf /etc/nginx/nginx.conf
RUN nginx -T
RUN cat /etc/nginx/nginx.conf
ADD / /opt/polkahub

