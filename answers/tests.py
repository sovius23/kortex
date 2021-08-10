from django.test import TestCase
from tests.models import Test
from .models import AnswerSheet, AudioDialogAnswer, ReadAndSayAnswer, ThemeSelectionAndSayAnswer
from classes.models import Child


class AnswerSheetTestCase(TestCase):
    test = None
    answerSheet = None
    child = None

    def setUp(self):
        self.test = Test.objects.create()
        self.answerSheet = AnswerSheet.objects.create(test=self.test)
        self.child = Child.objects.create(name="name", surname="surname", answer_sheets=[self.answerSheet])

    def test_answer_sheet(self):
        self.assertEqual(self.answerSheet.test.id, self.test.id)
        self.assertEqual(self.answerSheet.child.id, self.child.id)

    def test_audio_answer(self):
        self.answerSheet.audio_dialog_answers.add(AudioDialogAnswer())
        self.assertEqual(self.answerSheet.audio_dialog_answers.count(), 1)

    def test_read_and_say_answer(self):
        self.answerSheet.read_and_say_answers.add(ReadAndSayAnswer())
        self.assertEqual(self.answerSheet.read_and_say_answers.count(), 1)

    def test_theme_selection_and_say_answer(self):
        self.answerSheet.theme_selection_and_say_answers.add(ThemeSelectionAndSayAnswer())
        self.assertEqual(self.answerSheet.theme_selection_and_say_answers.count(), 1)