# encoding: utf-8
"""
Extensions setup
================

Extensions provide access to common resources of the application.

Please, put new extension instantiations and initializations here.
"""

from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from .logging import Logging
from logging.config import dictConfig


logging = Logging()

dictConfig({
    'version': 1,
    'formatters': {'default': {
        'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
    }},
    'handlers': {'wsgi': {
        'class': 'logging.StreamHandler',
        'formatter': 'default'
    }},
    'root': {
        'level': 'DEBUG',
        'handlers': ['wsgi']
    }
})

cross_origin_resource_sharing = CORS()
db = SQLAlchemy()
ma = Marshmallow()
bcrypt = Bcrypt()


def init_app(app):
    """
    Application extensions initialization.
    """
    for extension in (
            logging,
            cross_origin_resource_sharing,
            db,
            ma,
            bcrypt
    ):
        extension.init_app(app)
