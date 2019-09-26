import logging
from flask import Blueprint, request, jsonify
from http import HTTPStatus
from sqlalchemy import exc, or_
from project.extensions import db, bcrypt
from project.modules.utils import authenticate
from project.modules.users.models import Users

log = logging.getLogger(__name__)
api = Blueprint('auth', __name__)


@api.route('/api/v1/auth/ping', methods=['GET'])
@authenticate
def check_token(resp):
    response_object = {'status': 'success', 'message': 'Token valid'}
    return jsonify(response_object), HTTPStatus.OK


@api.route('/api/v1/auth/status', methods=['GET'])
@authenticate
def get_user_status(resp):
    user = Users.query.filter_by(id=resp).first()
    response_object = {
        'status': 'success',
        'message': 'success',
        'data': user.to_json()
    }
    return jsonify(response_object), 200


@api.route('/api/v1/auth/login', methods=['POST'])
def login_user():
    post_data = request.get_json()
    response_object = {'status': 'fail', 'message': 'Invalid payload'}
    if not post_data:
        return jsonify(response_object), HTTPStatus.BAD_REQUEST

    username = post_data.get('username')
    password = post_data.get('password')
    try:
        user = Users.query.filter_by(username=username).first()
        if user and bcrypt.check_password_hash(user.password, password):
            auth_token = user.encode_auth_token(user.id)
            if auth_token:
                response_object = {
                    'status': 'success',
                    'message': 'Successfully logged in',
                    'auth_token': auth_token.decode()
                }
                return jsonify(response_object), HTTPStatus.OK
        else:
            response_object['message'] = 'User does not exist'
            return jsonify(response_object), HTTPStatus.NOT_FOUND
    except Exception as e:
        log.error(e)
        response_object['message'] = 'Try again.'
        return jsonify(response_object), HTTPStatus.INTERNAL_SERVER_ERROR


@api.route('/api/v1/auth/logout', methods=['GET'])
@authenticate
def logout_user(resp):
    response_object = {
        'status': 'success',
        'message': 'Successfully logged out'
    }
    return jsonify(response_object), HTTPStatus.OK


@api.route('/api/v1/auth/register', methods=['POST'])
def register_user():
    post_data = request.get_json()
    response_object = {'status': 'fail', 'message': 'Invalid payload'}
    if not post_data:
        return jsonify(response_object), 400

    username = post_data.get('username')
    email = post_data.get('email')
    password = post_data.get('password')

    try:
        user = Users.query.filter(
            or_(Users.username == username, Users.email == email)).first()
        if not user:
            # add new user to db
            new_user = Users(username=username, email=email, password=password)
            db.session.add(new_user)
            db.session.commit()

            # generate auth token
            auth_token = new_user.encode_auth_token(new_user.id)
            response_object['status'] = 'success'
            response_object['message'] = 'Successfully registered.'
            response_object['auth_token'] = auth_token.decode()
            return jsonify(response_object), 200
        else:
            response_object['message'] = 'Sorry. That user already exists.'
            return jsonify(response_object), 400
    except (exc.IntegrityError, ValueError):
        db.session.rollback()
        return jsonify(response_object), 400
