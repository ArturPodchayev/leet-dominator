class Solution:
    def mergeAdjacent(self, nums: List[int]) -> List[int]:
        res = []
        for n in nums:
            while res and res[-1] == n:
                n += res.pop()
            res.append(n)
        return res
        
