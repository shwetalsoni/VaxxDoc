from app.main import app
from app.config import config

if __name__ == "__main__":
    debug = False
    if 'debug' in config and config['debug']:
        debug = True
    app.run(debug=debug)
