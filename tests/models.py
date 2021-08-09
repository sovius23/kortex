from django.db import models


class BaseTask(models.Model):

    """
    #TODO Сюда добавить поля из архитектуры, модель BaseTask
    базовый класс задания
    """
    class Meta:
        abstract = True


class AudioDialogTask(BaseTask):
    """
    #TODO Сюда добавить поля из архитектуры, модель AudioDialogTask
    модель класса задания где ученик должен отвечать на вопросы услышанные в аудиофайле
    """


class ReadAndSayTask(BaseTask):
    """
    #TODO Сюда добавить поля из архитектуры, модель ReadAndSayTask
    модель класса задания где ученик должен прочитать текст с подготовкой
    """


class ThemeSelectionAndSayTask(BaseTask):
    """
    #TODO Сюда добавить поля из архитектуры, модель ThemeSelectionAndSayTask
    модель класса задания где ученик должен выбрать тему и составить по ней монолог
    """


class Test(models.Model):
    """
    #TODO Сюда добавить поля из архитектуры, модель Test
    модель теста
    """

    def get_all_task_type_and_id(self):
        """
        #TODO реализовать фунцкию
        :return: Queryset отсортированный по полю position_in_test
        """
        pass