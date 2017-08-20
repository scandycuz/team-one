from rest_framework import serializers

from goals.models import Goal

class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ('title', 'desc', 'points_needed', 'met', 'project')