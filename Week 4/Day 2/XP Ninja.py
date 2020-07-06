list1 = [22, 47, 99, -80, 22, 97, 54, -23, 5, 7]
for i in list1:
    print(i, end=" ")
print()
print()
list2 = sorted(list1, reverse=True)
for i in list2:
    print(i)
print()
print(sum(list1))
print([list1[0], list1[-1]])
list50 = []
for i in list1:
    if i > 50:
        list50.append(i)
print(list50)
list10 = []
for i in list1:
    if i < 10:
        list10.append(i)
print(list10)
listsquare = []
for i in list1:
    listsquare.append(i ** 2)
print(listsquare)
print(list(set(list1)), end=" ")
print(len(set(list1)))
print(sum(list1) / len(list1))
print(max(list1))
print(min(list1))




para = "Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust " \
       "sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone " \
       "and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon " \
       "wars. You just have to use your head to think a little bit about what to do with them."

print(len(para))
print(len(para.split("."))-1)
print(len(para.split(" ")))
count = 0;
para_words = para.replace(".", "").split(" ")
for i in para_words:
    if para_words.count(i) == 1:
        count += 1
print(count)



text = "New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3."
text = text.split(" ")
for i in text:
    if text.count(i) > 1:
        print(f"{i}: {text.count(i)}")
        text = " ".join(text)
        text = text.replace(i, "")
        text = text.split(" ")
    elif text.count(i) == 1:
        print(f"{i}: {text.count(i)}")




print(abs.__doc__)
print(int.__doc__)
# print(raw_input.__doc__) doesnt work
# i don't have any function



