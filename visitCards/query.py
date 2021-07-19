import graphene
from graphene import relay
from .gqlTypes import VisitCardType
from .models import VisitCard

from graphene.relay.node import from_global_id


class Query(graphene.ObjectType):
    visit = graphene.Field(VisitCardType, id=graphene.String())

    get_visit_by_user = graphene.Field(VisitCardType, token=graphene.String())

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
        return info.context.user.visitcard