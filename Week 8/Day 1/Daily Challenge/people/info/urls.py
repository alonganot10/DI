from django.urls import path
from . import views


urlpatterns = [
    path('', views.everyone, name='everyone'),
    path('<int:x>/', views.selected, name='selected')
]