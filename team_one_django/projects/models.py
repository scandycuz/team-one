# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Project(models.Model):
    points = models.IntegerField(default= 0)
    title = models.CharField(max_length=100, blank=True, default='')
    desc = models.TextField()