from django.conf.urls import url

from .views import *

urlpatterns = [
    url(r'^path', path_finding, name='path'),
    url(r'^general', general, name='general'),
    url(r'^about', about, name='about'),
    url(r'^charges', charges, name='charges'),

    url(r'^', main, name='main'),
]
