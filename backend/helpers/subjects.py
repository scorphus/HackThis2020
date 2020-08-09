#!/usr/bin/env python
from flask_pymongo import pymongo
from bson.json_util import loads, dumps

import db

# this is just for setup purposes
def initialize_subjects():
    db.db.subjects.drop()
    subjectList = ["math", "chemistry", "physics", "biology", "english", "french", "spanish", "history", "computer science", "engineering"]
    for subject in subjectList:
        db.db.subjects.insert_one({"title":subject})
    return "DONE"

def add_subject(subject):
    db.db.subjects.insert_one({"title":subject})

def get_subjects():
    return dumps(db.db.subjects.find({}))
