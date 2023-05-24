from django.shortcuts import render
from django.http import HttpResponseBadRequest, JsonResponse

def sum(request):
    if request.method == 'POST':
        num1 = request.POST.get('num1')
        num2 = request.POST.get('num2')
        if num1 is not None and num2 is not None:
            try:
                num1 = int(num1)
                num2 = int(num2)
                result = num1 + num2
                return JsonResponse({'result': result})
            except ValueError:
                return HttpResponseBadRequest('Invalid input')
        else:
            return HttpResponseBadRequest('Missing input parameters')
    else:
        return HttpResponseBadRequest('Invalid request method')