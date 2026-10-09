#define ll long long
class Solution {
public:
    ll maximumTotalCost(vector<int>& nums) {
        int n = nums.size();
        vector<ll> dp(n, 0);
        dp[n-1] = nums[n-1];
        for (int i = n - 2; i >= 0; --i) {
            dp[i] = nums[i];
            if (i + 1 < n) {
                dp[i] = max(dp[i], nums[i] - nums[i+1] + (i + 2 < n ? dp[i+2] : 0));
            }
            dp[i] = max(dp[i], nums[i] + dp[i+1]);
        }
        return dp[0];
    }
};
