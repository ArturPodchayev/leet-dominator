class Solution:
    def missingMultiple(self, nums: List[int], k: int) -> int:
        return min({i for i in range(k, 201, k)} - set(nums))
        
