from django.urls import path
from .views import GetCameras, GetFavorites, SetFavorites

urlpatterns = [
    path("camera", GetCameras.as_view()),
    path("favorite/", GetFavorites.as_view()),
    path("favorite/<pk>", SetFavorites.as_view())
]
