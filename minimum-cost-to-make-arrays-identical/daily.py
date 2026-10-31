class Solution:
  def uniquePaths(self, grid: list[list[int]]) -> int:
    MOD = 1_000_000_007
    m, n = len(grid), len(grid[0])

    # dp[i][j][0]: ways entering/leaving (i, j) coming from left
    # dp[i][j][1]: ways entering/leaving (i, j) coming from top
    # Or simplified DP tracking paths coming from left and top
    dp = [[[0, 0] for _ in range(n)] for _ in range(m)]

    # Base case: start at (0, 0)
    # We can assume 1 way to start, or trace from predecessors.
    # Let's use a standard grid DP approach:
    dp[0][0][0] = 1  # coming horizontally? No, let's trace transitions cleanly.

    # Alternative clear DP:
    # dp_right[i][j] = paths moving right into (i, j)
    # dp_down[i][j]  = paths moving down into (i, j)
    # For a standard grid:
    ans = 0
    return ans
from typing import List
from functools import lru_cache

MOD = 10**9 + 7


class Solution:
    def uniquePaths(self, grid: List[List[int]]) -> int:
        ROW, COL = len(grid), len(grid[0])

        def reflect(r, c, direction):
            while 0 <= r < ROW and 0 <= c < COL and grid[r][c] == 1:
                if direction == 'right':
                    r += 1
                    direction = 'down'
                else:
                    c += 1
                    direction = 'right'
            return (r, c)

        @lru_cache(None)
        def dp(r, c):
            if not (0 <= r < ROW and 0 <= c < COL):
                return 0
            if grid[r][c] == 1:
                return 0
            if (r, c) == (ROW - 1, COL - 1):
                return 1

            total = 0

            nR, nC = r, c + 1
            if 0 <= nC < COL:
                if grid[nR][nC] == 0:
                    total += dp(nR, nC)
                else:
                    reflectR, reflectC = reflect(nR + 1, nC, 'down')
                    if 0 <= reflectR < ROW and 0 <= reflectC < COL and grid[reflectR][reflectC] == 0:
                        total += dp(reflectR, reflectC)

            nR, nC = r + 1, c
            if 0 <= nR < ROW:
                if grid[nR][nC] == 0:
                    total += dp(nR, nC)
                else:
                    reflectR, reflectC = reflect(nR, nC + 1, 'right')
                    if 0 <= reflectR < ROW and 0 <= reflectC < COL and grid[reflectR][reflectC] == 0:
                        total += dp(reflectR, reflectC)

            return total % MOD

        return dp(0, 0)
