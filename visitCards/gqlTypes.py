import graphene
from graphene_django import DjangoObjectType

from graphene import relay

from .models import VisitCard, Photo, Contacts, Project, GeoPos


class VisitCardType(DjangoObjectType):

    image_url = graphene.String()

    class Meta:
        model = VisitCard
        interfaces = [relay.Node]

    def resolve_image_url(self, info):
        try:
            return self.ProfilePhoto.url
        except:
            return ""


class PhotoType(DjangoObjectType):
    class Meta:
        model = Photo
        interfaces = [relay.Node]

    url = graphene.String()

    def resolve_url(self, info):
        return self.image.url


class ContactsType(DjangoObjectType):
    class Meta:
        model = Contacts
        interfaces = [relay.Node]


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        interfaces = [relay.Node]


class GeoPosType(DjangoObjectType):
    class Meta:
        model = GeoPos
        interfaces = [relay.Node]