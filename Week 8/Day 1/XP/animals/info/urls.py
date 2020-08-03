from django.urls import path
from . import views


urlpatterns = [
    path('family/<str:x>/', views.family_list, name='show_family'),
    path('animal/<str:x>/', views.animal_stats, name='animal_stats')
]