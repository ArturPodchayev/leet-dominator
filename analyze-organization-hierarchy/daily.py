class Solution:
    def sumOfSquares(self, nums: List[int]) -> int:
        return  sum(num*num for i,num in enumerate(nums,start=1) if len(nums)%i == 0)
        
