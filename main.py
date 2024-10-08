from otherFiles import app, socketio

#main 
if __name__ == '__main__':
    socketio.run(
        app,
        host="0.0.0.0",  # or 127.0.0.1
        port=8080,  # make sure this is a non privileged port
        debug=True  # this will allow us to easily fix problems and bugs
    )