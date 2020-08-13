from flask import Flask, render_template
from flask_socketio import SocketIO, join_room, leave_room
import random 

app = Flask(__name__, template_folder='../templates')

app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/messages/<room_id>')
def sessions(room_id):
    # maybe add authentication in the future
    username = "meme" #TvT F how to do this
    room = room_id
    return render_template('message.html', from_user = username, room_id = room_id)

def messageReceived(methods=['GET', 'POST']):
    print('Message Received')

@socketio.on('message')
def message(data):
    socketio.send(data)

@socketio.on('join')
def on_join(data):
    #gotta figure this out username = session.get()
    room = data[room]
    join_room(room)
    send(username + ' has entered the room.', room=room)

@socketio.on('leave')
def on_leave(data):
    #gotta figure this out username = session.get()
    room = data[room]
    leave_room(room)
    send(username + ' has left the room.', room=room)

if __name__ == '__main__':
    socketio.run(app, debug=True)