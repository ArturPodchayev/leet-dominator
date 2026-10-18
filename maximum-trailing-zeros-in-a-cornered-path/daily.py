import math

class Bst:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.size = 1

    def insert(self, val):
        if val < self.val:
            if self.left:
                self.left.insert(val)
            else:
                self.left = Bst(val)
        else:
            if self.right:
                self.right.insert(val)
            else:
                self.right = Bst(val)
        self.size += 1

    # def __str__(self):
    #     return f"{self.val}: [{self.left}, {self.right}]"

class Solution:
    def numOfWays(self, nums: list[int]) -> int:
        mod = 10**9 + 7

        def helper(bst):
            if bst is None:
                return 1
            m = n = 0
            if bst.left:
                m = bst.left.size
            if bst.right:
                n = bst.right.size
            return (math.comb(m + n, n) * helper(bst.left) * helper(bst.right)) % mod

        # Initialize
        root = Bst(nums[0])
        for num in nums[1:]:
            root.insert(num)

        return (helper(root) - 1) % mod
