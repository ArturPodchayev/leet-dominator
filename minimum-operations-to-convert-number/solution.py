
from collections import deque
class Solution:
    def minimumOperations(self, nums: List[int], start: int, goal: int) -> int:
        n = len(nums)
        max_ = 1001
        DP = [-1] * max_       
        DP[start] = 0


        queue = deque([start])


        while queue:
            u = queue.popleft()

            for num in nums:

                results = [u - num, u + num, u ^ num]

                for result in results:
                    if result == goal:
                        return DP[u] + 1
                    elif 0 <= result < max_ and DP[result] == -1:
                        DP[result] = DP[u] + 1
                        queue.append(result)
        
        return -1
