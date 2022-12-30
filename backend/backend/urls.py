from django.contrib import admin
from django.urls import path, include
from django.urls import re_path as url
from main.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
]
