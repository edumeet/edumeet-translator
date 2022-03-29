FROM php:7.4-apache

RUN apt-get update && apt-get -yq install git
#RUN docker-php-ext-install pdo_sqlite
WORKDIR /var/www/html/

COPY html /var/www/html

RUN rm -rf /var/www/html/edumeet

RUN chown www-data:www-data -R /var/www/html

RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

RUN a2enmod rewrite

RUN git clone https://github.com/edumeet/edumeet.git /tmp/edumeet

EXPOSE 8080