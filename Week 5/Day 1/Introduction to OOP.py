class Point:
    def __init__(self, x, y):
        self.x = x              # the x value is put into the x attribute
        self.y = y              # the y value is put into the y attribute

## create an instance of the class
p = Point(3,4)

## access the attributes
print("p.x is:", p.x)
print("p.y is:", p.y)