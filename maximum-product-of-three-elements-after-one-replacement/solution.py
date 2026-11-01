class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        nums = [abs(n) for n in nums]
        nums.sort()

        return nums[-1]*nums[-2]*100000
