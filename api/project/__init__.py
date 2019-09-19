"""
Factory for main flask application
"""
import os

from flask import Flask
from flask_migrate import Migrate
from werkzeug.contrib.fixers import ProxyFix

migrate = Migrate()


def create_app(flask_config_name=None, **kwargs):
    """
    Entry point to the Flask RESTful Server application.
    """
    # This is a workaround for Alpine Linux (musl libc) quirk:
    # https://github.com/docker-library/python/issues/211
    import threading
    threading.stack_size(2 * 1024 * 1024)

    env_flask_config_name = os.getenv('APP_SETTINGS')

    app = Flask(__name__, **kwargs)
    app.wsgi_app = ProxyFix(app.wsgi_app)

    app.config.from_object(env_flask_config_name)

    from . import extensions
    extensions.init_app(app)

    migrate.init_app(app, extensions.db)

    from . import modules
    modules.initiate_app(app)

    @app.shell_context_processor
    def ctx():
        return {'app': app, 'db': extensions.db}

    return app
