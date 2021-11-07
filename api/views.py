from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveUpdateAPIView
from .serializers import CameraSerializer, FavoriteSerializer, ProfileSerializer, UserSerializer
from backend.models import Camera, Favorites, Profile
from rest_framework.response import Response
from rest_framework import permissions
from django.contrib.auth.models import User
from rest_framework_jwt.authentication import JSONWebTokenAuthentication


class GetCameras(ListAPIView):
    queryset = Camera.objects.all()
    serializer_class = CameraSerializer


class GetFavorites(ListCreateAPIView):
    queryset = Favorites.objects.all()
    serializer_class = FavoriteSerializer


class SetFavorites(RetrieveUpdateDestroyAPIView):
    queryset = Favorites.objects.all()
    serializer_class = FavoriteSerializer


class ProfileDetails(RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class GetUser(APIView):
    #queryset = User.object.all()
    serializer_class = UserSerializer
    authentication_classes = [JSONWebTokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)
