import json


class MenuManager:
    def __init__(self):
        with open('menu.json') as menu:
            self.menu = json.loads(menu.read())["items"]

    def add_item(self, name, price):
        self.menu.append({
            "name": name,
            "price": price
        })

    def remove_item(self, name):
        for item in self.menu:
            if item["name"] == name:
                self.menu.remove(item)

    def save_to_file(self):
        with open('menu.json', 'w') as menu:
            menu.write(json.dumps({"items": self.menu}))


def create_menu():
    return MenuManager()


menu = create_menu()
print(menu.menu)
menu.add_item("test", 10)
print(menu.menu)
menu.remove_item("Hamburger")
print(menu.menu)
menu.save_to_file()
with open('menu.json') as menu1:
    print(json.loads(menu1.read())["items"])