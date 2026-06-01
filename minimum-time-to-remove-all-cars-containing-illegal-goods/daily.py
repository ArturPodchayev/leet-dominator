class Solution:
    def minimumCost(self, cost: List[int]) -> int:
        n = len(cost)
        cost.sort(reverse=True)
        ans = 0
        for i in range(n):
            if i % 3 == 2:
                continue
            ans += cost[i]
        return ans 
