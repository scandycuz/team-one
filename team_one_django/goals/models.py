# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from projects.models import Project

# Create your models here.
class Goal(models.Model):
    title = models.CharField(max_length=100, blank=True, default='')
    desc = models.TextField()
    points_needed = models.IntegerField(default=0)
    met = models.BooleanField(default=False)
    project = models.ForeignKey(Project)