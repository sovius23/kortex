"""
Файл с определениями типов для возможности использования моделей из django orm
во входных и выходных типов graphql
"""

from classes.models import Class, Child
from answers.models import AnswerSheet, AudioDialogAnswer, ReadAndSayAnswer, ThemeSelectionAndSayAnswer
from tests.models import Test, ReadAndSayTask, AudioDialogTask, ThemeSelectionAndSayTask

from graphene_django import DjangoObjectType


class ClassType(DjangoObjectType):
    class Meta:
        model = Class


class ChildType(DjangoObjectType):
    class Meta:
        model = Child


class AnswerSheetType(DjangoObjectType):
    class Meta:
        model = AnswerSheet


class AudioDialogAnswerType(DjangoObjectType):
    class Meta:
        model = AudioDialogAnswer


class ThemeSelectionAndSayAnswerType(DjangoObjectType):
    class Meta:
        model = ThemeSelectionAndSayAnswer


class ReadAndSayAnswerType(DjangoObjectType):
    class Meta:
        model = ReadAndSayAnswer


class ReadAndSayTaskType(DjangoObjectType):
    class Meta:
        model = ReadAndSayTask


class ThemeSelectionAndSayTaskType(DjangoObjectType):
    class Meta:
        model = ThemeSelectionAndSayTask


class AudioDialogTaskType(DjangoObjectType):
    class Meta:
        model = AudioDialogTask


class TestType(DjangoObjectType):
    class Meta:
        model = Test
