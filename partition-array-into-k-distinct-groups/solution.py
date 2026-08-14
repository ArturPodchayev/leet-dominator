class Solution:
    def partitionArray(self, nums: List[int], k: int) -> bool:
        if len(nums)%k != 0:
            return False
        if len(nums) == k:
            return True if len(nums) == len(set(nums)) else False

        nums.sort()
        maxi= 0 
        temp =1
        for i in range(1,len(nums)):
            if nums[i-1] == nums[i]:
                temp+=1
            else:
                maxi = max(maxi,temp)
                temp =1
        maxi = max(maxi,temp)
        
        return True if maxi <= len(nums)//k else False
