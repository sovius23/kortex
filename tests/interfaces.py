from collections import namedtuple
from graphene import ObjectType
import graphene


class ITaskBriefDescrGrapql(ObjectType):
    id = graphene.ID()
    type = graphene.String()


class ITaskBriefDescr:
    """
    Определяется интерфейс который используется для того чтобы вернуть весь список заданий
    в едином списке со строгой типизацией (мы не можем это сделать без приведения всех заданий
    к общему интерфейсу потому что графкл требует от нас чтобы мы указали конкретный возвращаемый тип
    а все задания у нас имеют разные типы и поля)

    интерфейс может быть определен для разных мест программы: для указания возвращаемого типа в api или
    для сборки списка для этого типа, в первом случае мы используем graphene.ObjectType (флаг graphql=True),
    во втором collections.namedtuple (флаг graphql=False)

    кодом вызывать так: ITaskBriefDescr(graphql=False) - вернет интерфейс для работы внутри сервера (graphql = True -
    вернет интерфейс для указания типа graphql
    """

    graphql: bool = None

    def __init__(self, graphql=False):
        self.graphql = graphql

    def __new__(cls, **kwargs):
        if kwargs.get("graphql"):
            return ITaskBriefDescrGrapql
        else:
            return namedtuple("ITaskBriefDescr", ["id", "type"])