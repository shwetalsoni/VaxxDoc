from flask import Flask, request, jsonify, session
from pytezos import pytezos
import pymongo
from flask_cors import CORS, cross_origin
from hashlib import sha256
from datetime import datetime
from .config import config

pytezos = pytezos.using(
    key=config['TEZOS_KEY'])

contract = pytezos.contract(config['CONTRACT'])

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.secret_key = config['SECRET_KEY']
app.config.update(SESSION_COOKIE_SAMESITE="None", SESSION_COOKIE_SECURE=True)

mongoCluster = pymongo.MongoClient(config['DATABASE_URL'])
db = mongoCluster.db
usersCollection = db.users
superuserCollection = db.superuser

@app.route("/")
def index():
    return "<h1>Hello World!</h1>"

@app.route("/user", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
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
        contract.addUser(
            email=email,
            name=name,
            age=age,
            gender=gender,
            number=number
        ).operation_group.sign().inject()
        usersCollection.insert_one({
            'email': email,
            'password': hash(password)
        })
        session['type'] = 1
        session['email'] = email
        session['password'] = password
        return {}
    else:
        if 'type' in session:
            print(session['type'])
        print(dict(session))
        if 'type' in session and session['type'] == 0:
            usersMap = contract.storage()
            return usersMap
        return {}, 403


@app.route("/user/<string:email>")
@cross_origin(supports_credentials=True)
def getUserView(email):
    if 'email' in session and (session['type'] == 0 or session['email'] == email):
        usersMap = contract.storage()
        usersMap = dict(usersMap)
        if email in usersMap:
            return usersMap[email]
        return {
            'error' : "Not found"
        }, 404
    return {}, 403


@app.route("/login", methods=["POST"])
@cross_origin(supports_credentials=True)
def loginView():
    try:
        email = request.form["email"]
        password = request.form["password"]
        user = usersCollection.find_one({'email': email})
        if user['password'] == hash(password):
            session['type'] = 1
            session['email'] = email
            session['password'] = password
            return {}
    except:
        return {}, 404
    return {}, 404

@app.route("/staffLogin", methods=["POST"])
@cross_origin(supports_credentials=True)
def staffLoginView():
    try:
        email = request.form["email"]
        password = request.form["password"]
        superuser = superuserCollection.find_one({'email': email})
        if superuser['password'] == hash(password):
            session['type'] = 0
            session['email'] = email
            session['password'] = password
            print("loggedin", session['email'], session['type'])
            print(dict(session))
            return {}
    except:
        return {}, 404
    return {}, 404

@app.route("/checkLogin")
@cross_origin(supports_credentials=True)
def checkLoginView():
    if 'type' in session and session['type'] == 1:
        return {
            'loggedin': True
        }
    return {
        'loggedin': False
    }

@app.route("/checkStaffLogin")
@cross_origin(supports_credentials=True)
def checkStaffLoginView():
    if 'type' in session and session['type'] == 0:
        return {
            'loggedin': True
        }
    return {
        'loggedin': False
    }

@app.route("/logout")
@cross_origin(supports_credentials=True)
def logoutView():
    print(dict(session))
    # session.pop('type', None)
    session['type'] = -1
    session.pop('email', None)
    session.pop('password', None)
    print(dict(session))

    return {}

# @app.route("/deleteUser/<string:email>")
# def deleteUserView(email):
#     if 'type' in session and session['type'] == 0:
#         contract.deleteUser(                    # TODO
#             email=email
#         ).operation_group.sign().inject()
#         return {}
#     return {}, 403

@app.route("/markV1", methods=["POST"])
@cross_origin(supports_credentials=True)
def markV1View():
    if 'type' in session and session['type'] == 0:
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
    return {}, 403

@app.route("/markV2", methods=["POST"])
@cross_origin(supports_credentials=True)
def markV2View():
    if 'type' in session and session['type'] == 0:
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
    return {}, 403

def hash(raw):
    return sha256(str(raw).encode('utf8')).hexdigest()
