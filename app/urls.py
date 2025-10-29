from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("contacto/", views.contacto, name="contacto"),
    path("politicas/", views.politicas, name="politicas"),
    path("blog/", views.blog, name="blog"),
    path("blog/consejos", views.consejos, name="consejos"),
    path("blog/curiosidades", views.curiosidades, name="curiosidades"),
    path("blog/digitacion", views.digitacion, name="digitacion"),
    path("blog/historia", views.historia, name="historia"),
    path("blog/tipos", views.tipos, name="tipos"),
]
