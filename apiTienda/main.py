import os
from flask import Flask, jsonify
from flask_cors import CORS
from api.config import * 
from api.utils.database import db
from api.utils.responses import response_with
import api.utils.responses as resp
from api.rutas.authors import author_routes
from api.rutas.books import books_routes
from flask_jwt_extended import JWTManager
from api.rutas.user import user_routes

app = Flask(__name__)

options={"PROD":ProductionConfig, "TEST": TestingConfig, "DEV":DevelopmentConfig}

app_config=options[os.environ.get('WORK_ENV')]


app.config.from_object(app_config)

jwt = JWTManager(app)

db.init_app(app)

with app.app_context():
    db.create_all()



app.register_blueprint(author_routes, url_prefix='/api/authors')
app.register_blueprint(books_routes, url_prefix='/api/books')
app.register_blueprint(user_routes, url_prefix='/api/users')

cors = CORS(app, resources={r'/*': {"origins": '*'}})



# START GLOBAL HTTP CONFIGURATIONS
@app.after_request
def add_header(response):
    return response

@app.errorhandler(400)
def bad_request(e):
    app.logger.error(e)
    return response_with(resp.BAD_REQUEST_400)

@app.errorhandler(500)
def server_error(e):
    app.logger.error(e)
    return response_with(resp.SERVER_ERROR_500)

@app.errorhandler(404)
def not_found(e):
    app.logger.error(e)
    return response_with(resp.SERVER_ERROR_404)

# END GLOBAL HTTP CONFIGURATIONS

if __name__=="__main__":
    app.run(port=5000, use_reloader=False)