import string


num1 = int(input("Enter first: "))
num2 = int(input("Enter second: "))
num3 = int(input("Enter third: "))
if num1 > num2 and num1 > num3:
    print(num1)
elif num2 > num1 and num2 > num3:
    print(num2)
else:
    print(num3)


alpha = list(string.ascii_lowercase)
vowels = list("iouae")
for letter in alpha:
    if vowels.count(letter) > 0:
        print(letter + ": vowel")
    else:
        print(letter + ": consonant")

item = input("Enter an item: ")
print(f"{item} occurs at {alpha.index(item)}")


list1 = [1, 2, 3]
list2 = [4, 5, 6]
while len(list2) > 0:
    list1.append(list2.pop(0))


users = []
while True:
    user = input("Enter name,age,score: ")
    if len(user) == 0:
        break
    user = user.split(",")
    user[1] = int(user[1])
    user[2] = int(user[2])
    users.append(tuple(user))
sorted(users)
print(users)


name= input("Enter customer name: ")
waiter = input("Enter Waiter Name: ")
item = input("Enter the item ordered: ")
price = int(input(f"Enter price of {item}: "))
amount = int(input("Enter how much was ordered: "))
discount = int(input("Enter the discount: ")) # out of 100
total = price * amount - price * amount * discount / 100 + price * amount * 0.2
print(f"""
########################
name: {name}
waiter: {waiter}
{item} X {amount} = {price * amount}
discount: {discount}%
VAT: 20%

final amount: {total}
########################
""")


import random
rand = random.randint(1, 9)
guess = 0
while guess is not rand:
    guess = int(input("Enter a number between 1-9: "))
print("you've guessed it!")


big = list(range(1, 1000001))
for i in big:
    print(i)


big2 = list(range(1, 1000001))
print(min(big2))
print(max(big2))
print(sum(big2))