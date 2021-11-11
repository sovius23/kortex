from django.urls import path
from .views import GetCameras, GetFavorites, SetFavorites, ProfileDetails, GetUser
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path("camera", GetCameras.as_view()),
    path("favorite/", GetFavorites.as_view()),
    path("favorite/<pk>", SetFavorites.as_view()),
    path('auth', obtain_jwt_token),
    path("profile_details/<pk>", ProfileDetails.as_view()),
    path("my-user", GetUser.as_view()),

]
