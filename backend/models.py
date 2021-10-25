from django.db import models


class Position(models.Model):
    longitude = models.FloatField()
    latitude = models.FloatField()


class Camera(models.Model):
    position = models.ForeignKey(Position, on_delete=models.CASCADE)
    name = models.TextField()


class Favorites(models.Model):
    user = models.ForeignKey()
    cameras = models.ManyToManyField(Camera, on_delete=models.CASCADE)
