# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Project(models.Model):
    points = models.IntegerField(default=0)
    title = models.CharField(max_length=100, blank=True, default='')
    desc = models.TextField()
    admin = models.ForeignKey(User, related_name='admin', on_delete=models.SET_NULL, null=True)
    user = models.ManyToManyField(User, related_name='user')
