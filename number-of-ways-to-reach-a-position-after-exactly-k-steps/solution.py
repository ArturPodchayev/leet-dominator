class Solution:

    def numberOfWays(self, startPos: int, endPos: int, k: int) -> int:
        mod = 10**9+7
        def nCr(n: int, r:int) ->int:
            if(r == 0):
                return 1
            v = [0] * (n+1)
            v[0] = 1
            for i in range(1, n+1):
                for j in range(r, 0, -1):
                    v[j] = ((v[j] % mod) + (v[j-1] % mod)) % mod
            return v[r]
        diff = abs(startPos -  endPos)
        if(diff > k or diff + k & 1):
            return 0
        r = (diff + k)//2
        return(nCr(k, r))
