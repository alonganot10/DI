import inflect

p = inflect.engine()


class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal, amount=1):
        if animal not in self.animals:
            self.animals[animal] = amount
        else:
            self.animals[animal] += amount

    def get_info(self):
        print(f"{self.name}'s farm")
        space = len(f"{self.name}'s farm")
        for animal_type in self.animals.items():
            temp = (space-len(p.plural(animal_type[0]))) * " "
            print(f"{p.plural(animal_type[0])}{temp}: {animal_type[1]}")
        temp = (space - 10) * " "
        print(f"{temp}E-I-E-I-O!")


mc = Farm("McDonald")
mc.add_animal("cow", 5)
mc.add_animal("sheep")
mc.add_animal("sheep")
mc.add_animal("goat", 12)

mc.get_info()
