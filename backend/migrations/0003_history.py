# Generated by Django 3.1.7 on 2021-11-21 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_camera_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(auto_now=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='')),
            ],
        ),
    ]
