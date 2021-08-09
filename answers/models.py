from django.db import models


class BaseAnswer(models.Model):
    """
    #TODO Перенести поля из архитектуры, модель BaseAnswer
    модель базового ответа
    """

    class Meta:
        abstract = True


class AudioDialogAnswer(models.Model):
    """
    #TODO Перенести поля из архитектуры, модель AudioDialogAnswer
    модель ответа задания в котором ученик должен отвечать на вопросы услышанные в аудиофайле
    """


class ReadAndSayAnswer(models.Model):
    """
    #TODO Перенести поля из архитектуры, модель ReadAndSayAnswer
    модель ответа задания в котором ученик должен читать текст после подготовки
    """


class ThemeSelectionAndSayAnswer(models.Model):
    """
    #TODO Перенести поля из архитектуры, модель ThemeSelectionAndSayAnswer
    модель ответа задания в котором ученик должен составить монолог на выбранную тему
    """


class AnswerSheet(models.Model):
    """
    #TODO Перенести поля из архитектуры, модель AnswerSheet
    модель списка ответов, используется для связи всех ответов с конкретным тестом и учеником
    упрощает процесс обработки ответов на клиенте, вместо того чтобы выплевывать все задания
    принадлежащие тесту и на клиенте определять какому пользователю они принадлежат можно просто
    вернуть список списков ответов и клиент получит сразу остортированный по пользователям список ответов
    """

    def get_all_answers_type_and_id(self):
        """
        #TODO реализовать функцию
        :return: QuerySet отсортированный по номеру задания ответа
        """