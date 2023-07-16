from flask import Flask
from flask_caching import Cache
from config import *

# Import blueprints
from .example import example_bp
from .main import main_bp


def create_app(config_name):
    """Factory function for creating the application instance

    Args:
        config_name (string): configuraton type

    Returns:
        application: the application instance
    """
    app = Flask(__name__)

    # Allow server caching
    cache = Cache(app)

    # Load application configuration
    app.config.from_object(config[config_name])

    # Register blueprints to application
    app.register_blueprint(main_bp)
    app.register_blueprint(example_bp)

    return app
