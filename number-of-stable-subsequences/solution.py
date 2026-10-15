MOD = 10**9 + 7
class Solution:
    def countStableSubsequences(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [[0, 0], [0, 0]]
        for i in range(n):
            j = nums[i] & 1
            dp[j][1] = (dp[j][1] + dp[j][0]) % MOD
            dp[j][0] = (dp[j][0] + dp[j ^ 1][0] + dp[j ^ 1][1] + 1) % MOD
        return sum(map(sum, dp)) % MOD
        
