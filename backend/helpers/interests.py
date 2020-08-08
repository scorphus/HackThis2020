#!/usr/bin/env python
from flask_pymongo import pymongo
from bson.json_util import loads, dumps

import db

def adopt_interest(interest, user):
    existing = db.db.interests.find_one({"interest":interest})
    if(len(dumps(existing)) == 2):
        create_interest(interest)
    return "DONE"

def create_interest(interest):
    db.db.interests.insert_one({"interest":interest})

def get_interests():
    interests = dumps(db.db.interests.find({}))
    return interests



