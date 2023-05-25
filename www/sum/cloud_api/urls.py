from django.urls import include
from django.urls import path
from . import views

urlpatterns = [
    path('sum', views.sum, name='sum'),
]
