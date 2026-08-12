class Solution:
    def maximumPossibleSize(self, nums: List[int]) -> int:
        prev = -1
        count = 0

        for n in nums:
            if n >= prev:
                prev = n
                count += 1
        
        return count
