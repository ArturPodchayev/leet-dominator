class Solution:
    def longestSubsequence(self, nums: List[int]) -> int:
        """
        Dynamic Programming.

        Question: At index i, for nums[i], and a given gap
        d, is there such a sequence ending at i whose last
        gap is d? and if so, what's the longest such sequence?

        To get it, we need a number nums[j], j < i, such that
        abs(nums[i] - nums[j]) = d. In that case:
        longest(i, d) = 1 + max(longest(j, d') for all d' >= d)

        Since nums[i] in [1, 300], there are only 300 possible nums,
        and 300 possible gaps, small enough that we can cache everything.

        Let dp(n, d) = length of longest sequence seen so far that ends
        at `n` with the last gap >= `d`, then when encounter a new number num:

        dp[num, d] = max(dp[num - d, d], dp[num + d, d]) + 1
        """
        dp = {nums[0]: {diff: 1 for diff in range(300)}}
        res = 1
        for num in nums[1:]:
            tmp = {diff: 1 for diff in range(300)}
            for prev_num in dp:
                diff = abs(num - prev_num)
                tmp[diff] = max(tmp[diff], dp[prev_num][diff] + 1)

            max_sofar = 0
            for diff in range(299, -1, -1):
                max_sofar = max(max_sofar, tmp[diff])
                tmp[diff] = max_sofar
            res = max(max_sofar, res)

            if num not in dp:
                dp[num] = tmp
            else:
                for diff in range(300):
                    dp[num][diff] = max(dp[num][diff], tmp[diff])
        
        return res
