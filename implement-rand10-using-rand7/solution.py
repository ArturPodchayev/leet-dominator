# The rand7() API is already defined for you.
# def rand7():
# @return a random integer in the range 1 to 7

class Solution:
    def rand10(self):
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] # starting values considered
        while len(arr) > 1:
            newarr = []
            for i in arr:
                if rand7() > 3: newarr.append(i) # give each number a "fair chance" to move on
            if not newarr: continue 
            arr = newarr
        return arr[0]
