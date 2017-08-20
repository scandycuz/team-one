from django.conf.urls import url

# Import project views
from goals.views import (
    GoalListCreate, GoalUpdate
)

urlpatterns = [
    url(r'^projects/?P<project_id>\d+/goals/$', GoalListCreate, name='goals'),
    url(r'^projects/?P<project_id>\d+/goals/?P<goal_id>\d+/$', GoalUpdate, name='goal')
]