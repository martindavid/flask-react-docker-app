# Base Image
FROM python:3.7.2-slim

# Install netcat
RUN apt-get update && \
    apt-get -y install netcat && \
    apt-get clean

# set working directory
WORKDIR /usr/src/app

# add and install requirements
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

# add entrypoint.sh
COPY ./entrypoint-dev.sh  /usr/src/app/entrypoint-dev.sh
RUN chmod +x /usr/src/app/entrypoint-dev.sh

# add app
COPY . /usr/src/app

# run server
CMD ["/usr/src/app/entrypoint-dev.sh"]

