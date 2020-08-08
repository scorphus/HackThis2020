#!/usr/bin/env python
from flask_pymongo import pymongo
from bson.json_util import loads, dumps
import re

import db

def login(username, password):
    user = db.db.users.find({"user":username})
    if(len(dumps(user)) == 2):
        return "INVALID USER"
   for record in user:
        if(not record['pass'] == password):
            return "INVALID PASSWORD"
    user = dumps(user)
    return user

def valid_username(username):
    return username.isalnum()

def valid_email(email):
    return re.search('^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$', email)

def valid_password(password):
    return len(password) > 8

def register(email, username, password):
    existing = dumps(db.db.users.find({"user":username}))
    if(len(existing) != 2):
        return "USER EXISTS"
    elif(not valid_username(username)):
        return "INVALID USERNAME"
    elif(not valid_email(email)):
        return "INVALID EMAIL"
    elif(not valid_password(password)):
        return "INVALID PASSWORD"
    db.db.users.insert_one({"user":username, "pass":password, "email":email, "interests":[]})
    user = dumps(db.db.users.find({"user":username}))
    return user
