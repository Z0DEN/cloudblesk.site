from .views import profile_view
from django.urls import path

urlpatterns = [
    path('profile', profile_view, name="profile"),
]
