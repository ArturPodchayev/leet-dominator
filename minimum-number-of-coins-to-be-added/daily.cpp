#include <vector>
#include <set>
#include <numeric>
#include <algorithm>
#include <climits>

using namespace std;

class Solution {
public:
    long long minOperations(vector<int>& nums, int x, int k) {
        int n = nums.size();
        
        // Step 1: Calculate the minimum cost to make each window of size x equal
        // cost[i] will store the minimum operations for the window starting at index i
        vector<long long> cost(n - x + 1, 0);
        
        multiset<int> lower, upper;
        long long lowerSum = 0, upperSum = 0;
        
        auto balance = [&]() {
            if (lower.size() < upper.size()) {
                int val = *upper.begin();
                upper.erase(upper.begin());
                lower.insert(val);
                upperSum -= val;
                lowerSum += val;
            } else if (lower.size() - upper.size() > 1) {
                int val = *lower.rbegin();
                lower.erase(prev(lower.end()));
                upper.insert(val);
                lowerSum -= val;
                upperSum += val;
            }
        };
        
        auto add = [&](int val) {
            if (lower.empty() || val <= *lower.rbegin()) {
                lower.insert(val);
                lowerSum += val;
            } else {
                upper.insert(val);
                upperSum += val;
            }
            balance();
        };
        
        auto remove = [&](int val) {
            auto it = lower.find(val);
            if (it != lower.end()) {
                lower.erase(it);
                lowerSum -= val;
            } else {
                upper.erase(upper.find(val));
                upperSum -= val;
            }
            balance();
        };
        
        // Populate the first window
        for (int i = 0; i < x; ++i) {
            add(nums[i]);
        }
        
        long long median = *lower.rbegin();
        cost[0] = (median * lower.size() - lowerSum) + (upperSum - median * upper.size());
        
        // Slide the window across the entire array
        for (int i = x; i < n; ++i) {
            remove(nums[i - x]);
            add(nums[i]);
            median = *lower.rbegin();
            cost[i - x + 1] = (median * lower.size() - lowerSum) + (upperSum - median * upper.size());
        }
        
        // Step 2: DP to pick k non-overlapping windows of size x with minimum total cost
        // dp[j] represents the min cost to pick `j` subarrays up to the current index
        // We use an outer loop over the number of subarrays (1 to k) to save space.
        vector<long long> dp(n + 1, LLONG_MAX / 2);
        dp[0] = 0; // 0 operations to pick 0 subarrays
        
        for (int j = 1; j <= k; ++j) {
            vector<long long> next_dp(n + 1, LLONG_MAX / 2);
            long long min_prev = LLONG_MAX / 2;
            
            // The minimum index to have j-1 subarrays of size x is (j-1)*x
            for (int i = (j - 1) * x; i <= n - x; ++i) {
                min_prev = min(min_prev, dp[i]);
                
                if (min_prev != LLONG_MAX / 2) {
                    next_dp[i + x] = min(next_dp[i + x], min_prev + cost[i]);
                }
            }
            
            // Propagate the minimum values forward (since we can skip indices)
            for (int i = 1; i <= n; ++i) {
                next_dp[i] = min(next_dp[i], next_dp[i - i]);
            }
            dp = move(next_dp);
        }
        
        long long ans = LLONG_MAX / 2;
        for (int i = k * x; i <= n; ++i) {
            ans = min(ans, dp[i]);
        }
        
        return ans == LLONG_MAX / 2 ? -1 : ans;
    }
};
