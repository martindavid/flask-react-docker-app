import datetime
import jwt
import logging
from project.extensions import db, bcrypt
from sqlalchemy_utils import Timestamp
from flask import current_app

log = logging.getLogger(__name__)


class Users(db.Model, Timestamp):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(128), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(128), unique=True)
    admin = db.Column(db.Boolean, default=False, nullable=False)
    active = db.Column(db.Boolean, default=True, nullable=False)

    def __init__(self,
                 username: str,
                 password: str,
                 email: str = '',
                 admin: bool = False):
        self.username = username
        self.email = email
        self.admin = admin
        self.password = bcrypt.generate_password_hash(
            password, current_app.config.get('BCRYPT_LOG_ROUNDS')).decode()

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'active': self.active,
            'admin': self.admin
        }

    def encode_auth_token(self, user_id: int):
        """Generates the auth token"""
        try:
            exp_days = current_app.config.get('TOKEN_EXPIRATION_DAYS')
            exp_sec = current_app.config.get('TOKEN_EXPIRATION_SECONDS')
            payload = {
                'exp':
                datetime.datetime.utcnow() +
                datetime.timedelta(days=exp_days, seconds=exp_sec),
                'iat':
                datetime.datetime.utcnow(),
                'sub':
                user_id
            }
            return jwt.encode(payload,
                              current_app.config.get('SECRET_KEY'),
                              algorithm='HS256')
        except Exception as e:
            return e

    @staticmethod
    def decode_auth_token(auth_token: bytes):
        """
        Decodes the auth token
        - :param auth_token:
        - :return integer|string
        """
        try:
            payload = jwt.decode(auth_token,
                                 current_app.config.get('SECRET_KEY'))
            return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'
