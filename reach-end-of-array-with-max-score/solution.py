class Solution:
    def findMaximumScore(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [0] * n
        heap = [(-nums[0], 0)]
        for i in range(1, n):
            val, idx = heap[0]
            dp[i] = dp[idx] + (i - idx) * val
            heappush(heap, (-nums[i], i))
        return -dp[n - 1]
