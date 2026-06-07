class Solution:
    def longestPrefix(self, s: str) -> str:
        dp = [0] * len(s)
        length, i = 0, 1
        while i < len(s):
            if s[i] == s[length]:
                length += 1
                dp[i] = length
                i += 1
            else:
                if length > 0:
                    length = dp[length - 1]
                else:
                    dp[i] = 0
                    i += 1
        return s[:dp[-1]]
