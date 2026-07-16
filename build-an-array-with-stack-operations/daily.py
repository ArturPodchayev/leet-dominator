from math import gcd

class Solution:
    def gcdSum(self, nums: list[int]) -> int:
        prefix = []
        mx = 0

        for x in nums:
            mx = max(mx, x)
            prefix.append(gcd(x, mx))

        prefix.sort()

        ans = 0
        i, j = 0, len(prefix) - 1

        while i < j:
            ans += gcd(prefix[i], prefix[j])
            i += 1
            j -= 1

        return ans
