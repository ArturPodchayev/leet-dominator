class Solution:
    def smallestIndex(self, nums: List[int]) -> int:
        for i in range(min(len(nums), 28)):
            if sum(map(int, str(nums[i]))) == i:
                return i
            
        return -1
