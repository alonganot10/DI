def insertion_sort(alist):
    for index in range(1, len(alist)):

        currentvalue = alist[index] # saves the current value of the index
        position = index            # saves the current index of the list

        while position > 0 and alist[position - 1] > currentvalue: # while the last value is bigger then the current value and it in bounds continue
            alist[position] = alist[position - 1] # swaps the values
            position = position - 1               # around

        alist[position] = currentvalue


alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
insertion_sort(alist)
print(alist) # this returns a sorted list from smallest to biggest
