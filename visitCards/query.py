import graphene
from graphene import relay
from .gqlTypes import VisitCardType
from .models import VisitCard
from django.db.models import Count

from graphene.relay.node import from_global_id
import requests as r


class Query(graphene.ObjectType):
    visit = graphene.Field(VisitCardType, id=graphene.String())

    visits_empty = graphene.List(VisitCardType)
    visits = graphene.List(VisitCardType)

    get_visit_by_user = graphene.Field(VisitCardType, token=graphene.String())

    is_card_empty = graphene.Field(graphene.Boolean, card_id=graphene.ID())

    get_fb_images = graphene.Field(graphene.List(graphene.String), card_id=graphene.ID())

    def resolve_visits(self, info):
        return VisitCard.objects.all()

    def resolve_get_fb_images(self, info, card_id):
        card = VisitCard.objects.get(
            id=from_global_id(card_id)[1]
        )
        res = r.get("https://vast-cliffs-90856.herokuapp.com/?username={}".format(card.inst_username))
        print(res.json())
        return res.json()

    def resolve_is_card_empty(self, info, card_id):
        ok = False
        try:
            card = VisitCard.objects.get(
                id=from_global_id(card_id)[1]
            )
            if card.user.count() == 0:
                ok = True
        except:
            ok = False
        return ok

    def resolve_visits_empty(self, info):
        return VisitCard.objects.annotate(user_count=Count("user")).filter(user_count=0)

    def resolve_visit(self, info, id):
        card = None
        try:
            card = VisitCard.objects.get(
                id=from_global_id(id)[1]
            )
        except:
            card = VisitCard.objects.get(
                verb_id=id
            )
        return card

    def resolve_get_visit_by_user(self, info, token):
        print(info.context)
        return info.context.user.visitcard_set.all()[0]