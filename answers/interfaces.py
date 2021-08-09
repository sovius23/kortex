from collections import namedtuple
from graphene import ObjectType
import graphene


class IAnswerBriefDescrGraphql(ObjectType):
    id = graphene.ID()
    type = graphene.String()


class IAnswerBriefDescr:
    """
    Класс по функционалу схожий с ITaskBriefDescription, для подробного пояснения зачем он нужен
    и как его использовать можно прочитать его спецификацию
    """

    def __init__(self, graphql=False):
        pass

    def __new__(cls, *args, **kwargs):
        if kwargs.get("graphql"):
            return IAnswerBriefDescrGraphql()
        return namedtuple("IAnswerBriefDescr", ["id", "type"])