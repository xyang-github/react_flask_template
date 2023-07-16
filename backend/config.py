class Config:
    """Defines prototype configuration object for which others inherit from"""

    CACHE_TYPE: "SimpleCache"

    @staticmethod
    def init_app(app):
        """Allows extensions to be initialized

        Args:
            app (application instance): the application instance
        """
        pass


class DevelopmentConfig(Config):
    """Configuration for development mode"""

    DEBUG = True


class TestingConfig(Config):
    """Configuration for testing mode"""

    TESTING = True


config = {
    "development": DevelopmentConfig,
    "testing": TestingConfig,
    "production": Config,
}
