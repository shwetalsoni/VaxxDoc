from flask import Flask, request, jsonify
from pytezos import pytezos
from datetime import datetime
from .config import config

pytezos = pytezos.using(
    key=config['TEZOS_KEY'])

contract = pytezos.contract(config['CONTRACT'])

app = Flask(__name__)


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
            return {}
    else:
        usersMap = contract.storage()
        return usersMap

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
        hospital = request.form["hospital"]
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