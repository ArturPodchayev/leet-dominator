from copy import deepcopy
from functools import lru_cache

class Solution:
    def canSplitArray(self, nums: List[int], m: int) -> bool:
        N = len(nums)

        prefix_sum = deepcopy(nums)

        for i in range(1, N):
            prefix_sum[i] += prefix_sum[i-1]

        @lru_cache(maxsize=None)
        def _recursion(left, right):
            if left >= right:
                return True
            
            if prefix_sum[right] - (prefix_sum[left-1] if left-1 >= 0 else 0) < m:
                return False
            
            return (
                _recursion(left + 1, right) or
                _recursion(left, right - 1)
            )
        
        return (
            _recursion(1, N - 1) or
            _recursion(0, N - 2)
        )
