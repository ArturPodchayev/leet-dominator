class Solution {
    int n, m;
    vector<vector<int>> dp;
    int find(int ind_front, int ind_back, int ind_m, vector<int>& nums, vector<int>& multipliers) {
        if (ind_m == m) return 0;

        if (dp[ind_front][ind_m] != INT_MIN) return dp[ind_front][ind_m];

        int take_from_front = nums[ind_front] * multipliers[ind_m] + find(ind_front + 1, ind_back, ind_m + 1, nums, multipliers);
        int take_from_back = nums[ind_back] * multipliers[ind_m] + find(ind_front, ind_back - 1, ind_m + 1, nums, multipliers);

        return dp[ind_front][ind_m] = max(take_from_front, take_from_back);
    }

public:
    int maximumScore(vector<int>& nums, vector<int>& multipliers) {
        n = nums.size();
        m = multipliers.size();
        dp = vector<vector<int>>(m, vector<int>(m, INT_MIN));
        return find(0, n - 1, 0, nums, multipliers);
    }
};
