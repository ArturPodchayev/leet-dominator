class Solution:
    def subsequencePairCount(self, nums: List[int]) -> int:
        MOD = 10 ** 9 + 7
        n = len(nums)

        @cache
        def dp(i, g1, g2):
            if i == n:
                return 1 if g1 == g2 and g1 != 0 else 0

            x = nums[i]

            # Skip current element
            ans = dp(i + 1, g1, g2)

            # Put in first subsequence
            ng1 = x if g1 == 0 else gcd(g1, x)
            ans += dp(i + 1, ng1, g2)

            # Put in second subsequence
            ng2 = x if g2 == 0 else gcd(g2, x)
            ans += dp(i + 1, g1, ng2)

            return ans % MOD

        return dp(0, 0, 0)      
