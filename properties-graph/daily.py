from collections import deque
from typing import List

class Solution:
    def countNonDecreasingSubarrays(self, nums: List[int], k: int) -> int:
        n = len(nums)
        stack = deque()
        # ops = adjusted_vals - total
        adjusted_vals = 0
        total = 0
        cnt = 0

        R = n - 1
        for L in range(n - 1, -1, -1):
            num = nums[L]
            cur_l = 1
            while stack and num >= stack[-1][0]:
                val, l = stack.pop()
                adjusted_vals -= val * l
                cur_l += l
            adjusted_vals += num * cur_l
            stack.append([num, cur_l])
            total += nums[L]
            while adjusted_vals - total > k:
                total -= nums[R]
                adjusted_vals -= stack[0][0]
                stack[0][1] -= 1
                if stack[0][1] == 0:
                    stack.popleft()
                R -= 1
            cnt += R - L + 1
        return cnt
