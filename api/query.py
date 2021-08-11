from graphene import ObjectType
import graphene
from .types import TestType, ClassType, ChildType, AudioDialogTaskType, ReadAndSayTaskType, \
    ThemeSelectionAndSayTaskType, AnswerSheetType, ReadAndSayAnswerType, ThemeSelectionAndSayAnswerType, \
    AudioDialogAnswerType
from tests.interfaces import ITaskBriefDescr
from answers.interfaces import IAnswerBriefDescr


class Query(ObjectType):
    allTestsByUser = graphene.Field(graphene.List(TestType), token=graphene.String())
    allClassesByUser = graphene.Field(graphene.List(ClassType), token=graphene.String())
    classDetails = graphene.Field(ClassType, class_id=graphene.ID())
    allChildByClass = graphene.Field(graphene.List(ChildType), class_id=graphene.ID())
    getSortedByPositionInTestBriefTaskDescrsOfTest = graphene.Field(
        graphene.List(ITaskBriefDescr(graphql=True)),
        test_id=graphene.ID()
    )
    getSortedByPositionInTestBriefAnswersDescrsOfTest = graphene.Field(
        graphene.List(IAnswerBriefDescr(graphql=True)),
        answer_sheet_id=graphene.ID()
    )
    testDetails = graphene.Field(TestType, test_id=graphene.ID())
    dialogTaskDetails = graphene.Field(AudioDialogTaskType, dialog_task_id=graphene.ID())
    readAndSayTaskDetails = graphene.Field(ReadAndSayTaskType, read_and_say_task_id=graphene.ID())
    themeSelectionAndSayTaskDetails = graphene.Field(ThemeSelectionAndSayTaskType,
                                                     theme_selection_and_say_task_id=graphene.ID())
    answerSheetsInTest = graphene.Field(graphene.List(AnswerSheetType), test_id=graphene.ID())
    answerSheetDetails = graphene.Field(AnswerSheetType, answer_sheet_id=graphene.ID())
    readAndSayAnswerDetails = graphene.Field(ReadAndSayAnswerType,
                                             read_and_say_answer_details_id=graphene.ID())
    themeSelectionAndSayAnswerDetails = graphene.Field(ThemeSelectionAndSayAnswerType,
                                                       theme_selection_and_say_answer_id=graphene.ID())
    audioDialogAnswerDetails = graphene.Field(
        AudioDialogAnswerType,
        audio_dialog_answer_id=graphene.ID()
    )
