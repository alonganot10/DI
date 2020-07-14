class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print("Congratulation on the new born!")

    def is_18(self, name):
        for member in self.members:
            if name == member["name"] and member["age"] > 17:
                return True
        return False

    def __repr__(self):
        temp = ""
        for member in self.members:
            temp += f'{member["name"]}, {member["age"]}, {member["gender"]}, {member["is_child"]}\n'
        return temp


fam = Family([
    {
        'name': 'Michael',
        'age': 35,
        'gender': 'Male',
        'is_child': False
    },
    {
        'name': 'Sarah',
        'age': 32,
        'gender': 'Female',
        'is_child': False
    }
], "Lest")
print(repr(fam))
fam.born(name='Bobby', age=0, gender='Male', is_child=True)
print(repr(fam))
print(fam.is_18("Bobby"))
print(fam.is_18("Michael"))


class TheIncredibles(Family):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)

    def use_power(self, name):
        for member in self.members:
            if name == member["name"] and member["age"] > 17:
                print(member["power"])
            elif name == member["name"] and member["age"] < 18:
                print("You have no power here!!")

    def incredible_presentation(self):
        temp = ""
        for member in self.members:
            temp += f'{member["incredible_name"]}: {member["power"]}\n'
        return temp


inc_fam = TheIncredibles([
    {
        'name': 'Bob',
        'age': 40,
        'gender': 'Male',
        'is_child': False,
        'power': 'Super Strength',
        'incredible_name': 'Mr. Incredible'
    },
    {
        'name': 'Helen',
        'age': 36,
        'gender': 'Female',
        'is_child': False,
        'power': 'Elastic Body',
        'incredible_name': 'Elastigirl'
    },
    {
        'name': 'Violet',
        'age': 14,
        'gender': 'Female',
        'is_child': True,
        'power': "Invisibility & Force Shield",
        'incredible_name': "Violet"
    },
    {
        'name': 'Dash',
        'age': 10,
        'gender': 'Male',
        'is_child': True,
        'power': 'Super Speed',
        'incredible_name': 'Dash'
    }
], "Parr")
print(repr(inc_fam))
print(inc_fam.incredible_presentation())
inc_fam.born(name='Jack', age=0, gender='Male', is_child=True, power="Unknown Power", incredible_name="Jack")
print(repr(inc_fam))
print(inc_fam.incredible_presentation())