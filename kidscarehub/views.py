from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def inscription(request):
    return render(request, 'inscription.html')

def connexion(request):
    return render(request, 'connexion.html')
