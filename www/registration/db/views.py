from django.shortcuts import render
from django.http import HttpResponse
from .models import User

def createUser(request):
	if request.method == 'POST':
			# получаем данные из POST запроса
			login = request.POST.get('login')
			email = request.POST.get('email')
			password = request.POST.get('password')

			# создаем новый объект пользователя и сохраняем его в базе данных
			user = User(login=login, email=email, password=password)
			user.save()

			# возвращаем ответ клиенту об успешном создании пользователя
			return HttpResponse("User created successfully")
	
	else:
		return HttpResponse("User have not created")
		


# def cookieSet(request):
#     response = HttpResponse("Hello, world!")
#     response.set_cookie('sessionid', '12345', max_age=3600, secure=True)
#     return response	