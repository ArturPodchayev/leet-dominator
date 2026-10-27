class Solution:
    def isSubstringPresent(self, s: str) -> bool:
        a=s[::-1]
        for i in range(1,len(s)):
            k=s[i-1:i+1]
            print(k)
            if k in a:
                return True
