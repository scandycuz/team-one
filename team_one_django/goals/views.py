# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import generics

from goals.models import Goal
from goals.serializers import GoalSerializer

class GoalListCreate(generics.ListCreateAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer 

class GoalUpdate(generics.UpdateAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer 
    lookup_url_kwarg = 'goal_id'
