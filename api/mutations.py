import graphene
from .types import TestType, ClassType, ChildType, ReadAndSayTaskType, AudioDialogTaskType, \
    ThemeSelectionAndSayTaskType, AnswerSheetType, ReadAndSayAnswerType, ThemeSelectionAndSayAnswerType, \
    AudioDialogAnswerType
from .inputs import ReadAndSayTaskInputs, AudioDialogTaskInputs, ThemeSelectionAndSayTaskInputs, \
    AudioDialogInputsInServer, ReadAndSayTaskInputsInServer, ThemeSelectionAndSaytaskInputFieldInServer
from graphene_file_upload.scalars import Upload


class CreateTest(graphene.Mutation):
    """
    мутация для создания теста
    """
    class Arguments:
        token = graphene.String()
        test_name = graphene.String()

    test = graphene.Field(TestType)

    @classmethod
    def mutate(cls, root, info, token, test_name):
        """
        :param root: не ибу, graphql требует чтобы было
        :param info: информация про запрос, самое нужное что там лежит: info.context.user - пользователь
            который делает мутацию
        :param token: токен по которому определяется пользователь
        :param test_name: имя теста который нужно создать
        :return: CreateTest(test=<new_test_instance>)
        """
        pass


class ChangeTestName(graphene.Mutation):
    """
    мутация для изменения имени теста
    """
    class Arguments:
        test_id = graphene.String()
        new_name = graphene.String()

    test = graphene.Field(TestType)

    @classmethod
    def mutate(cls, root, info, test_id, new_name):
        """
        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param test_id: id теста имя которого надо изменить
        :param new_name: новое имя теста
        :return: ChangeTestName(test=<test_instance>)
        """


class DeleteTest(graphene.Mutation):
    """
    мутация для удаления теста
    """
    class Arguments:
        test_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, test_id):
        """

        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param test_id: id теста которого надо удалить
        :return: DeleteTest(ok=True)
        """


class AddClassToTest(graphene.Mutation):
    """
    мутация для добавления класса к тесту
    """
    class Arguments:
        test_id = graphene.ID()
        class_id = graphene.ID()

    test = graphene.Field(TestType)

    @classmethod
    def mutate(cls, root, info, test_id, class_id):
        """

        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param test_id: id теста к возможности прохождения которого надо добавить класс
        :param class_id: id класса который надо добавить к тесту
        :return: AddClassToTest(test=<test_instance>)
        """


class RemoveClassFromTest(graphene.Mutation):
    """
    мутация для удаления класса из теста
    """
    class Arguments:
        test_id = graphene.ID()
        class_id = graphene.ID()

    test = graphene.Field(TestType)

    @classmethod
    def mutate(cls, root, info, test_id, class_id):
        """
        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param test_id: id теста из возможности прохожденя которого надо убрать класс
        :param class_id: id класса который надо убрать из теста
        :return: RemoveClassFromTest(test=<test_instance>)
        """


class CreateClass(graphene.Mutation):
    """
    мутация для создания класса
    """
    class Arguments:
        class_name = graphene.String()
        token = graphene.String()

    class_instance = graphene.Field(ClassType)

    @classmethod
    def mutate(cls, root, info, class_name, token):
        """
        :param root: /см CreateTest/
        :param info:  /см CreateTest/
        :param class_name: имя класса который надо создать
        :param token: токен пользователя для которого надо создать класс
        :return: CreateClass(class_instance=<class_instance>)
        """


class ChangeClassName(graphene.Mutation):
    """
    мутация для изменения имени класса
    """

    class Arguments:
        class_name = graphene.String()
        class_id = graphene.ID()

    class_instance = graphene.Field(ClassType)

    @classmethod
    def mutate(cls, root, info, class_name, class_id):
        """
        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param class_name: новое имя класса
        :param class_id: id класса имя которого надо поменять
        :return: ChangeClassName(class_instance=<class_instance>)
        """


class AddChildToClass(graphene.Mutation):
    """
    мутация для добавления учеников к классу
    """

    class Arguments:
        child_id = graphene.ID()
        class_id = graphene.ID()

    class_instance = graphene.Field(ClassType)

    @classmethod
    def mutate(cls, root, info, child_id, class_id):
        """

        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param child_id: id ученика которого надо добавить в класс
        :param class_id: id класса в который надо добавить ученика
        :return: AddChildToClass(class_instance=<class_instance>)
        """


class DeleteClass(graphene.Mutation):
    """
    мутация для удаления класса
    """

    class Arguments:
        class_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, class_id):
        """

        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param class_id: id класса который надо удалить
        :return: DeleteClass(ok=True)
        """


class CreateChild(graphene.Mutation):
    """
    мутация для создания ученка
    """

    class Arguments:
        child_name = graphene.String()
        child_surname = graphene.String()
        class_id = graphene.ID()

    child = graphene.Field(ChildType)

    @classmethod
    def mutate(cls, root, info, child_name, child_surname, class_id):
        """

        :param root:  /см CreateTest/
        :param info:  /см CreateTest/
        :param child_name: имя ученика
        :param child_surname: фамилия ученика
        :param class_id: id класса к которому надо добавить ученика
        :return: CreateChild(child=<child_instance>)
        """


class ChangeChildCreds(graphene.Mutation):
    """
    мутация для изменения имени и фамилии ученика
    """

    class Arguments:
        new_child_name = graphene.String()
        new_child_surname = graphene.String()
        child_id = graphene.ID()

    child = graphene.Field(ChildType)

    @classmethod
    def mutate(cls, root, info, new_child_name, new_child_surname, child_id):
        """

        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param new_child_name: новое имя ученика
        :param new_child_surname: новая фамилия ученика
        :param child_id: id ученика имя и фамилию которого надо поменять
        :return: ChangeChildCreds(child=<child_instance>)
        """


class DeleteChild(graphene.Mutation):
    """
    мутация для удаления ученика
    """

    class Arguments:
        child_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, child_id):
        """

        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param child_id: id ученика которого надо удалить
        :return: DeleteChild(ok=True)
        """


class CreateReadAndSayTask(graphene.Mutation):
    """
    мутация для создания задания где ученик должен читать текст
    """
    class Arguments:
        test_id = graphene.ID()
        inputs = ReadAndSayTaskInputs()

    task = graphene.Field(ReadAndSayTaskType)

    @classmethod
    def mutate(cls, root, info, test_id, inputs: AudioDialogInputsInServer):
        """
        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param test_id: id теста
        :param inputs: поля которые прилетают на сервер для создания ReadAndSayTask,
        типы написаны, но если что объект такого формата:
        {
            is_task_time_passing: boolean,
            task_time_passing: int,
            task_name: string,
            task_theory: string,
            task_time_prepairing: int,
            is_time_prepairing: boolean
        } (position_in_test должен генерироваться автоматически чтобы задание добавлялось
        в конец теста)
        :return: CreateReadAndSayTask(task=<task_inputs>)
        """


class CreateThemeSelectionAndSayTask(graphene.Mutation):
    """
    мутация для создания задания где пользователь должен выбирать тему а после записывать на нее монолог
    """

    class Arguments:
        test_id = graphene.ID()
        inputs = ThemeSelectionAndSayTaskInputs()

    task = ThemeSelectionAndSayTaskType()

    @classmethod
    def mutate(cls, root, info, test_id, inputs: ThemeSelectionAndSaytaskInputFieldInServer):
        """
        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param test_id: id теста к которому надо добавить задание
        :param inputs: поля которые прилетают на сервер для создания ThemeSelectionAndSayTask,
        типы написаны, но если что объект такого формата:
        {
            is_task_time_passing: boolean,
            task_time_passing: int,
            task_name: string,
            task_theory: string,
            task_themes: string[]
        } (position_in_test должен генериться автоматически (CreateReadAndSayTextTask)
        :return: CreateThemeSelectionAndSay(task=<task_instance>)
        """


class CreateAudioDialogTask(graphene.Mutation):
    class Arguments:
        test_id = graphene.ID()
        inputs = AudioDialogTaskInputs()

    task = graphene.Field(AudioDialogTaskType)

    @classmethod
    def mutate(cls, root, info, test_id, inputs: AudioDialogInputsInServer):
        """

        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param test_id: id теста в который надо добавить AudioDialogTask
        :param inputs: поля которые прилетают на сервер чтобы создать AudioDialogTask, типы указаны, но
        если что объект такого типа:
        {
            is_task_time_passing: boolean,
            task_time_passing: int,
            task_name: string,
            task_theory: django.core.File
        }
        :return: CreateAudioDialogTask(task=<task_instance>)
        """


class ChangeAudioDialogTask(graphene.Mutation):
    """
    мутация для изменения задания AudioDialogTask
    """

    class Arguments:
        audio_dialog_id = graphene.ID()
        inputs = AudioDialogInputsInServer()

    task = graphene.Field(AudioDialogTaskType)

    @classmethod
    def mutate(cls, root, info, audio_dialog_id, inputs: AudioDialogInputsInServer):
        """
        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param audio_dialog_id: id задания которое надо изменить
        :param inputs: данные которые летят на сервер для изменения задания (формат в CreateAudioDialogTask)
        :return: ChangeAudioDialogTaskFields(task=<task_instance>)
        """


class ChangeThemeSelectionAndSayTask(graphene.Mutation):
    """
    мутация для изменения ThemeSelectionAndSayTask
    """

    class Arguments:
        theme_selection_and_say_id = graphene.ID()
        inputs = ThemeSelectionAndSayTaskInputs()

    task = graphene.Field(AudioDialogTaskType)

    @classmethod
    def mutate(cls, root, info, theme_selection_and_say_id, inputs: ThemeSelectionAndSaytaskInputFieldInServer):
        """
        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param theme_selection_and_say_id: id задания для изменения
        :param inputs: объект где поля которые надо поменять
        :return: ChangeThemeSelectionAndSayTask(task=<task_instance>)
        """


class ChangeReadAndSayTask(graphene.Mutation):
    """
    мутация для изменения ReadAndSayTask
    """

    class Arguments:
        read_and_say_task_id = graphene.ID()
        inputs = ReadAndSayTaskInputs()

    task = graphene.Field(ReadAndSayTaskType)

    @classmethod
    def mutate(cls, root, info, read_and_say_task_id, inputs: ReadAndSayTaskInputsInServer):
        """
        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param read_and_say_task_id: id задания для изменения
        :param inputs: объект поля которых надо изменить в задании
        :return: ChangeReadAndSayTask(task=<task_instance>)
        """


class DeleteThemeSelectionAndSayTask(graphene.Mutation):
    """
    мутация для удаления ThemeSelectionAndSayTask
    """

    class Arguments:
        theme_selection_and_say_task_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, theme_selection_and_say_task_id):
        """

        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param theme_selection_and_say_task_id: id задания для удаления
        :return: DeleteThemeSelectionAndSayTask(ok=True)
        """


class DeleteAudioDialogTask(graphene.Mutation):
    """
    мутация для удаления AudioDialogTask
    """

    class Arguments:
        audio_dialog_task_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, audio_dialog_task_id):
        """

        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param audio_dialog_task_id: id модели для удаления
        :return: DeleteAudioDialog(ok=True)
        """


class DeleteReadAndSayTask(graphene.Mutation):
    """
    мутация для удаления ReadAndSayTask
    """
    class Arguments:
        read_and_say_task_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, read_and_say_task_id):
        """
        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param read_and_say_task_id: id задания для удаления
        :return: DeleteReadAndSayTask(ok=True)
        """

class CreateAnswerSheet(graphene.Mutation):
    """
    мутация для создания таблицы ответов
    """

    class Arguments:
        child_id = graphene.String()

    sheet = graphene.Field(AnswerSheetType)

    @classmethod
    def mutate(cls, root, info, child_id):
        """
        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param child_id: id отвечающего
        :return: CreateAnswerSheet(sheet=<answer_sheet_instance>)
        """


class CreateReadAndSayAnswer(graphene.Mutation):
    """
    мутация для создания ответа на задание ReadAndSayTask
    """

    class Arguments:
        answer_sheet_id = graphene.ID()
        audio = Upload()
        read_and_say_audio_task_id = graphene.ID()

    answer = graphene.Field(ReadAndSayAnswerType)

    @classmethod
    def mutation(cls, root, info, answer_sheet_id, read_and_say_audio_task_id, audio):
        """

        :param root:  /см CreateTest/
        :param info: /см CreateTest/
        :param answer_sheet_id: id таблицы ответов в которую надо записать ReadAndSayAnswer
        :param read_and_say_audio_task_id: id задания на которое был дан ответе
        :param audio: ответ пользователя
        :return: CreateReadAndSayAnswer(answer=<answer_instance>)
        """


class CreateAudioDialogAnswer(graphene.Mutation):
    """
    мутация, создающая ответ на задание AudioDialogTask
    """

    class Arguments:
        answer_sheet_id = graphene.ID()
        audio = Upload()
        audio_dialog_task_id = graphene.ID()

    answer = graphene.Field(AudioDialogAnswerType)

    @classmethod
    def mutate(cls, root, info, answer_sheet_id, audio, audio_dialog_task_id):
        """
        :param root:  /см CreateTest/
        :param info: /см CreateTest/
        :param answer_sheet_id: id таблицы ответов в который надо загрузить audioDialogAnswer
        :param audio: ответ ученика
        :param audio_dialog_task_id: id задания на который был дан ответ
        :return: CreateAudioDialogAnswer(answer=<asnwer_instance>)
        """


class CreateThemeSelectionAndSayAnswer(graphene.Mutation):
    """
    мутация для создания задания themeSelectionAndSay
    """

    class Arguments:
        answer_sheet_id = graphene.ID()
        audio = Upload()
        theme_selection_and_say_task_id = graphene.ID()

    answer = graphene.Field(ThemeSelectionAndSayAnswerType)

    @classmethod
    def mutate(cls, root, info, answer_sheet_id, audio, theme_selection_and_say_task_id):
        """
        :param root: /см CreateTest/
        :param info: /см CreateTest/
        :param answer_sheet_id: id таблицы ответов в которую надо записать themeSelectionAndSayAnswer
        :param audio: ответ пользователя в аудио формате
        :param theme_selection_and_say_task_id: id задания на которое был дан ответ пользователя
        :return: CreateThemeSelectionAndSayAnswer(answer=<answer_instance>)
        """


class MarkAnswer(graphene.Mutation):
    """
    мутация для оценивания ответов учеников
    """

    class Arguments:
        answer_id = graphene.ID()
        answer_type = graphene.String()
        mark = graphene.Int()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, answer_id, answer_type, mark):
        """
        :param root:  /см CreateTest/
        :param info: /см CreateTest/
        :param answer_id: id ответа на который надо поставить оценку
        :param answer_type: тип ответа (AudioDialogAnswer, ReadAndSayAnswer, ThemeSelectionAndSayAnswer)
        :param mark: оценка
        :return: MarkAnswer(ok=True)
        """


class Mutation(graphene.ObjectType):
    create_test = CreateTest.Field()
    change_test_name = ChangeTestName.Field()
    delete_test = DeleteTest.Field()
    add_class_to_test = AddClassToTest.Field()
    remove_class_from_test = RemoveClassFromTest.Field()
    create_class = CreateClass.Field()
    change_class_name = ChangeClassName.Field()
    add_child_to_class = AddChildToClass.Field()
    delete_class = DeleteClass.Field()
    create_child = CreateChild.Field()
    change_child_creds = ChangeChildCreds.Field()
    deleteChild = DeleteChild.Field()
    create_read_and_say_task = CreateReadAndSayTask.Field()
    create_audio_dialog_task = CreateAudioDialogTask.Field()
    create_theme_selection_and_say_task = CreateThemeSelectionAndSayTask.Field()
    change_audio_dialog_task = ChangeAudioDialogTask.Field()
    change_theme_selection_and_say_task = ChangeThemeSelectionAndSayTask.Field()
    change_read_and_say_task = ChangeReadAndSayTask.Field()
    delete_theme_selection_and_say_task = DeleteThemeSelectionAndSayTask.Field()
    delete_read_and_say_task = DeleteReadAndSayTask.Field()
    delete_audio_dialog_task = DeleteAudioDialogTask.Field()
    create_answer_sheet = CreateAnswerSheet.Field()
    create_read_and_say_answer = CreateReadAndSayAnswer.Field()
    create_theme_selection_and_say_answer = CreateThemeSelectionAndSayAnswer.Field()
    create_audio_dialog_answer = CreateAudioDialogAnswer.Field()
    mark_answer = MarkAnswer.Field()