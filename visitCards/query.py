import graphene
from graphene import relay
from .gqlTypes import VisitCardType


class Query(graphene.ObjectType):
    visit = relay.Node.Field(VisitCardType)

    get_visit_by_user = graphene.Field(VisitCardType, token=graphene.String())

    def resolve_get_visit_by_user(self, info, token):
        return info.context.user.visitcard