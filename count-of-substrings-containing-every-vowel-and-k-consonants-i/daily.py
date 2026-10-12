class Solution:
    def maxSum(self, nums: list[int], k: int) -> int:
        MOD = 10**9 + 7

        bit_counts = [0] * 31

        for num in nums:
            for b in range(31):
                if num & (1 << b):
                    bit_counts[b] += 1

        ans = 0

        for _ in range(k):
            x = 0

            for b in range(31):
                if bit_counts[b] > 0:
                    x |= (1 << b)
                    bit_counts[b] -= 1

            ans = (ans + x * x) % MOD

        return ans
