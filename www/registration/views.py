# from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render


def profile_view(request):
    return render(request, 'registration/profile.html')
