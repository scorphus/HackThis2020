from datetime import datetime
from elasticsearch import Elasticsearch

from db import db, subjects, topics, users

# cloud endpoint:
# https://05955f1348b44e3fb0a8f21277c0c9f7.us-east4.gcp.elastic-cloud.com:9243
cloudID = "HackThis_2020:dXMtZWFzdDQuZ2NwLmVsYXN0aWMtY2xvdWQuY29tJDA1OTU1ZjEzNDhiNDRlM2ZiMGE4ZjIxMjc3YzBjOWY3JGJlMzUyMzQ1M2FmZjRiYjliYzQ0N2Y4ZGI3MTc5ZWZh"
password = "HxgFov2WW6bCoJD8gwbglwuK"
es = Elasticsearch(cloud_id=cloudID, http_auth=('elastic',password))

index_subject = "subject"
index_topic = "topic"

def initializeIndexSubject():
    if (es.indices.exists(index=index_subject)):
        es.indices.delete(index=index_subject)

    es.indices.create(index=index_subject, body={"settings": {
        "analysis": {
        "analyzer": {
            "my_analyzer": {
            "tokenizer": "my_tokenizer"
            }
        },
        "tokenizer": {
            "my_tokenizer": {
            "type": "edge_ngram",
            "min_gram": 3,
            "max_gram": 20,
            "token_chars": [
                "letter"
            ]
            }
        }
        }
    }})

def populateSubjectTopic():
    # populate subjects
    subjectIDCount = 0
    for doc in subjects.find({}):
        convertedBody = {
            'title': doc['title']
        }
        es.index(index=index_subject, id=subjectIDCount, body=convertedBody, params={

        })
        subjectIDCount += 1
    
    # populate topics
    topicIDCount = 0
    for doc in topics.find({}):
        convertedBody = {
            'title': doc['title']
        }
        es.index(index=index_topic, id=topicIDCount, body=convertedBody)
        topicIDCount += 1

def searchSubject(searchTerm):
    res = es.search(index=index_subject, body={"query": {
        "fuzzy": {
            "title": {
                "value": searchTerm,
                "fuzziness": "AUTO",
                "transpositions": True,
                "max_expansions": 50
            }
        }
    }})

    resultList = []
    for entry in res['hits']['hits']:
        resultList.append(entry['_source']['title'])
    
    return resultList


def searchTopic(searchTerm):
    res = es.search(index=index_topic, body={"query": {
        "fuzzy": {
            "title": {
                "value": searchTerm,
                "fuzziness": "AUTO",
                "transpositions": True,
                "max_expansions": 50
            }
        }
    }})

    resultList = []
    for entry in res['hits']['hits']:
        resultList.append(entry['_source']['title'])
    
    return resultList

# initializeIndexSubject()
# populateSubjectTopic()
print(searchSubject('misc'))