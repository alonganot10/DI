class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def myfunc(self):
        print("Hello my name is " + self.name)


    def rename(self, new_name):
        self.name = new_name

p1 = Person("John", 36)
p1.myfunc()
# myfunc prints the selected object's name
p1.rename("Alon")
p1.myfunc()