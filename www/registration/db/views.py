from django.views.decorators.csrf import csrf_exempt
from django.core.files.base import ContentFile
from django.http import JsonResponse
from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime
from .models import User
from PIL import Image
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
		


@csrf_exempt
def process_image(request):
    if request.method == 'POST':
        image_file = request.FILES.get('file')
        if image_file:
            # Open the image file using Pillow
            image = Image.open(image_file)

            # Get the width and height of the image
            # width, height = image.size

            # pixels = []

            # pixels = list(image.getdata())
            pixels = [list(pixel) for pixel in image.getdata()]


            # Return the list of pixels as a JSON response
            return JsonResponse(pixels, safe=False)
        else:
            # Return an error response if there is no image file
            return JsonResponse({'error': 'No image file provided'}, status=400)
    else:
        # Return an error response for non-POST requests
        return JsonResponse({'error': 'Unsupported request method'}, status=405)




@csrf_exempt
def user_list(request):
    users = User.objects.all().values()
    data_list = list(users)
    return JsonResponse(data_list, safe=False)


# def cookieSet(request):
#     response = HttpResponse("Hello, world!")
#     response.set_cookie('sessionid', '12345', max_age=3600, secure=True)
#     return response	