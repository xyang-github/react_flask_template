from flask import Blueprint

main_bp = Blueprint("main_bp", __name__)

from . import main_module
