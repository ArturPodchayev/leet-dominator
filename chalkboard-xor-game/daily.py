class Solution:
    def numOfSubarrays(self, arr: list[int]) -> int:
        MOD = 10**9 + 7

        even = 1  # Empty prefix sum
        odd = 0
        prefix = 0
        ans = 0

        for num in arr:
            prefix += num

            if prefix % 2 == 0:
                ans += odd
                even += 1
            else:
                ans += even
                odd += 1

            ans %= MOD

        return ans
