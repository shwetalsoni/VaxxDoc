from flask import Flask, request
from pytezos import pytezos

pytezos = pytezos.using(
    key='~/Downloads/tz1caL2QfyJyFqM3axGLFt8x75abHHaKqAPe.json')

app = Flask(__name__)


@app.route("/")
def index():
    return "<h1>Hello World!</h1>"

@app.route("/user", methods=["GET", "POST"])
def usersView():
    return 'a'
