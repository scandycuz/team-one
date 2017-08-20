# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from goals.models import Goal

# Create your models here.
class Reward(models.Model):
    title = models.CharField(max_length=100, blank=True, default='')
    desc = models.TextField()
    goal = models.ForeignKey(Goal)