from django.shortcuts import render
import json


def family_list(request, x):
    with open('info/static/Animal.json', 'r') as a:
        animal = json.load(a)
    fil_animal = [animal[a]["name"] for a in animal.keys() if animal[a]["family"] == x]
    return render(request, 'info/family.html', {'family': fil_animal})


def animal_stats(request, x):
    with open('info/static/Animal.json', 'r') as a:
        animal = json.load(a)
    with open('info/static/Family.json', 'r') as a:
        family = json.load(a)
    selected = {"info": animal[x], "name": family[animal[x]["family"]]["name"]}
    return render(request, 'info/animal.html', selected)
