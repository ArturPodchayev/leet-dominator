class Solution:
    def minCost(self, houses: List[int], cost: List[List[int]], m: int, n: int, target: int) -> int:
        @lru_cache(None)
        def dp(i, c, k):
            if k > target:
                return float('inf')
            if i == m:
                return 0 if k == target else float('inf')

            if houses[i] == 0:
                min_cost = float('inf')
                for new_c in range(1, n+1):
                    paint_cost = cost[i][new_c-1]
                    new_k = k + (1 if new_c != c else 0)
                    res = paint_cost + dp(i+1, new_c, new_k)
                    min_cost = min(min_cost, res)
                return min_cost
            else:
                new_c = houses[i]
                new_k = k + (1 if new_c != c else 0)
                return dp(i+1, new_c, new_k)

        ans = dp(0, 0, 0)
        return -1 if ans == float('inf') else ans
