from django.conf.urls import url

from projects.views import (
    ProjectCreate, ProjectRetreiveUpdate
)

urlpatterns = [
    url(r'^$', ProjectCreate.as_view(), name='projects'),
    url(r'(?P<project_id>\d+)/?$', ProjectRetreiveUpdate.as_view(), name='project')
]
