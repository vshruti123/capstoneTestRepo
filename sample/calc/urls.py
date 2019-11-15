from django.urls import path

from . import views

urlpatterns = [

    path('',views.home, name='home'),
    path('production/',views.production, name='production'),
    path('demand/',views.demand, name='demand'),
    path('about/',views.about, name='about'),
]