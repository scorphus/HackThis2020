from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__, template_folder='../templates')

app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/<from_user>/messages/<to_user>')
def sessions(from_user,to_user):
    return render_template('message.html')

def messageReceived(methods=['GET', 'POST']):
    print('Message Received')

@socketio.on('join')
def join_chat(data):
    username = data['username']
    room = data['room']
    socketio.join_room(room)
    socketio.send(username + ' has now joinned the chat.')

@socketio.on('my event')
def send_message_info(message_info, methods=['GET', 'POST']):
    print('received my event: '+ str(message_info))
    socketio.emit("my response", message_info, callback=messageReceived) #json info includes from_username, timestamp, message id, and message content.

if __name__ == '__main__':
    socketio.run(app, debug=True)