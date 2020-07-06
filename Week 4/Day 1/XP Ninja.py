print(3 <= 3 < 9)   # True
print(3 == 3 == 3)  # True
print(bool(0))  # False
print(bool(5 == "5"))   # False
print(bool(4 == 4) == bool("4" == "4")) # True
print(bool(bool(None))) # False
x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10
print("x is", x) # True
print("y is", y) # False
print("a:", a) # 5
print("b:", b) # 10

a = 3
b = 2
if a > b:
    print("Hello World")

month = input("Enter a month: ")
if 3 <= int(month) <= 5:
    print("Spring")
elif 6 <= int(month) <= 8:
    print("Summer")
elif 9 <= int(month) <= 11:
    print("Autumn")
else:
    print("Winter")

my_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
print(len(my_text))

text = input("Enter a sentence without the letter A: ")
if text.find("a") == -1:
    print(len(text.replace(' ','')))
else:
    print("You failed")