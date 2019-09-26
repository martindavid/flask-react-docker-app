import logging
from http import HTTPStatus
from flask import Blueprint, request
from flask_restful import Resource, Api

from project.modules.utils import authenticate_restful, is_admin
from .models import Users as UsersModel

log = logging.getLogger(__name__)

users_blueprint = Blueprint('users', __name__)
api = Api(users_blueprint)


class Users(Resource):

    method_decorators = {'get': [authenticate_restful]}

    def get(self, user, token: str):
        """Get single user details"""
        response_object = {'status': 'fail', 'message': 'User does not exist'}
        log.debug(token)
        log.debug(user)
        try:
            if not user:
                return response_object, HTTPStatus.NOT_FOUND
            else:
                response_object = {'status': 'success', 'data': user.to_json()}
                return response_object, HTTPStatus.OK
        except ValueError:
            return response_object, HTTPStatus.NOT_FOUND
        except Exception as e:
            response_object[
                'message'] = "There's an error while fetch user detail"
            log.error(e)
            return response_object, HTTPStatus.INTERNAL_SERVER_ERROR


class UsersList(Resource):

    method_decorators = {
        'get': [authenticate_restful],
        'post': [authenticate_restful],
        'put': [authenticate_restful]
    }

    def get(self):
        """Get all users"""
        response_object = {
            'status': 'success',
            'users': [user.to_json() for user in UsersModel.query.all()]
        }
        return response_object, HTTPStatus.OK

    def post(self, user):
        post_data = request.get_json()
        response_object = {'status': 'fail', 'message': 'Invalid payload'}
        if not is_admin(resp):
            response_object['message'] = \
                "You do not have permission to do that."
            return response_object, HTTPStatus.UNAUTHORIZED
        if not post_data:
            return response_object, HTTPStatus.BAD_REQUEST

        username = post_data.get('username')
        email = post_data.get('email')
        try:
            response_object = {
                'status': 'success',
                'message': f'{email} was added!'
            }
            return response_object, HTTPStatus.CREATED
        except Exception as e:
            log.error(e)

    def put(self, user):
        post_data = request.get_json()
        response_object = {'status': 'fail', 'message': 'Invalid payload'}
        if not is_admin(resp):
            response_object['message'] = \
                "You do not have permission to do that."
            return response_object, HTTPStatus.UNAUTHORIZED
        if not post_data:
            return response_object, HTTPStatus.BAD_REQUEST

        username = post_data.get('username')
        email = post_data.get('email')
        try:
            response_object = {
                'status': 'success',
                'message': f'{email} was added!'
            }
            return response_object, HTTPStatus.CREATED
        except Exception as e:
            log.error(e)


api.add_resource(Users, '/api/v1/users/<token>')
api.add_resource(UsersList, '/api/v1/users')
