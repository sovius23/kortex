import graphene
from graphene_file_upload.scalars import Upload
from pydantic import BaseModel
from django.core.files import File
from typing import List


class BaseTaskMutationInputFields(graphene.InputObjectType):
    is_task_time_passing = graphene.Boolean()
    task_time_passing = graphene.Int()
    task_name = graphene.String()


class BaseTaskMutationInputFieldsInServer(BaseModel):
    is_task_time_passing = bool
    task_time_passing = int
    task_name = str


class ReadAndSayTaskInputs(BaseTaskMutationInputFields):
    task_theory = graphene.String()
    task_time_prepairing = graphene.Int()
    is_task_time_prepairing = graphene.Boolean()


class ReadAndSayTaskInputsInServer(BaseTaskMutationInputFieldsInServer):
    task_theory = str
    task_time_prepairing = int
    is_task_time_prepairing = bool


class AudioDialogTaskInputs(BaseTaskMutationInputFields):
    task_theory = Upload()


class AudioDialogInputsInServer(BaseTaskMutationInputFieldsInServer):
    task_theory = File


class ThemeSelectionAndSayTaskInputs(BaseTaskMutationInputFields):
    task_theory = graphene.String()
    task_themes = graphene.List(graphene.String())


class ThemeSelectionAndSaytaskInputFieldInServer(BaseTaskMutationInputFieldsInServer):
    task_theory = str
    task_themes = List[str]
