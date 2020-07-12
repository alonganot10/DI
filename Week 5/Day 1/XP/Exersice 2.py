class Dog:
    def __init__(self, nameDog, heightDog):
        self.nameDog = nameDog
        self.heightDog = heightDog


    def talk(self):
        print("Wouaf")


    def jump(self):
        print(self.heightDog*2)


Davids_dog = Dog("Rex", 50)
print(Davids_dog.nameDog)
print(Davids_dog.heightDog)
Davids_dog.talk()
Davids_dog.jump()

Sarahs_dog = Dog("Teacup", 20)
print(Sarahs_dog.nameDog)
print(Sarahs_dog.heightDog)
Sarahs_dog.talk()
Sarahs_dog.jump()

if Davids_dog.heightDog > Sarahs_dog.heightDog:
    Davids_dog.winner = True
else:
    Sarahs_dog.winner = True
