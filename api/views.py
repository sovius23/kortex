import os
from datetime import date

from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveUpdateAPIView
from .serializers import CameraSerializer, FavoriteSerializer, ProfileSerializer
from backend.models import Camera, Favorites, Profile, History

from api.service.report_handler import report_handler, report_to_save, file_response


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


# class GetUser(APIView):
#     authentication_classes = [JSONWebTokenAuthentication]
#     permission_classes = [permissions.IsAuthenticated]
#
#     def get(self, request, format=None):
#
#         photo = request.user.profile_set.get().photo if request.user.profile_set.get().photo else "/images/user.jpg"
#
#         result = {
#             "name": request.user.profile_set.get().name,
#             "surname": request.user.profile_set.get().surname,
#             "midname": request.user.profile_set.get().midname,
#             "photo": photo,
#             "email": request.user.profile_set.get().email,
#             "tel": request.user.profile_set.get().tel,
#         }
#         return Response(result)


class CreateReport(APIView):
    def post(self, request):
        now = date.today()
        name = now.strftime("%d-%m-%Y") + '-Report.docx'

        doc = report_handler(request,History)
        doc.save(name)
        try:
            response = report_to_save(History, name)
        finally:
            os.remove(name)
        return response

    def get_report(self,id):
        file = History.objects.get(pk=id).file
        return file_response(file)
