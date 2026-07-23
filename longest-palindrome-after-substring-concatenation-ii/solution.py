class Solution:
    def longestPalindrome(self, s: str, t: str) -> int:
        
        def manacher(s: str) -> str:               
            """Manacher's algo.
            Return the longest palindromic substring."""
            ss = "#" + "#".join(s) + "#"
            n = len(ss)
            hlen = [0] * n
            center = right = 0
            for i in range(n):
                if i < right: hlen[i] = min(right-i, hlen[2*center-i])
                while 0 <= i-1-hlen[i] and i+1+hlen[i] < n and ss[i-1-hlen[i]] == ss[i+1+hlen[i]]: hlen[i] += 1
                if right < i+hlen[i]: center, right = i, i+hlen[i]
            ans = [0] * len(s)
            for i, x in enumerate(hlen):
                if (i-x)//2 < len(s): ans[(i-x)//2] = x
            return ans
        
        sloc = manacher(s)
        tloc = manacher(t[::-1])[::-1]
        
        ans = max(max(sloc), max(tloc))
        m, n = len(s), len(t)
        dp = [[0]*n for _ in range(m)]
        for i in range(m): 
            for j in range(n-1, -1, -1): 
                if s[i] == t[j]: 
                    if i and j+1 < n and dp[i-1][j+1]: dp[i][j] = 2 + dp[i-1][j+1]
                    else: dp[i][j] = 2
                extra = 0 
                if i+1 < m: extra = max(extra, sloc[i+1])
                if j: extra = max(extra, tloc[j-1])
                ans = max(ans, dp[i][j] + extra)
        return ans 
