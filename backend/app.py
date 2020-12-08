from flask import Flask, request
from flask import jsonify, make_response
from flask_cors import CORS
from analysis.movie_analyzer import analyze_movies
import json

app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    resp_data = analyze_movies(data)
    resp = make_response(jsonify(resp_data), 201)
    return resp
