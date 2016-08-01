# Your task is to make two functions, max and min that take 
# a vector of integers list as input and outputs, respectively, 
# the largest and lowest number in that vector.

# Examples

# max([4,6,2,1,9,63,-134,566]) returns 566
# min([-52, 56, 30, 29, -54, 0, -110]) returns -110
# max([5]) returns 5
# min([42, 54, 65, 87, 0]) returns 0
# Notes

# You may consider that there will not be any empty vectors.

def min(arr):
    low = arr[0]
    for i in arr[1:]:
        if i < low:
            low = i
    return low

def max(arr):
    high = arr[0]
    for i in arr[1:]:
        if i > high:
            high = i
    return high


# def min(arr):
#   pass
# def max(arr):
#   pass
