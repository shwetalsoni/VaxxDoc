import pymongo
from config import config
from hashlib import sha256

mongoCluster = pymongo.MongoClient(config['DATABASE_URL'])
db = mongoCluster.db
usersCollection = db.users
superuserCollection = db.superuser

def hash(raw):
    return sha256(str(raw).encode('utf8')).hexdigest()

def printSuperusers():
    res = superuserCollection.find({})
    for a in res:
        print(a)

# superuserCollection.insert_one({
#     "email": "test@example.com",
#     "password": hash("123")
# })
printSuperusers()

user = superuserCollection.find_one({"email": "test@example.com"})
if(user["password"] == hash(1234)):
    print("YES")
else:
    print("NO")
