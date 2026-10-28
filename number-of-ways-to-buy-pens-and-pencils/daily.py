class Solution:
    def minCost(self, grid: list[list[int]]) -> int:
        if not grid or not grid[0]:
            return 0

        m, n = len(grid), len(grid[0])

        # dp[c] will store the set of reachable XOR values at the current row for column c
        # We can space-optimize from 2D DP table to a 1D DP array.
        dp = [set() for _ in range(n)]

        # Base case: top-left cell
        dp[0].add(grid[0][0])

        # Initialize first row (can only come from the left)
        for c in range(1, n):
            val = grid[0][c]
            dp[c] = {x ^ val for x in dp[c - 1]}

        # Process remaining rows
        for r in range(1, m):
            # Update first column of the current row (can only come from above)
            val = grid[r][0]
            dp[0] = {x ^ val for x in dp[0]}

            for c in range(1, n):
                val = grid[r][c]
                # Reachable XORs coming from top (dp[c]) or left (dp[c-1])
                combined_prev_xors = dp[c] | dp[c - 1]
                dp[c] = {x ^ val for x in combined_prev_xors}

        return min(dp[n - 1])
