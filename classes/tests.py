from django.test import TestCase

from .models import Class, Child


class ClassTestCase(TestCase):
    myClass = None

    def setUp(self):
        child = Child.objects.create()
        self.myClass = Class.objects.create(name="Name", children=[child])

    def test_base_fields(self):
        self.assertEqual(self.myClass.name, "Name")
        self.assertEqual(self.myClass.children.all().count(), 1)


class ChildTestCase(TestCase):
    child = None

    def setUp(self):
        self.child = Child.objects.create(name="name", surname="surname")

    def child_test(self):
        self.assertEqual(self.child.name, "name")
        self.assertEqual(self.child.surname, "surname")