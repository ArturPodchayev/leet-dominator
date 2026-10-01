class Solution:
    def minLengthAfterRemovals(self, a: List[int]) -> int:
        n = len(a)

        k = mx = cur = 0

        for x in a:
            if x == k:
                cur += 1
            else:
                mx = max(mx, cur)
                cur = 1
                k = x

        mx = max(mx, cur)

        if mx <= n // 2:
            return n & 1
        
        return 2 * mx - n
