from django.db import models


class Class(models.Model):
    """
    #TODO Перенести поля из архитектуры, модель Class

    модель класса в который учитель будут добавлять учеников
    """
    name = models.TextField(null=True)


class Child(models.Model):
    """
    #TODO Перенести поля из архитектуры, модель Child

    модель ученика к которому будет привязаны ответные листы на тесты
    """

    name = models.CharField(max_length=50, null=True)
    surname = models.TextField(null=True)
    my_class = models.ForeignKey(to=Class, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return "Child({})".format(self.name)