class Solution:
    def stoneGameVII(self, stones: List[int]) -> int:
        n = len(stones)
        flag = 1
        lis = list(stones)
        for i in range(1,n):
            for j in range(n - i):
                if flag:
                    lis[j] = max(lis[j],lis[j+1])
                else:
                    lis[j] = min(lis[j] + stones[j + i],lis[j+1] + stones[j])
            flag ^= 1
        return lis[0] if not flag else sum(stones) - lis[0]
        
