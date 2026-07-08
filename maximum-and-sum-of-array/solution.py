class Solution:
    def maximumANDSum(self, nums: List[int], numSlots: int) -> int:
        dp = defaultdict(int)
        dp[0] = 0
        for num in nums:
            temp = defaultdict(int)
            for mask in dp.keys():
                for i in range(numSlots):
                    p1, p2 = 2 * i, 2 * i + 1
                    if (mask >> p2) & 1:
                        continue
                    next_mask = mask + (1 << p1)
                    temp[next_mask] = max(temp[next_mask], dp[mask] + (num & (i + 1)))
            dp = temp
        return max(dp.values())
