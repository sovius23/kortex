from django.db import models


class Position(models.Model):
    longitude = models.FloatField()
    latitude = models.FloatField()


class Camera(models.Model):
    position = models.ForeignKey(Position, on_delete=models.CASCADE)
    image = models.ImageField(null=True)
