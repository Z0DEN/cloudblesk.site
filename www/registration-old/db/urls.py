from django.contrib.auth.views import LoginView
from django.urls import include
from django.urls import path
from . import views

urlpatterns = [
    path('createUser', views.createUser, name='createUser'),
    path('user_list', views.user_list, name='user_list'),
    path('process_image', views.process_image, name='process_image'),
    path('login/', LoginView.as_view(template_name='login.html'), name='login'),
]