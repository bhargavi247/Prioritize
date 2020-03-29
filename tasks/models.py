from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Todo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    urgent = models.BooleanField(default=False)
    important = models.BooleanField(default=False)
    todo_task = models.TextField()
