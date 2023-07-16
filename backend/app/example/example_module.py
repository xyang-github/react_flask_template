from . import example_bp

@example_bp.route('/sample')  # decorator is same name as blueprint
def example_view():
    # Code goes here