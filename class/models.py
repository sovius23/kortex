from django.db import models


class Class(models.Model):
    """
    #TODO Перенести поля из архитектуры, модель Class

    модель класса в который учитель будут добавлять учеников
    """


class Child(models.Model):
    """
    #TODO Перенести поля из архитектуры, модель Child

    модель ученика к которому будет привязаны ответные листы на тесты
    """