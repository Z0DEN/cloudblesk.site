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
    # Allow only POST requests
    if request.method != 'POST':
        return JsonResponse({'success': False, 'message': 'Invalid request method'}, status=405)

    # Parse request data as JSON
    try:
        data = request.POST.dict()
        user = User.objects.create(**data)
        return JsonResponse({'success': True, 'message': 'User was created successfully'})
    except Exception:
        return JsonResponse({'success': False, 'message': 'Invalid data provided'}, status=400)


@csrf_exempt
def process_image(request):
    if request.method == 'POST':
        image_file = request.FILES.get('file')
        if image_file:
            # Open the image file using Pillow
            image = Image.open(image_file)

            # Get the width and height of the image
            # width, height = image.size

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