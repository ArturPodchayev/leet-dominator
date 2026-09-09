class Solution:
    def shiftDistance(self, s: str, t: str, nextCost: List[int], previousCost: List[int]) -> int:
        best=[[0]*26 for _ in range(26)]
        nextCost*=2
        previousCost*=2
        for i in range(26):
            for j in range(26): 
                best[i][j]=min(sum(nextCost[i:26*(i>j)+j]),sum(previousCost[j+1:26*(i<j)+i+1]))
 
        return sum(best[ord(a)-97][ord(b)-97] for a,b in zip(s,t))
