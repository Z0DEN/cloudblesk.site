# Generated by Django 4.2.1 on 2023-05-30 16:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('db', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='reg_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 5, 30, 16, 58, 43, 232639, tzinfo=datetime.timezone.utc)),
            preserve_default=False,
        ),
    ]
