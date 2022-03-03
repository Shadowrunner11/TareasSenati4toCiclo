import json
from flask import Flask, request
from flask_cors import CORS, cross_origin
from romanizer import romanize
app = Flask(__name__)


@app.route("/conversor",methods=["GET","POST"])
@cross_origin(supports_credentials=True)
def convert():

    if request.method == "GET":
        respuesta = json.dumps({"respuesta": romanize(int(request.args.get('num')))},indent=4 )
       
        return respuesta