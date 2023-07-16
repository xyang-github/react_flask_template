import os
from app import create_app

# Create application instance from factory function
app = create_app(os.getenv("FLASK_ENV") or "developmental")
