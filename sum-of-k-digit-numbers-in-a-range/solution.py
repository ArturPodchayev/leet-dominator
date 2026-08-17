class Solution:
    def sumOfNumbers(self, l: int, r: int, k: int) -> int:
        MOD = 10**9+7
        tot_dig = pow(r-l+1, k-1, MOD)
        ans = 0
        for i in range(max(1,l), r+1):
            ans = (ans + (tot_dig * i * (pow(10, k, MOD)-1) * pow(9, MOD-2, MOD))%MOD)%MOD
        return ans
        
            


# td*x*pow(10, y)


# td*x*(1+10+100+..+10^k)
# td*x(10^k - 1)/9
# _ _
# (r-l+1) (r-l+1) .... K times


