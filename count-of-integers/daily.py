class Solution:
    def minMoves(self, nums: List[int]) -> int:
        m=max(nums)
        total=0
        for i in nums:
            total+=abs(m-i)
        return total
