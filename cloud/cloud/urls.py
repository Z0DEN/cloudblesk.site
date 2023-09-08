
from django.contrib import admin
from django.urls import path
from django.urls import include

urlpatterns = [
    path('accounts', include("django.contrib.auth.urls")),
    path('registration/', include('registration.urls')),
    path('cloud_api/', include('cloud_api.urls')),
    path('db/', include('db.urls')),
    path('admin/', admin.site.urls),
]
