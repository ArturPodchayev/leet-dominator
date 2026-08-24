class Solution:
    def longestPalindrome(self, s: str, t: str) -> int:
        ans = 0
        for i in range(len(s)):
            for j in range(i+1, len(s)+1):
                if s[i:j] == s[i:j][::-1]:
                    ans = max(ans, j - i)
        for i in range(len(t)):
            for j in range(i+1, len(t)+1):
                if t[i:j] == t[i:j][::-1]:
                    ans = max(ans, j - i)
        for i in range(len(s)):
            for j in range(i+1, len(s)+1):
                req1 = s[i:j]
                for k in range(len(t)):
                    for l in range(k+1, len(t)+1):
                        a = t[k:l]
                        if req1 + a == (req1 + a)[::-1]:
                            ans = max(ans, len(req1 + a))
        return ans
