from flask import Blueprint

example_bp = Blueprint("example_bp", __name__)

from . import example_module
