from django.urls import include
from django.urls import path
from . import views

urlpatterns = [
    path('createUser', views.createUser, name='createUser'),
    path('user_list', views.user_list, name='user_list'),
]