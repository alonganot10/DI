# class B:
#     pass
#
#
# class A(B):
#     def __init__(self, *args, **kwargs)
#         B.__init__(self, *argw, **kwargs)
#         pass
#
# # doesnt work the self chooses the child class
#
# class A(B):
#     def __init__(self, *args, **kwargs)
#         super().__init__(*argw, **kwargs)
#         pass
#
# # works




class A():

    def dothis(self):
        print("doing this in A")


class B(A):
    pass


class C():
    def dothis(self):
        print("doing this in C")


class D(B, C):
    pass

d_instance = D()
d_instance.dothis() # doing this in A
