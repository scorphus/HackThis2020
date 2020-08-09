from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__, template_folder='../templates')

app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/<from_user>/messages/<to_user>')
def sessions(from_user,to_user):
    # maybe add authentication in the future
    return render_template('message.html', from_user = from_user, to_user = to_user)

def messageReceived(methods=['GET', 'POST']):
    print('Message Received')

@socketio.on('message')
def message(data):
    socketio.send(data)

if __name__ == '__main__':
    socketio.run(app, debug=True)