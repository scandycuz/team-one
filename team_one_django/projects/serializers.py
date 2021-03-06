from rest_framework import serializers

from projects.models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('points', 'title', 'desc', 'admin', 'user')
