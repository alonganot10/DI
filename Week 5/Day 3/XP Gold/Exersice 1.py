class Character:
    def __init__(self, health):
        self.health = health


class Warrior(Character):
    def __init__(self, health):
        super().__init__(health)
        self.shout = "Grrr.."
        print(self.shout)

    def roar(self):
        print("rooooaaaarrrrr")

    def attack(self, other):
        other.health -= 10


class Sorcerer(Character):
    def __init__(self, health):
        super().__init__(health)
        self.shout = "Wooba lubba dub dub!"
        print(self.shout)

    def curse(self, target):
        print(f"a curse was placed on {target}")


class Druid(Character):
    def __init__(self, health):
        super().__init__(health)
        self.shout = "Hello World!"
        print(self.shout)

    def heal(self, other=None):
        if other is None:
            self.health += 10
        else:
            other.health += 10


test = Warrior(100)
