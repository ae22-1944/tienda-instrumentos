from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


def home(request):
    template = loader.get_template("index.html")
    return HttpResponse(template.render())


def contacto(request):
    template = loader.get_template("contacto.html")
    return HttpResponse(template.render())


def politicas(request):
    template = loader.get_template("politicas.html")
    return HttpResponse(template.render())


def blog(request):
    template = loader.get_template("blog.html")
    return HttpResponse(template.render())


def consejos(request):
    template = loader.get_template("blog/consejos.html")
    return HttpResponse(template.render())


def curiosidades(request):
    template = loader.get_template("blog/curiosidades.html")
    return HttpResponse(template.render())


def historia(request):
    template = loader.get_template("blog/historia.html")
    return HttpResponse(template.render())


def tipos(request):
    template = loader.get_template("blog/tipos.html")
    return HttpResponse(template.render())


def digitacion(request):
    template = loader.get_template("blog/digitacion.html")
    return HttpResponse(template.render())
