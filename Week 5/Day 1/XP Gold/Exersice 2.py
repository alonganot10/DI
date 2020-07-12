import random


class MyList:
    def __init__(self, li):
        if type(li) is not list or len(li) == 0:
            raise TypeError("Only non empty lists")
        else:
            self.li = li

    def reverse(self):
        return self.li[::-1]

    def sort(self):
        return sorted(self.li)

    def gen(self):
        return [random.randint(0, 1) for i in self.li]


test = MyList([2, 3, 1, 4, 5])
print(test.reverse())
print(test.sort())
print(test.gen())
