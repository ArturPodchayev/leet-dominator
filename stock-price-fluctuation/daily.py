class Solution:
    def maxAlternatingSum(self, nums: List[int]) -> int:

        n = len(nums)
        for i in range (n):
            if nums[i]>0 :
                continue
            else:
                nums[i] = nums[i]*(-1)

        nums.sort()
        arr = []
        
        if (n%2 == 0):
            for i in range (0,int(n/2)):
                arr.append(nums[-i-1])
                arr.append(nums[i])
        else:
            for i in range (0,int(n/2)):
                arr.append(nums[-i-1])
                arr.append(nums[i])
            arr.append(nums[int(n/2)])

        score = 0 

        for i in range(n):
            if i%2 == 0:
                score += (arr[i]*arr[i])              
            else:
                score -= (arr[i]*arr[i])  

        return score
