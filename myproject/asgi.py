import os
from django.core.asgi import get_asgi_application
from daphne import server

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')

application = get_asgi_application()

server.run(application, port=8001, interface='127.0.0.1', ssl_keyfile='/etc/letsencrypt/live/cloudblesk.site/privkey.pem', ssl_certfile='/etc/letsencrypt/live/cloudblesk.site/cert.pem')
