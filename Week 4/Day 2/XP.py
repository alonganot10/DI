my_fav_numbers = [1, 3, 2, 5, 7, 44]
my_fav_numbers += [55, 43]
my_fav_numbers.pop(-1)
friend_fav_numbers = [9, 8, 5, 22, 90]
our_fav_numbers = my_fav_numbers + friend_fav_numbers

my_fav_tuple = (1, 3, 2, 5, 7, 44)
# cant be done
# cant be done
friend_fav_tuple = (9, 8, 5, 22, 90)
# cant be done


# decimal number, an int doesnt have a fraction and a float does
# sure?
# i don't get this question
num = 1.5
num_list = [num]
for i in range(7):
    num += 0.5
    num_list.append(num)
print(num_list)

for i in range(1, 21):
    print(i)

topping = input("Enter a topping: ")
while topping != "quit":
    print(f"I'll add {topping} to your pizza")
    topping = input("Enter another topping: ")

total = 0
while True:
    age = input("Please enter your age: ")
    if len(age) == 0:
        break
    elif int(age) < 3:
        pass
    elif 3 <= int(age) <= 12:
        total += 10
    else:
        total += 15
print(f"Your total is {total}")

group = []
while True:
    age = input("Enter age: ")
    if len(age) == 0:
        break
    if 16 <= int(age) <= 21:
        group.append(int(age))
print(group)

users = ["a", "b", "c", "d", "e"]
new_users = []
for i in users:
    age = input("Enter your age: ")
    if int(age) >= 16:
        new_users.append(i)
print(new_users)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket.count("Apples"))
basket.clear()
print(basket)

basket2 = ["Banana", "Apples", "Oranges", "Blueberries"]
while len(basket2) > 0:
    print(basket2.pop(-1))


count = [1, 2, 3, 4, 5, 6, 7, 8]
for i in count:
    if count.index(i) % 2 == 0:
        print(i)