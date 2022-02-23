from flask import Blueprint, request
from api.utils.responses import response_with
from api.utils import responses as resp
from api.modelos.author import Author, AuthorSchema
from api.utils.database import db


author_routes = Blueprint("author_routes", __name__)


@author_routes.route('/', methods=['POST'])
def create_author():
    try:
        data = request.get_json()
        author_schema = AuthorSchema()
        author = Author(**data).create()
        #author, error = author_schema.load(data)
        result =author_schema.dump(author)
       
        
        return response_with(resp.SUCCESS_201, value={"author": result})
    except Exception as e:
        return response_with(resp.INVALID_INPUT_422)