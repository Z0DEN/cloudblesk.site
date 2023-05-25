from django.shortcuts import render
from django.http import HttpResponse

def sum(request):
	num1 = int(request.GET.get("num1"))
	num2 = int(request.GET.get("num2"))
	result = num1 * num2
	return HttpResponse(result)