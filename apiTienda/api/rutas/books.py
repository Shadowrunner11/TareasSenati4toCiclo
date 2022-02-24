from flask import Blueprint, request
from api.utils.responses import response_with
from api.utils import responses as resp
from api.modelos.books import BookSchema, Book
from api.utils.database import db


books_routes = Blueprint("book_routes", __name__)

@books_routes.route('/', methods=['POST'])
def create_book():
    try:
        data = request.get_json()
        book_schema = BookSchema()
        author = Book(**data).create()
        #author, error = author_schema.load(data)
        result =book_schema.dump(author)
       
        
        return response_with(resp.SUCCESS_201, value={"book": result})
    except Exception as e:
        return response_with(resp.INVALID_INPUT_422)

@books_routes.route('/', methods=['GET'])
def get_author_list():

    fetched = Book.query.all()
    author_schema = BookSchema(many=True, only=['title', 'price', 'price', 'stock','author_id'])
    authors= author_schema.dump(fetched)
    return response_with(resp.SUCCESS_200, value={"authors":authors})