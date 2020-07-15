# class MyClass(object):
#     count = 0
#
#     def __init__(self, val):
#         self.val = val
#         MyClass.count += 1
#
#     def set_val(self, newval):
#         self.val = newval
#
#     def get_val(self):
#         return self.val
#
#     @classmethod
#     def get_count(cls):
#         return cls.count
#
# object_1 = MyClass(10)
# print("\nValue of object : %s" % object_1.get_val())    # 10
# print(MyClass.get_count())                              # 1
#
# object_2 = MyClass(20)
# print("\nValue of object : %s" % object_2.get_val())    # 20
# print(MyClass.get_count())                              # 2


class MyClass(object):
    count = 0

    def __init__(self, val):
        self.val = self.filterint(val)
        MyClass.count += 1

    @staticmethod
    def filterint(value):
        if not isinstance(value, int):
            print("Entered value is not an INT, value set to 0")
            return 0
        else:
            return value


a = MyClass(5)
b = MyClass(10)
c = MyClass(15)

print(a.val)  # 5
print(b.val)  # 10
print(c.val)  # 15
print(a.filterint(100))  # 100
