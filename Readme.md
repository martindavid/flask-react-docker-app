# Flask-React-Docker App

An example of web application using Flask, React + NextJS with Docker.

## Getting Started

This project consists of Flask application for the backend API, NextJS for client side application and nginx as a reverse-proxy for connecting api and the front-end. This project also use `docker-compose` to make it easy run all of the container at once.

This application will showcase:

- Flask application with Users and Auth endpoint
- NextJS application that showing normal route and authenticated routes.

### Prerequisites

Before you run this application make sure you have this installed in your machine:

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [docker-compose](https://docs.docker.com/compose/install/)

### Running Locally

To run the application locally, run this command

```
$ docker-compose up
```

#### Database Migration and Seed

```
# Run database migration
$ docker-compose exec api python manage.py db upgrade

# Run database seed
$ docker-compose exec api python manage.py seed_db
```

The seeder will contain sample users data:

```
username : admin
password : verysecurepassword
```

After you run above commands you can open the application from [http://localhost:8080/](http://localhost:8080/)
