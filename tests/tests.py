from django.test import TestCase
from .models import Test, AudioDialogTask, ReadAndSayTask, ThemeSelectionAndSayTask
from django.contrib.auth.models import User
from classes.models import Class


class TestTestCase(TestCase):
    test = None

    def setUp(self):
        user = User.objects.create_user(username="Joe", password="123")
        self.test = Test.objects.create(name="name", author=user)

    def test_basic_settings(self):
        self.assertEqual(self.test.name, "name")
        self.assertEqual(self.test.author.id, User.objects.get(username="Joe").id)
        self.assertNotEqual(self.test.verbose_id.length, "")

    def test_add_class(self):
        self.test.classes.add(Class())
        self.assertEqual(self.test.classes.count(), 1)

    def test_audio_dialog_tasks(self):
        self.test.audio_dialog_tasks.add(AudioDialogTask(position_in_test=1))
        self.assertEqual(self.test.audio_dialog_tasks.count(), 1)

    def test_read_and_say_tasks(self):
        self.test.read_and_say_task.add(ReadAndSayTask(position_in_test=2))
        self.assertEqual(self.test.read_and_say_task.count(), 1)

    def test_theme_selection_and_say_task(self):
        self.test.theme_selection_and_say_task.add(ThemeSelectionAndSayTask(position_in_test=3))
        self.assertEqual(self.test.theme_selection_and_say_task.count(), 1)

    def test_return_sorted_tasks(self):
        data = self.test.get_all_task_type_and_id().all()
        self.assertEqual(AudioDialogTask.objects.get(id=data[0].id).position_in_test, 1)
        self.assertEqual(ReadAndSayTask.objects.get(id=data[1].id).position_in_test, 2)
        self.assertEqual(ThemeSelectionAndSayTask.objects.get(id=data[2].id).position_in_test, 3)


class AudioDialogTaskTestCase(TestCase):
    task = None

    def setUp(self):
        user = User.objects.create_user(username="Joe1", password="123")
        test = Test.objects.create(author=user, name="name")
        self.task = AudioDialogTask.objects.create(theory="theory", test=test, is_time_preparing=True,
                                                   is_time_passing=True, time_preparing=100, time_passing=120,
                                                   max_mark=3)

    def test_base_fields_of_task(self):
        self.assertEqual(self.task.theory, "theory")
        self.assertEqual(self.task.is_time_prepairing, False)
        self.assertEqual(self.task.is_time_passing, True)
        self.assertEqual(self.task.max_mark, 3)


class ReadAndSayTextTestCase(TestTestCase):
    task = None

    def setUp(self):
        user = User.objects.create_user(username="Joe1", password="123")
        test = Test.objects.create(author=user, name="name")
        self.task = ReadAndSayTask.objects.create(theory="theory", test=test, is_time_preparing=True,
                                                   is_time_passing=True, time_preparing=100, time_passing=120,
                                                   max_mark=3)

    def test_base_fields_of_task(self):
        self.assertEqual(self.task.theory, "theory")
        self.assertEqual(self.task.is_time_prepairing, True)
        self.assertEqual(self.task.is_time_passing, True)
        self.assertEqual(self.task.max_mark, 3)


class ThemeSelectionTest(TestCase):
    task = None

    def setUp(self):
        user = User.objects.create_user(username="Joe1", password="123")
        test = Test.objects.create(author=user, name="name")
        self.task = ThemeSelectionAndSayTask.objects.create(theory="theory", test=test, is_time_preparing=True,
                                                   is_time_passing=True, time_preparing=100, time_passing=120,
                                                   max_mark=3)

    def test_base_fields_of_task(self):
        self.assertEqual(self.task.theory, "theory")
        self.assertEqual(self.task.is_time_prepairing, True)
        self.assertEqual(self.task.is_time_passing, True)
        self.assertEqual(self.task.max_mark, 3)