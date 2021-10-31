from django.shortcuts import render

from rest_framework.generics import ListAPIView
from .serializers import CameraSerializer
from backend.models import Camera


class GetCameras(ListAPIView):
    queryset = Camera.objects.all()
    serializer_class = CameraSerializer
