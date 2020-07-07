keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
dict1 = zip(keys, values)
print(dict(dict1))

store = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': [
        {'France': 'blue'},
        {'Spain': 'red'},
        {'US': ['pink', 'green']}
    ]
}
store['number_stores'] = 2;
for client in store["type_of_clothes"]:
    print(client)
store["country_creation"] = "spain"
store["international_competitors"].append("Desigual")
store.pop("creation_date")
print(store["international_competitors"][-1])
print(f"the major clothes' colors in the US are {store['major_color'][-1]['US']}")
print(len(store))
print(store.keys())
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}
store.update(more_on_zara)
print(store['number_stores'])
store["stores_worldwide"] = dict()

def add_store(country, number):
    if store["stores_worldwide"] is not None:
        store["stores_worldwide"][country] = number
add_store("Israel", 65)
print(store["stores_worldwide"])
store["add_stores_worldwide"] = add_store




users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
print({name: users.index(name) for name in users})
print({users.index(name): name for name in users})
users_sorted = sorted(users)
print({name: users_sorted.index(name) for name in users_sorted})
users_2 = []
for name in users:
    if 'MPmp'.count(name[0]) == 1 and name.count("i") > 0:
        users_2.append(name)
print({name: users_2.index(name) for name in users_2})