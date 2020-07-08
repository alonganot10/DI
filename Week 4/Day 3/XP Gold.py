# basket = input("Enter your fav fruits: ").split(" ")
# fruit = input("Enter a fruit: ")
# if fruit in basket:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy it too!")




car_manuf = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet, tesla"
car_manuf = car_manuf.split(", ")
print(f"there are {len(car_manuf)} manufacturers on the list")
sorted(car_manuf).reverse()
print(car_manuf)
car_o = [name for name in car_manuf if name.count("o") > 0]
print(car_o)




def insert_index(array, index): # if index is bigger
    pass