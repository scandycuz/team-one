from django.conf.urls import url

from projects.views import (
    RewardListCreate
)

urlpatterns = [
    url(r'^project/<project_id>/goals/<goal_id>/rewards/$', RewardListCreate.as_view(),name='rewards')
]