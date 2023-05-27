import os
from django.core.asgi import get_asgi_application
from daphne import server

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cloud.settings')

application = get_asgi_application()

server.run(application, port=8000, interface='127.0.0.1', ssl_keyfile='/etc/letsencrypt/live/cloudblesk.site/privkey.pem', ssl_certfile='/etc/letsencrypt/live/cloudblesk.site/cert.pem')


#Этот файл настраивает ASGI-сервер `daphne`, чтобы он работал с вашим Django-приложением через ASGI-интерфейс. В параметрах функции `server.run()` вы можете указать порт, интерфейс, а также пути к файлам SSL-сертификата и ключа.
