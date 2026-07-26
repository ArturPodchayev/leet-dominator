class Solution:
    def evenNumberBitwiseORs(self, nums: List[int]) -> int:
        a=0
        for i in nums:
            if i%2==0:
                a= a|i
        return a        
