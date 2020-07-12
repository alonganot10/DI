import math


class Circle:
    def __init__(self, radius=1):
        self.radius = radius

    def perimeter(self):
        return 2*math.pi*self.radius

    def area(self):
        return math.pi*self.radius**2

    def geo_info(self):
        print("A circle is all points in the same plane that lie at an equal distance from a center point.\nThe "
              "circle is only composed of the points on the border.\nYou could think of a circle as a hula "
              "hoop.\nIt's only the points on the border that are the circle.")


cir = Circle(10)
print(cir.perimeter())
print(cir.area())
print(cir.geo_info())