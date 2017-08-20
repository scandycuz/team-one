# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from rewards.models import Reward
from rewards.serializers import RewardSerializer

class RewardListCreate(generics.ListCreateAPIView):
    queryset = Reward.objects.all()
    serializer_class = RewardSerializer