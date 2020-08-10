#!/usr/bin/env python
from threading import Lock
from flask import Flask, render_template, session, request, \
    copy_current_request_context
from flask_socketio import SocketIO, emit, join_room, leave_room, \
    close_room, rooms, disconnect
from flask_pymongo import pymongo
from bson.json_util import loads, dumps

from flask_mail import Mail, Message

import os, sys
sys.path.append(os.path.abspath('./helpers'))
import db
import auth
import subjects
import topics

# Set this variable to "threading", "eventlet" or "gevent" to test the
# different async modes, or leave it set to None for the application to choose
# the best option based on installed packages.
async_mode = None

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, async_mode=async_mode)
thread = None
thread_lock = Lock()

app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'hackthiswinningteam@gmail.com'
app.config['MAIL_DEFAULT_SENDER'] = 'hackthiswinningteam@gmail.com'
app.config['MAIL_PASSWORD'] = 'a1secret'
mail = Mail(app)


def background_thread():
    """Example of how to send server generated events to clients."""
    count = 0
    while True:
        socketio.sleep(10)
        count += 1
        socketio.emit('my_response',
                      {'data': 'Server generated event', 'count': count},
                      namespace='/test')

@app.route('/')
def index():
    return render_template('index.html', async_mode=socketio.async_mode)

@app.route('/login', methods=["POST"])
def login():
    username = request.form.get('username').lower()
    password = request.form.get('password').lower()
    print(username + " " + password)
    return auth.login(username, password)

@app.route('/register', methods=["POST"])
def register():
    username = request.form.get('username').lower()
    password = request.form.get('password').lower()
    email = request.form.get('email').lower()
    
    msg_string = auth.register(email, username, password)
    if(msg_string[0] == 'P'):
        msg = Message(subject="Verify your email", sender=app.config.get("MAIL_USERNAME"), recipients=[email], body=msg_string)
        mail.send(msg)
        return "DONE"
    return msg_string

@app.route('/register/<num>')
def verify(num):
    user = request.args.get('user').lower()
    return auth.verify(num, user)

@app.route('/summary', methods=["POST"])
def send_summary(): 
    body = request.form.get('body')
    topic = request.form.get('topic')
    email = request.form.get('email').lower()
    msg = Message(subject="Your summary from " + topic, sender=app.config.get("MAIL_USERNAME"), recipients=[email])
    msg.html = render_template("email.html", content=body)
    mail.send(msg)
    return "DONE"

@app.route('/create_topic', methods=["POST"])
def new(topic, subject):
    topic = request.args.get('topic').lower()
    subject = request.args.get('subject').lower()
    topics.create_topic(topic, subject)
    return "DONE"

@app.route('/get_subjects')
def get_subjects():
    return subjects.get_subjects()

@socketio.on('my_event', namespace='/test')
def test_message(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': message['data'], 'count': session['receive_count']})


@socketio.on('my_broadcast_event', namespace='/test')
def test_broadcast_message(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': message['data'], 'count': session['receive_count']},
         broadcast=True)


@socketio.on('join', namespace='/test')
def join(message):
    join_room(message['room'])
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': 'In rooms: ' + ', '.join(rooms()),
          'count': session['receive_count']})


@socketio.on('leave', namespace='/test')
def leave(message):
    leave_room(message['room'])
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': 'In rooms: ' + ', '.join(rooms()),
          'count': session['receive_count']})


@socketio.on('close_room', namespace='/test')
def close(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response', {'data': 'Room ' + message['room'] + ' is closing.',
                         'count': session['receive_count']},
         room=message['room'])
    close_room(message['room'])


@socketio.on('my_room_event', namespace='/test')
def send_room_message(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': message['data'], 'count': session['receive_count']},
         room=message['room'])


@socketio.on('disconnect_request', namespace='/test')
def disconnect_request():
    @copy_current_request_context
    def can_disconnect():
        disconnect()

    session['receive_count'] = session.get('receive_count', 0) + 1
    # for this emit we use a callback function
    # when the callback function is invoked we know that the message has been
    # received and it is safe to disconnect
    emit('my_response',
         {'data': 'Disconnected!', 'count': session['receive_count']},
         callback=can_disconnect)


@socketio.on('my_ping', namespace='/test')
def ping_pong():
    emit('my_pong')


@socketio.on('connect', namespace='/test')
def test_connect():
    global thread
    with thread_lock:
        if thread is None:
            thread = socketio.start_background_task(background_thread)
    emit('my_response', {'data': 'Connected', 'count': 0})


@socketio.on('disconnect', namespace='/test')
def test_disconnect():
    print('Client disconnected', request.sid)


if __name__ == '__main__':
    socketio.run(app, debug=True)
