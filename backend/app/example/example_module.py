from . import example_bp


@example_bp.route("/sample")  # decorator is same name as blueprint
def example_view():
    """Test function

    Returns:
        string: the string "Success""
    """

    return "Success"
