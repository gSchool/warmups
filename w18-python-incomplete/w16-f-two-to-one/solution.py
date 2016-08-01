# You are trying to make a checkerboard made up of X's 
# and O's. You've implemented the function before in a 
# different language but it just won't work in Python. 
# The function make_checkered_board(n) creates an N by 
# N board of X's and O's.

# For example

# make_checkered_board(4)==
# [['X', 'O', 'X', 'O'],
#  ['O', 'X', 'O', 'X'],
#  ['X', 'O', 'X', 'O'],
#  ['O', 'X', 'O', 'X']]

def longest(a1, a2):
    return "".join(sorted(set(a1 + a2)))