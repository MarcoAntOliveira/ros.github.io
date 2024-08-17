from django.contrib import admin
from django.urls import path
from doc import views

urlpatterns = [
   path('https://marcoantoliveira.github.io/ros.github.io/', views.index, name = "index"),
]
