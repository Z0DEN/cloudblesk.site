from django.db import models

class User(models.Model):
    login = models.CharField(max_length=30)
    email = models.EmailField()
    password = models.CharField(max_length=100)
