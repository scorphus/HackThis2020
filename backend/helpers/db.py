from flask import Flask
from flask_pymongo import pymongo

client = pymongo.MongoClient("mongodb+srv://user:thepassword@hackthis2020.txqxe.mongodb.net/<dbname>?retryWrites=true&w=majority")
db = client.get_database('hackthis2020')
subjects = pymongo.collection.Collection(db, 'subjects')
topics = db.get_collection('topics')
users = db.get_collection('users')