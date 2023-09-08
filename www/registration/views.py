from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie


def reg_view(request):
    return render(request, 'registration/login.html')


@login_required
@ensure_csrf_cookie
def profile_view(request):
    return render(request, 'registration/profile.html')