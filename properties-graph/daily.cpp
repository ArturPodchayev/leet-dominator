#include <vector>

using namespace std;

class Solution {
public:
    long long countNonDecreasingSubarrays(vector<int>& nums, int k) {
        int n = nums.size();
        long long ans = 0;
        long long cost = 0;
        
        // Monotonic deque storing indices of elements in non-increasing order
        // Using a flat array with head and tail pointers for maximum speed
        vector<int> dq(n);
        int head = 0, tail = 0;
        
        int j = n - 1; // Right boundary of the valid window [i, j]
        
        for (int i = n - 1; i >= 0; --i) {
            long long num = nums[i];
            
            // Pop elements strictly smaller than nums[i] from the back.
            // Adding nums[i] to the left forces these elements to be raised to nums[i].
            while (head < tail && nums[dq[tail - 1]] < num) {
                int l = dq[--tail];
                int r = (head < tail) ? dq[tail - 1] : j + 1;
                cost += (long long)(r - l) * (num - nums[l]);
            }
            
            dq[tail++] = i;
            
            // Shrink the window from the right if the total operations exceed k
            while (cost > k) {
                // nums[dq[head]] is the running maximum at the current rightmost position j
                cost -= (long long)nums[dq[head]] - nums[j];
                if (dq[head] == j) {
                    ++head;
                }
                --j;
            }
            
            // All subarrays starting at i and ending at any index in [i, j] are valid
            ans += (j - i + 1);
        }
        
        return ans;
    }
};
