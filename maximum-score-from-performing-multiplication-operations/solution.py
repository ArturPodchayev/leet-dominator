class Solution:
    def maximumScore(self, nums: List[int], multipliers: List[int]) -> int:
        
        @lru_cache(2000)
        def fn(lo, hi, k):
            if k == len(multipliers): return 0
            return max(nums[lo] * multipliers[k] + fn(lo+1, hi, k+1), nums[hi] * multipliers[k] + fn(lo, hi-1, k+1))
        
        return fn(0, len(nums)-1, 0)
