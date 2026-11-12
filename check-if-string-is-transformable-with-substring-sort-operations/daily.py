class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        l1=[1]
        for i in range(len(nums)-1):
            if nums[i]>nums[i+1]:
                v=nums[i]
                r=1
                for j in  range(i+1,len(nums)):
                    if nums[j]<v:
                        r+=1
                        v=nums[j]
                    else:
                        break
                l1.append(r)
            elif nums[i]<nums[i+1]:
                v=nums[i]
                r=1
                for j in  range(i+1,len(nums)):
                    if nums[j]>v:
                        r+=1
                        v=nums[j]
                    else:
                        break
                l1.append(r)
        return max(l1)
