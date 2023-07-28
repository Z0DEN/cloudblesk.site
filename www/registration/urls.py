from .views import reg_view
from .views import profile_view
from django.urls import path

urlpatterns = [
    path('reg', reg_view, name="reg"),
    path('profile', profile_view, name="profile"),
]
