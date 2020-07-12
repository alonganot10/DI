class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.pens = {}

    def add_animal(self, new_animal):
        if self.animals.count(new_animal) == 0:
            self.animals.append(new_animal)

    def get_animals(self):
        print(", ".join(self.animals))

    def sell_animal(self, animal_sold):
        if self.animals.count(animal_sold) != 0:
            print(f"Goodbye {animal_sold}")
            self.animals.remove(animal_sold)
        else:
            print(f"{animal_sold} isnt in the zoo")

    def sort_animal(self):
        copy = self.animals[:]
        copy.sort()
        list_of_lists = []
        temp = list(copy.pop(0))
        while len(copy) > 0:
            if temp[0][0] == copy[0][0]:
                temp.append(copy.pop(0))
            else:
                list_of_lists.append(temp)
                temp = list(copy.pop(0))
        list_of_lists.append(temp)
        num_list = []
        for i in range(len(list_of_lists)):
            num_list.append(i+1)
        result_dict = dict((key, value) for key, value in zip(num_list, list_of_lists))
        self.pens = result_dict

    def get_pen(self):
        for pen in self.pens.items():
            print(f"in pen {pen[0]} there are: {pen[1]}")



ramatGanSafari = Zoo("ramatGan")
ramatGanSafari.add_animal("aa")
ramatGanSafari.add_animal("ba")
ramatGanSafari.add_animal("c")
ramatGanSafari.add_animal("ab")
ramatGanSafari.add_animal("b")
ramatGanSafari.add_animal("ca")
ramatGanSafari.sort_animal()
print(ramatGanSafari.pens)
ramatGanSafari.get_animals()
ramatGanSafari.sell_animal("aa")