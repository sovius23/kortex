"""
Список ответов, нужен чтобы клиент понимал какого типа ответ к нему пришел
на сервере обращаться: answerTypes['answer_type'] -> Вернется строковое представление типа данного ответа на клиенте
"""

answerTypes = {
    "audio_dialog_answer": "AudioDialogAnswer",
    "read_and_say_answer": "ReadAndSayAnswer",
    "theme_selection_and_say_answer": "ThemeSelectionAndSayAnswer"
}