class Solution:
    def stoneGameII(self, piles: List[int]) -> int:
        n,prf = len(piles), [*accumulate(piles, initial=0)]
        @cache 
        def dfs(p, lb, m): return (0  if  lb >= n  else
            min(dfs(1-p, lb+x, max(x,m))  for x in range(1, 2*m+1) if lb+x <= n)  if p  else
            max(dfs(1-p, lb+x, max(x,m)) +prf[lb+x]-prf[lb] for x in range(1, 2*m+1) if lb+x <= n)
        )
        return dfs(0, 0, 1)
        
