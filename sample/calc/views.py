from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages

# Create your views here.

def home(request):
    context = {"home_page": "active"} # new info here
    return render(request, 'home.html', context)

def production(request):
    context = {"production_page": "active"} # new info here
    return render(request, 'production.html', context)

def demand(request):
    context = {"demand_page": "active"} # new info here
    return render(request, 'demand.html', context)

def about(request):
    context = {"about_page": "active"} # new info here
    return render(request, 'about.html', context)

