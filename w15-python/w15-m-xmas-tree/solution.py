# Create a function xMasTree(height) that returns a christmas 
# tree of the correct height. The height is passed through to 
# the function and the function should return a list containing 
# each line of the tree.

# xMasTree(5) should return : 
# ['____#____', '___###___', '__#####__', '_#######_', '#########', '____#____', '____#____']
# xMasTree(3) should return : 
# ['__#__', '_###_', '#####', '__#__', '__#__']
# The final idea is for the tree to look like this if you 
# decide to print each element of the list:

# xMasTree(5) will result in:
# ____#____              1
# ___###___              2
# __#####__              3
# _#######_              4
# #########       -----> 5 - Height of Tree
# ____#____        1      
# ____#____        2 - Trunk/Stem of Tree

# xMasTree(3) will result in:
# __#__                  1
# _###_                  2
# #####          ----->  3 - Height of Tree
# __#__           1
# __#__           2 - Trunk/Stem of Tree
# Pad with underscores i.e _ so each line is the same 
# length. The last line forming the tree having only 
# hashtags, no spaces. Also remeber the trunk/stem of the tree.

def xMasTree(n):
    z=n-1
    x=1
    ret = []
    for i in range(0,n):
        str = ""
        for i in range(0,z):
            str = str + '_'
        for i in range(0,x):
            str = str + '#'
        for i in range(0,z):
            str = str + '_'
        x=x+2
        z=z-1
        ret.append(str)
    ret.append(ret[0])
    ret.append(ret[0])
    for k in ret :
        print(k)
    return ret

