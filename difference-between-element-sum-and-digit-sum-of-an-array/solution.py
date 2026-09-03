class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        s=0
        s_sum=0
        for i in nums:
            s=s+i
            while i>0:
                s_sum+=i%10
                i=i//10
        return abs(s-s_sum)  
