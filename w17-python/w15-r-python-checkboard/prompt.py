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

def make_checkered_board(n):
    line=['X' for x in range(n)]
    board = [line for y in range(n)]
    for row in range(0,n):
        for col in range(0,n):
            if (row+col)%2:
                board[row][col]="0"
    for line in board:
        print(line)
    return board