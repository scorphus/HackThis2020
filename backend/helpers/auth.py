#u/usr/bin/env python
from flask_pymongo import pymongo
from bson.json_util import loads, dumps
import re

from flask_mail import Message
import db

def login(username, password):
    user = db.db.users.find_one({"user":username})
    if(not user):
        return "INVALID USER"
    if(not user['pass'] == password):
        return "INVALID PASSWORD"
    return dumps(user)

def check_user_exists(username):
    existing = dumps(users.find({"user":username}))
    if(len(existing) != 2):
        return True
    return False
    
def valid_username(username):
    return username.isalnum()

def valid_email(email):
    return re.search('^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$', email)

def valid_password(password):
    return len(password) >= 8

def register(email, username, password, interests):
    existing = dumps(db.db.users.find({"user":username}))
    if(len(existing) != 2):
        return "INVALID: USER EXISTS"
    elif(not valid_username(username)):
        return "INVALID USERNAME"
    elif(not valid_email(email)):
        return "INVALID EMAIL"
    elif(not valid_password(password)):
        return "INVALID PASSWORD"
    db.db.users.insert_one({"user":username, "pass":password, "email":email, "confirmed":False, "interests":interests})
    link = "http://127.0.0.1:5000/register/" + str(hash(username))
    msg = "Please visit this link to verify your account: " + link + "?user=" + username
    return msg

def verify(code, user):
    if(not code == str(hash(user))):
        return "INVALID"
    db.db.users.update_one({"user":user}, {"$set":{"confirmed":True}})
    return dumps(db.db.users.find_one({"user":user}))

def is_verified(user):
    user = users.find({"user":username})
    if(len(dumps(user))==2):
        return False
    for record in user:
        if(record['confirmed']):
            return True
    return False
