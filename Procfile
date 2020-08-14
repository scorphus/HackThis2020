web: yarn && yarn build && gunicorn -k flask_sockets.worker --chdir backend -w 1 app:app
