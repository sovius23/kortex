from rest_framework.serializers import ModelSerializer
from backend.models import Position, Camera, Favorites, Profile
from django.contrib.auth.models import User


class PositionSerializer(ModelSerializer):
    class Meta:
        model = Position
        fields = ["longitude", "latitude"]


class CameraSerializer(ModelSerializer):
    position = PositionSerializer()

    class Meta:
        model = Camera
        fields = ["image", "position", "id"]


class FavoriteSerializer(ModelSerializer):
    class Meta:
        model = Favorites
        fields = ["name", "camera", "id"]


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ["id", "name", "surname", "midname", "photo", "email", "user", "tel"]


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        write_only_fields = ('password')
        read_only_fields = ('profile_set')
