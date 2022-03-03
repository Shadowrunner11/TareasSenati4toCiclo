from api.utils.database import db
from marshmallow_sqlalchemy import SQLAlchemySchema, auto_field
from marshmallow import fields
from api.modelos.books import BookSchema

class Author(db.Model):
    __tablename__ = 'authors'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))
    created = db.Column(db.DateTime, server_default=db.func.now())
    books = db.relationship('Book', backref='Author', cascade="all, delete-orphan")

    def __init__(self, first_name, last_name, books=[]):
        self.first_name = first_name
        self.last_name = last_name
        self.books = books

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

class AuthorSchema(SQLAlchemySchema):
    class Meta:
        model = Author
        sqla_session = db.session

    id = auto_field()
    first_name = auto_field()
    last_name = auto_field()
    created = auto_field()
    books = auto_field()