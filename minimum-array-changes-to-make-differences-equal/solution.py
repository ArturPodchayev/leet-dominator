class Solution:
    def minChanges(self, nums: List[int], k: int) -> int:
        n, d = len(nums), defaultdict(int)
        highestX = []
        pairs = n//2
        for i in range(pairs):
            a,b = nums[i], nums[n - i - 1]
            threshold = max(max(a, b), k - min(a, b))
            diff = abs(a - b)
            d[diff] += 1
            highestX.append(threshold)
        highestX.sort()

        ret = pairs
        for diff, freq in d.items():
            rest = pairs - freq
            other = bisect_left(highestX, diff)
            ret = min(ret, rest + other)
        return ret
