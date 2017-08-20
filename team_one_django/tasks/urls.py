from django.conf.urls import url

# Import project views
from tasks.views import (
    TaskListCreate, TaskUpdate
)

urlpatterns = [
    url(r'^projects/?P<project_id>\d+/tasks/$', TaskListCreate, name='tasks'),
    url(r'^projects/?P<project_id>\d+/task/?P<task_id>\d+/$', TaskUpdate, name='task')
]