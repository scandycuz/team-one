# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import generics

from tasks.models import Task
from tasks.serializers import TaskSerializer

class TaskListCreate(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskUpdate(generics.UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    lookup_url_kwarg = 'task_id'