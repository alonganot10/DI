print("Hello World\n"*4)

print((99**3) * 8)

name = "alon"
age = 21
shoe_size = 45
info = f"my name is {name} i am {age} years old and my shoe size is {shoe_size}"
print(info)

computer_brand = "hp"
print(f"I have a {computer_brand} computer")

print(5 < 3) # False
print(3 == 3) # True
print(3 == "3") # False
# print("3" > 3) # wont work
print("Hello" == "hello") # False

height = input("Enter your height: ")
if int(height) >= 35:
    print("Enjoy the ride")

number = int(input("Enter a number: "))
if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")