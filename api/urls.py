from django.urls import path
from .views import GetCameras

urlpatterns = [
    path("camera", GetCameras.as_view())
]