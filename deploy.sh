#!/bin/sh

ssh -o StrictHostKeyChecking=no root@$DO_IP_ADDRESS << 'ENDSSH'
	cd /app
	export $(cat .env | xargs)
	docker login -u $CI_REGISTRY_USER -p $CI_JOB_TOKEN $CI_REGISTRY
	docker pull $IMAGE:api
	docker pull $IMAGE:client
	docker-compose -f docker-compose.prod.yml up -d --build
ENDSSH

