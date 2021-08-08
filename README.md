# evgen-app
## Как настроить окружение

1) Установить PostgreSQL (https://www.postgresql.org/download/)
2) Создать базу данных в PGAdmin и внести изменения в файл `easyCards/settings.py` константа `DATABASE` (https://docs.djangoproject.com/en/3.2/ref/databases/#connecting-to-the-database)
3) Установить все модули `pip install -r requirements.txt` в папке проекта
4) Применить миграции `python manage.py migrate`
5) Запустить сервер командой `python manage.py runserver 3000`

## Запустить Frontend

1) Перейти в директорию с приложением фронтенда `cd frontend`
2) Установить пакеты `npm i`
3) Запустить вебпак `npm run dev`
4) Билд происходит комнадой `npm run build`
5) Если фроненд не появляется и возникает ошибка что такого url нет, то перейдите в файл `easyCards/urls.py` и в переменной `urlpatterns` в последнем значении уберите *, так 
  чтобы контент превратился в пустую строку
6) Если вам понадобится `GrapqhiQL` то измените последнее значение переменной `urlpatterns` на "*"

## Разработка Frontend

1) Все картинки складывать в папку `frontend/static` на клиенте их путь будет таким: `/static/img1.png`
2) В файле `src/client.js` находится сконфигурированный `Graphql` клиент (https://www.apollographql.com/docs/react/get-started/ - как его подключить к реакт приложению)
3) Для генерации запросов/мутаций есть файл `src/regSchema.graphql` - туда надо написать все запросы/мутации использованные в приложении и запустить команду `npm run generate`


## Разработка Backend

В разработке бекенда нет никаких сложностей кроме как написание graphql запросов (https://docs.graphene-python.org/projects/django/en/latest/installation/), 
поэтому блок пока пустой
