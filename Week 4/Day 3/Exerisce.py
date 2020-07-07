israel = {
    "name": "Israel",
    "capital": "Jerusalem",
    "continent": "Asia"
}
usa = {
    "name": "USA",
    "capital": "Washington D.C.",
    "continent": "North America"
}
england = {
    "name": "England",
    "capital": "London",
    "continent": "Europe"
}
france = {
    "name": "France",
    "capital": "Paris",
    "continent": "Europe"
}
japan = {
    "name": "Japan",
    "capital": "Tokyo",
    "continent": "Asia"
}

countries = [israel, usa, england, france, japan]

let = set()
for i in countries:
    let.add(i["continent"])
print(let)


names = ["jon", 'tom', 'omri', 'tzvia', 'chaim', 'alon']
names2 = {names[first][0].upper(): names[first] for first in range(0, len(names), 3)}
print(names2)