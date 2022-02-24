from flask import Blueprint, request
from api.utils.responses import response_with
from api.utils import responses as resp
from api.modelos.author import Author, AuthorSchema
from api.utils.database import db
from flask_jwt_extended import jwt_required


author_routes = Blueprint("author_routes", __name__)


@author_routes.route('/', methods=['POST'])
@jwt_required()
def create_author():
    try:
        data = request.get_json()
        print(data)
        author_schema = AuthorSchema()
        author = Author(**data).create()
        #author, error = author_schema.load(data)
        result =author_schema.dump(author)
       
        
        return response_with(resp.SUCCESS_201, value={"author": result})
    except Exception as e:
        print(e)
        return response_with(resp.INVALID_INPUT_422)

@author_routes.route('/', methods=['GET'])
def get_author_list():

    fetched = Author.query.all()
    author_schema = AuthorSchema(many=True, only=['first_name', 'last_name', 'id', 'books'])
    authors= author_schema.dump(fetched)
    return response_with(resp.SUCCESS_200, value={"authors":authors})

@author_routes.route('/<string:author_name>', methods=['GET'])
def get_author_detail(author_name):
    fetched = Author.query.filter_by(first_name=author_name).all()
    author_schema =AuthorSchema(many = True)
    author = author_schema.dump(fetched)
    return response_with(resp.SUCCESS_200, value={"authors":author})