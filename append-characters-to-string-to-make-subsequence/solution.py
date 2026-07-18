class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        i=0
        l=len(t)
        for j in s:
            if i<l and j==t[i]:
                i+=1
        return l-i
        
