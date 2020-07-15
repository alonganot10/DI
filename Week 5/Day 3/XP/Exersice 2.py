from math import pi

class Circle:
    def __init__(self, number, RoD="d"):
        self.radius = number if RoD == "r" else number / 2

    def area(self):
        return pi * self.radius ** 2

    def __repr__(self):
        return f"Circle: {self.radius}"

    def __add__(self, other):
        return self.radius + other.radius

    def compere(self, other):
        if self.radius == other.radius:
            return "equal"
        return self if self.radius > other.radius else other

    def sort(self, other):
        return [self, other] if self.radius > other.radius else [other, self]


test = Circle(4)
print(test)
test2 = Circle(5)
print(test.sort(test2))
print(test2.sort(test))
