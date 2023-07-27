from django.shortcuts import render
from django.contrib.auth.decorators import login_required

def reg_view(request):
    return render(request, 'registration/login.html')


@login_required
def profile_view(request):
    return render(request, 'registration/profile.html')