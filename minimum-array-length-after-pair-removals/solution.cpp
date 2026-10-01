class Solution {
public:
    int minLengthAfterRemovals(vector<int>& nums) {
        int n = nums.size(), i, j, cnt = 0;
        i = 0;
        j = (n + 1) / 2;
        while (j < n) {
            if (nums[i] < nums[j]) {
                cnt += 2;
                i++;
            }
            j++;
        }
        return n - cnt;
    }
};
