class Solution {
public:
    int mod = 1000000007;
    int dp[41][2050];  // dp[hat][mask]
    int n;

    int solve(int hat, int mask, vector<vector<int>>& hats) {
        if (mask == (1 << n) - 1) return 1;           // All persons have hats
        if (hat > 40) return 0;                       // No more hats to assign
        if (dp[hat][mask] != -1) return dp[hat][mask];

        int ways = solve(hat + 1, mask, hats);        // Skip current hat

        // Try to assign this hat to every person who likes it
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < hats[i].size(); j++) {
                if (hats[i][j] == hat && ((mask & (1 << i)) == 0)) {
                    ways = (ways + solve(hat + 1, mask | (1 << i), hats)) % mod;
                    break; // Avoid assigning the same hat to the same person multiple times
                }
            }
        }

        return dp[hat][mask] = ways;
    }

    int numberWays(vector<vector<int>>& hats) {
        n = hats.size();
        memset(dp, -1, sizeof(dp));
        return solve(1, 0, hats);  // Start from hat 1
    }
};
