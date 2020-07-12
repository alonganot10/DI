class Cat:
    species = 'mammal'

    def __init__(self, name, age):
        self.name = name
        self.age = age


cat1 = Cat("one", 1)
cat2 = Cat("two", 2)
cat3 = Cat("three", 3)


def oldest(*cats):
    old = cats[0]
    for cat in cats:
        if old.age < cat.age:
            old = cat
    return old


print(f"The oldest cat is {oldest(cat1, cat2, cat3).age} years old.")