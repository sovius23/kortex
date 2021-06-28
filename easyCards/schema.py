import graphene
import visitCards.query
import visitCards.mutation
import graphql_jwt


class Query(visitCards.query.Query, graphene.ObjectType):
    pass


class Mutation(visitCards.mutation.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
