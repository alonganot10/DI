class Circle:
    color = "red"

    def __init__(self, diameter):
        self.diameter = diameter

    def grow(self, factor=2):
        self.diameter = self.diameter * factor

    def get_color(self):
        return Circle.color


circle1 = Circle(2)
print(circle1.color)        # red
print(Circle.color)         # red
print(circle1.get_color())  # red
circle1.grow(3)             # "2*3"
print(circle1.diameter)     # 6





class Circle:
    color = "red"


class NewCircle(Circle):
    color = "blue"


nc = NewCircle
print(nc.color) # blue
# >> What will be the output ?





class Circle:
    def __init__(self, diameter):
        self.diameter = diameter

    def grow(self, factor=2):
        """grows the circle's diameter by factor"""
        self.diameter = self.diameter * factor


class NewCircle(Circle):
    def grow(self, factor=2):
        """grows the area by factor..."""
        self.diameter = (self.diameter * factor * 2)


nc = NewCircle(1)
print(nc.diameter)  # 1
nc.grow()           # "1*2*2"
print(nc.diameter)  # 4
# >> What will be the output

