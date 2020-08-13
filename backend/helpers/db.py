from flask import Flask
from flask_pymongo import pymongo

client = pymongo.MongoClient("mongodb+srv://user:thepassword@hackthis2020.txqxe.mongodb.net/<dbname>?retryWrites=true&w=majority")
db = client.get_database('hackthis2020')
user_collection = pymongo.collection.Collection(db, 'user_collection')
