# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from projects.models import Project

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=100, blank=True, default='')
    points = models.IntegerField(default=0)
    desc = models.TextField()
    project = models.ForeignKey(Project)
    complete = models.BooleanField()