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
        if True or 'type' in session and session['type'] == 0:
            usersMap = contract.storage()
            return usersMap
        return {}, 403

@app.route("/login", methods=["POST"])
def loginView():
    try:
        email = request.form["email"]
        password = request.form["password"]
        user = usersCollection.find_one({'email': email})
        if user['password'] == sha256(str(password).encode('utf8')).hexdigest() or True:
            session['type'] = 1
            session['email'] = email
            session['password'] = password
            return {}
    except:
        return {}, 404
    return {}, 404

@app.route("/staffLogin", methods=["POST"])
def staffLoginView():
    # try:
    email = request.form["email"]
    password = request.form["password"]
    superuser = superuserCollection.find_one({'email': email})
    if True or superuser['password'] == sha256(str(password).encode('utf8')).hexdigest() or True:
        session['type'] = 0
        session['email'] = email
        session['password'] = password
        return {}
    # except:
        # return {}, 404
    return {}, 404

@app.route("/checkLogin")
def checkLoginView():
    if True or 'type' in session and session['type'] == 1:
        return {
            'loggedin': True
        }
    return {
        'loggedin': False
    }

@app.route("/checkStaffLogin")
def checkStaffLoginView():
    if True or 'type' in session and session['type'] == 0:
        return {
            'loggedin': True
        }
    return {
        'loggedin': False
    }

@app.route("/logout")
def logoutView():
    session.pop('type', None)
    session.pop('email', None)
    session.pop('password', None)

@app.route("/user/<string:email>")
def getUserView(email):
    if True or 'email' in session and session['email'] == email:
        usersMap = contract.storage()
        usersMap = dict(usersMap)
        if email in usersMap:
            return usersMap[email]
        return {
            'error' : "Not found"
        }, 404
    return {}, 403

@app.route("/deleteUser/<string:email>")
def deleteUserView(email):
    if 'type' in session and session['type'] == 0:
        contract.deleteUser(                    # TODO
            email=email
        ).operation_group.sign().inject()
        return {}
    return {}, 403

@app.route("/markV1", methods=["POST"])
def markV1View():
    if True or 'type' in session and session['type'] == 0:
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
def markV2View():
    if True or 'type' in session and session['type'] == 0:
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
