from rest_framework.serializers import ModelSerializer
from backend.models import Position, Camera


class PositionSerializer(ModelSerializer):
    class Meta:
        model = Position
        fields = ["longitude", "latitude"]


class CameraSerializer(ModelSerializer):
    position = PositionSerializer()

    class Meta:
        model = Camera
        fields = ["image", "position", "id"]