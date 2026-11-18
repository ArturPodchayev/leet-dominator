#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>

#define SIZE(x) ((x).size())
#define IF_EMPTY_RETURN_ZERO(x) if (SIZE(x) == 0) return 0;

class Solution {
public:
    int longestSubsequence(std::vector<int>& nums) {
        IF_EMPTY_RETURN_ZERO(nums);
        
        int n = SIZE(nums);
        std::vector<std::vector<int>> dp(301, std::vector<int>(301, 0));
        std::vector<bool> check(301, false);
        
        check[nums.back()] = true;
        int ans = 0;
        for (int i = n - 2; i >= 0; i--) {
            int Max = 0;
            std::vector<int> vt(301, 0);
            
            for (int k = 0; k <= 300; k++) {
                if (nums[i] + k <= 300 && check[nums[i] + k]) {
                    vt[k] = std::max(vt[k], dp[nums[i] + k][k] + 1);
                }
                if (nums[i] - k >= 0 && check[nums[i] - k]) {
                    vt[k] = std::max(vt[k], dp[nums[i] - k][k] + 1);
                }
                if (k - 1 >= 0) {
                    vt[k] = std::max(vt[k], vt[k - 1]);
                }
            }

            for (int k = 0; k <= 300; k++) {
                dp[nums[i]][k] = std::max(dp[nums[i]][k], vt[k]);
                ans = std::max(ans, dp[nums[i]][k]);
            }


            check[nums[i]] = true;
        }

        return ans + 1;
    }
};
