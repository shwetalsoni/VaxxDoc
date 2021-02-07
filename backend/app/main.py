from flask import Flask, request, jsonify, session
from pytezos import pytezos
import pymongo
from flask_cors import CORS
from hashlib import sha256
from datetime import datetime
from .config import config

pytezos = pytezos.using(
    key=config['TEZOS_KEY'])

contract = pytezos.contract(config['CONTRACT'])

app = Flask(__name__)
CORS(app)
app.secret_key = config['SECRET_KEY']

mongoCluster = pymongo.MongoClient(config['DATABASE_URL'])
db = mongoCluster.db
usersCollection = db.users
superuserCollection = db.superuser

@app.route("/")
def index():
    return "<h1>Hello World!</h1>"

@app.route("/user", methods=["GET", "POST"])
def usersView():
    if request.method == "POST":
        try:
            email = request.form["email"]
            name = request.form["name"]
            age = request.form["age"]
            gender = request.form["gender"]
            number = request.form["number"]
            password = request.form["password"]     # TODO
        except:
            return {
                'error' : "Bad request"
            }, 400
        finally:
            contract.addUser(
                email=email,
                name=name,
                age=age,
                gender=gender,
                number=number
            ).operation_group.sign().inject()
            usersCollection.insert_one({
                'email': email,
                'password': sha256(str(password).encode('utf8')).hexdigest()
            })
            session['type'] = 1
            session['email'] = email
            session['password'] = password
            return {}
    else:
        usersMap = contract.storage()
        return usersMap

@app.route("/login", methods=["POST"])
def loginView():
    try:
        email = request.form["email"]
        passwordHash = request.form["password"]
        user = usersCollection.find_one({'email': email})
    except:
        pass


@app.route("/user/<string:email>")
def getUserView(email):
    usersMap = contract.storage()
    usersMap = dict(usersMap)
    if email in usersMap:
        return usersMap[email]
    return {
        'error' : "Not found"
    }, 404

@app.route("/deleteUser/<string:email>")
def deleteUserView(email):
    contract.deleteUser(                    # TODO
        email=email
    ).operation_group.sign().inject()
    return {}

@app.route("/markV1", methods=["POST"])
def markV1View():
    try:
        email = request.form["email"]
        hospital = request.form["hospital"]
    except:
        return {
            'error' : "Bad request"
        }, 400
    finally:
        contract.markV1(
            email=email,
            date=int(datetime.now().timestamp()),
            hospital=hospital
        ).operation_group.sign().inject()
        return {}

@app.route("/markV2", methods=["POST"])
def markV2View():
    try:
        email = request.form["email"]
    except:
        return {
            'error' : "Bad request"
        }, 400
    finally:
        contract.markV2(
            email=email,
            date=int(datetime.now().timestamp())
        ).operation_group.sign().inject()
        return {}
