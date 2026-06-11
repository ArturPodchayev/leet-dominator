class Solution:
    def generateTheString(self, n: int) -> str:
        return("p"*(n-1))+"z" if n%2==0 else "p"*n
        
