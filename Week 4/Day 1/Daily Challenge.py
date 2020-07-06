import random

text = input("Enter a 10 long string: ")
while len(text) != 10:
    text = input("Try again: ")
print(f"{text[0]} is the first letter and {text[-1]} is the last letter")
for i in range(len(text)):
    print(''.join(random.sample(text[0:i+1], len(text[0:i+1]))))
