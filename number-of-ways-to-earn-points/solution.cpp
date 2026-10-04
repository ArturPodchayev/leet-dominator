class Solution {
public:
    int mod = 1000000007;
    int dp[1001][51] = {0};
    long long int solve(int i, int target, vector<vector<int>>& types) {
        if (target == 0) return 1;
        if (target < 0) return 0;
        if (i >= types.size()) return 0;
        if (dp[target][i]!=-1) return dp[target][i];
        long long int ans = solve(i+1, target, types);
        int t = target;
        int l = types[i][0], r = types[i][1];
        while (t > 0 && l > 0) {
            t = t - r;
            l--; 
            ans += solve(i+1, t, types);
            ans = ans % mod;
        } 
        dp[target][i] = ans % mod;
        return ans;
    }
    int waysToReachTarget(int target, vector<vector<int>>& types) {
        memset(dp, -1, sizeof(dp));
        return solve(0, target, types);
    }
};
