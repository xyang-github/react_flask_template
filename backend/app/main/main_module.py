from flask import render_template
from . import main_bp


@main_bp.route("/")
def main():
    """Render the page

    Returns:
        template: index.html
    """
    return render_template("index.html")
