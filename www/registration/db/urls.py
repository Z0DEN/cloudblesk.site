from django.urls import include
from django.urls import path
from . import views

urlpatterns = [
    path('user_req', views.user_req, name='user_req'),
]