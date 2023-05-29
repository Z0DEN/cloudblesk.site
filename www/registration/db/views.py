from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User
import json

@csrf_exempt
def createUser(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user = User.objects.create(
            login=data['login'],
            email=data['email'],
            password=data['password'],
        )
        return JsonResponse({'success': True, 'message': 'User was created successfully'})
    else:
        return JsonResponse({'success':False, 'message': 'Invalid request method'})
		


# def cookieSet(request):
#     response = HttpResponse("Hello, world!")
#     response.set_cookie('sessionid', '12345', max_age=3600, secure=True)
#     return response	