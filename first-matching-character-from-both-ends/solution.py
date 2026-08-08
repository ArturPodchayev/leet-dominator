class Solution:
    def firstMatchingIndex(self, s: str) -> int:
        l = 0
        r = len(s) - 1
        while l <= r:
            if s[l] == s[r]:
                return l
            l = l + 1
            r = r - 1
        return -1
