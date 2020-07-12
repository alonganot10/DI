class MenuManager:
    def __init__(self):
        self.menu = {}

    def add_item(self, name, price, spice,gluten):
        self.menu[name] = {
            "name": name,
            "price": price,
            "spice": spice,
            "gluten": gluten
        }

    def update_item(self, name, price, spice, gluten):
        try:
            self.menu[name]["price"], self.menu[name]["spice"], self.menu[name]["gluten"] = price, spice, gluten
        except KeyError:
            print("The dish isn't in the menu")

    def remove_item(self, item):
        try:
            self.menu.pop(item)
        except ValueError:
            print("The dish isn't in the menu")


MainMenu = MenuManager()
MainMenu.add_item("Soup", 10, "B", False)
MainMenu.add_item("Hamburger", 15, "A", True)
MainMenu.add_item("Salad", 18, "A", False)
MainMenu.add_item("French Fries", 5, "C", False)
MainMenu.add_item("Beef bourguignon", 25, "B", True)

MainMenu.update_item("Saladssss", 25, "A", False)
print(MainMenu.menu["Salad"])

MainMenu.remove_item("Salad")
print(MainMenu.menu["Salad"])
