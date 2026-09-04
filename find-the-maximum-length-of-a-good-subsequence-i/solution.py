class Solution:
    def maximumLength(self, nums: List[int], k: int) -> int:
        @cache
        def dfs(i, mismatch):
            if mismatch > k:
                return 0
            
            return 1 + max(
                (dfs(j, mismatch + (nums[i] != nums[j])) for j in range(i + 1, len(nums))),
                default=0)
        
        return max(dfs(i, 0) for i in range(len(nums)))
