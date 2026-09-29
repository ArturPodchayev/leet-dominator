using System;

public class Solution {
    public bool HasValidPath(char[][] grid) {
        int m = grid.Length;
        int n = grid[0].Length;
        var dp = new bool[m, n, m + n];

        dp[0, 0, 1] = grid[0][0] == '(';

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < m + n; k++) {
                    if (!dp[i, j, k]) continue;

                    if (i + 1 < m && k + 1 < m + n && grid[i + 1][j] == '(') {
                        dp[i + 1, j, k + 1] = true;
                    }

                    if (j + 1 < n && k + 1 < m + n && grid[i][j + 1] == '(') {
                        dp[i, j + 1, k + 1] = true;
                    }

                    if (i + 1 < m && k > 0 && grid[i + 1][j] == ')') {
                        dp[i + 1, j, k - 1] = true;
                    }

                    if (j + 1 < n && k > 0 && grid[i][j + 1] == ')') {
                        dp[i, j + 1, k - 1] = true;
                    }
                }
            }
        }

        return dp[m - 1, n - 1, 0];
    }
}
