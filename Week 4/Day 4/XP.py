def display_message():
    print("I am learning about functions in python")


display_message()


####################################

def favorite_book(title):
    print(f"One of my favorite books is {title}")


favorite_book("Harry Potter")


#####################################

def make_shirt(size="L", text="I love Python"):
    print(f"the size of the shirt is {size} and the text is: '{text}'")


make_shirt("S", "Hello World")
make_shirt(size="M", text="Artemis Fowl")
make_shirt()


######################################

def show_magicians(magicians):
    for name in magicians:
        print(name)


def make_great(magicians):
    return [f"{name} the Great" for name in magicians]


magicians = list("abcdefg")
show_magicians(magicians)
print(make_great(magicians))


######################################

def describe_city(name, country="Israel"):
    print(f"{name} is in {country}")


describe_city("Zichron Ya'acob")
describe_city("Paris", "France")
describe_city("London", "England")


#######################################

def get_age(year, month, day):
    age = 2020 - year
    if month < 7 or month == 7 and day < 8:
        age += 1
    return age


def can_retire(gender, date_of_birth):
    year, month, day = date_of_birth
    age = get_age(int(year), int(month), int(day))
    if age > 66 or age > 61 and gender == "f":
        return True
    return False


birth = tuple(input("Enter birth-date YYYY/MM/DD: ").split("/"))
gen = input("Enter if f or m: ")
if can_retire(gen, birth):
    print("Welcome to retirement!")
else:
    print("Go back to work")