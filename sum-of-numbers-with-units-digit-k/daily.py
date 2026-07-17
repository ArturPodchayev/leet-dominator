from typing import List
from bisect import bisect_right

class Solution:
    def gcdValues(self, nums: List[int], queries: List[int]) -> List[int]:
        mx = max(nums)

        # frequency of each value
        freq = [0] * (mx + 1)
        for x in nums:
            freq[x] += 1

        # count of numbers divisible by i
        divCnt = [0] * (mx + 1)
        for i in range(1, mx + 1):
            for j in range(i, mx + 1, i):
                divCnt[i] += freq[j]

        # exact number of pairs whose gcd is i
        exact = [0] * (mx + 1)

        for i in range(mx, 0, -1):
            c = divCnt[i]
            pairs = c * (c - 1) // 2

            j = 2 * i
            while j <= mx:
                pairs -= exact[j]
                j += i

            exact[i] = pairs

        # prefix counts
        prefix = []
        values = []
        total = 0

        for g in range(1, mx + 1):
            if exact[g]:
                total += exact[g]
                prefix.append(total)
                values.append(g)

        # answer queries
        ans = []
        for q in queries:
            idx = bisect_right(prefix, q)
            ans.append(values[idx])

        return ans
