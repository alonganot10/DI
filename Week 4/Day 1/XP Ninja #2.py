import re

cars = 100
drivers = 30
passengers = 90
print(f"{cars} cars are available")
print(f"{drivers} are registered in the app")
print(f"{int(cars - passengers / 4)} are empty")
print(f"{cars * 4} passengers can be transported today")
print(f"{passengers / drivers} average of passengers in each car")

password = input("Enter a password: ")
if re.search(r"[a-zA-Z]\d\W", password) is not None and 5 < len(password) < 13:
    print(True)

full_name = input("Enter your full name: ")
if full_name.replace(" ", "").isalpha():
    full_name = full_name.split(" ")
    if (len(full_name) == 2) and all(char[0].upper() == char[0] for char in full_name):
        print("Valid")
