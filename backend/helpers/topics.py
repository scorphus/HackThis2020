#!/usr/bin/env python
from flask_pymongo import pymongo
from bson.json_util import loads, dumps

import db

def create_topic(title, subject_name):
    subject = db.db.subjects.find({"title":subject_name})
    for record in subject:
        id = record['_id']
    db.db.topics.insert({"title":title, "subject_id":id})

def delete_topic(id):
    return db.db.subjects.delete_one({"_id":id})
