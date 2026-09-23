class Solution {
public:
    int minOperations(vector<int>& nums, int x) {
        // Find the longest subarray whose sum is total - x.
        // Removing everything outside it leaves ends that sum to x.
        int n = nums.size();

        int total = 0;
        for (int num : nums) total += num;

        if (total < x) return -1; // can't reach x even removing everything
        else if (total == x) return n; // must remove everything

        // Sliding window: valid because all elements are positive,
        // so the window sum is monotonic.
        int start = 0;
        int currSum = 0;
        int maxLen = 0;
        const int TARGET = total - x;

        for (int end = 0; end < n; end++) {
            currSum += nums[end];

            while (currSum > TARGET) {
                // shrink window from left, 
                //sum will decrease as elements are positive
                currSum -= nums[start++];
            }

            if (currSum == TARGET) {
                maxLen = max(maxLen, end - start + 1);
            }
        }

        if (maxLen == 0) return -1; // no valid middle subarray

        return n - maxLen;
    }
};
