from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_protect


@csrf_protect
def home(request):
    return render(request, 'main/home.html')

