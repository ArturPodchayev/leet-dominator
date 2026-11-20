class Solution {
public:
    int maxSelectedElements(vector<int>& nums) {
        sort(nums.begin(), nums.end());

        unordered_map<int,int> dp;

        int ans = 0;

        for(int i : nums) {
            dp[i + 1] = dp[i] + 1;
            dp[i] = dp[i - 1] + 1;

            ans = max(ans, max(dp[i], dp[i + 1]));
        }

        return ans;
    }
};
