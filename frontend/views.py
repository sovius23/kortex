from django.shortcuts import render


def getFront(request, *args, **kwargs):
    return render(request, "frontend/index.html")