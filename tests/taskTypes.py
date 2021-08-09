"""
Это типы заданий, нужно чтобы на фронтенде можно было понимать тип заданий из строки,
обращение на сервере: TaskTypes['task_type'] -> вернет тип задания
"""
TaskTypes = {
    "audio_dialog_task": "AudioDialogTask",
    "read_and_say_task": "ReadAndSayTask",
    "theme_selection_and_say_task": "ThemeSelectionAndSayTask"
}