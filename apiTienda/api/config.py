from distutils.debug import DEBUG


class Config(object):
    DEBUG = False
    TESTING = False
    SQLALCHEMY_TRACK_MODIFICATION=False

class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = ""

class DevelopmentConfig(Config):
    DEBUG= True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///foo.db'
    SQALCHEMY_ECHO = False
    JWT_SECRET_KEY = 'JWT-SECRET'
    SECRET_KEY= 'SECRET-KEY'
    SECURITY_PASSWORD_SALT= 'SECRET-KEY-PASSWORD'

class TestingConfig(Config):
    TESTING=True
    SQLACHEMY_DATABASE_URI = ""
    SQALCHEMY_ECHO = False
