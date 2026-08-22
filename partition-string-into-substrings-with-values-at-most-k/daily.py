class Solution:
    def checkDivisibility(self, n: int) -> bool:
        return  n % (sum(ln:= [(n//p)%10 for i in range(7) if (p:=10**i) <=n]) + prod(ln)) == 0
        
