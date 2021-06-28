from django.urls import path, re_path
from .views import getFront

urlpatterns = [
    re_path(r"/*", getFront)
]