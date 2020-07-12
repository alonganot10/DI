number = bin(int(input("Enter a number: ")))
b = number[:2]
number = number[2:]
number = number[::-1]
for i in range(32-len(number)):
    number += "0"
print(int(b+number, 2))
