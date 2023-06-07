from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
from datetime import datetime
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
            reg_date=datetime.now(),
        )
        return JsonResponse({'success': True, 'message': 'User was created successfully'})
    else:
        return JsonResponse({'success':False, 'message': 'Invalid request method'})
		


def process_image(request):
    if request.method == 'POST':
        image_file = request.FILES['image']
        image = Image.open(image_file)
        
        pixels_array = []
        pixels = image.load()
        for i in range(image.width):
            for j in range(image.height):
                color = pixels[i, j]
                pixels_array.append(color)
                
        response_data = {'pixels': pixels_array}
        return JsonResponse(response_data)


# @csrf_exempt
# def user_list(request):
#     users = User.objects.all().values()
#     data_list = list(users)
#     return JsonResponse(data_list, safe=False)


# def cookieSet(request):
#     response = HttpResponse("Hello, world!")
#     response.set_cookie('sessionid', '12345', max_age=3600, secure=True)
#     return response	