web: pushd frontend && yarn && yarn build && popd && gunicorn -k flask_sockets.worker --chdir backend -w 1 app:app
