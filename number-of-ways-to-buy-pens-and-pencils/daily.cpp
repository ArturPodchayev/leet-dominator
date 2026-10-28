class Solution {
public:
    int minCost(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();

        vector<vector<vector<int>>> dp(
            n, vector<vector<int>>(m)
        );

        dp[0][0].push_back(grid[0][0]);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (i == 0 && j == 0)
                    continue;

                if (i > 0) {
                    for (int x : dp[i - 1][j]) {
                        dp[i][j].push_back(x ^ grid[i][j]);
                    }
                }

                if (j > 0) {
                    for (int x : dp[i][j - 1]) {
                        dp[i][j].push_back(x ^ grid[i][j]);
                    }
                }

                sort(dp[i][j].begin(), dp[i][j].end());
                dp[i][j].erase(
                    unique(dp[i][j].begin(), dp[i][j].end()),
                    dp[i][j].end()
                );
            }
        }

        return *min_element(
            dp[n - 1][m - 1].begin(),
            dp[n - 1][m - 1].end()
        );
    }
};
