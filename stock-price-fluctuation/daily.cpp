class Solution {
public:
    long long maxAlternatingSum(vector<int>& nums) {

        int n = nums.size();
        if (n == 1) {
            return 1LL* nums[0] * nums[0];
        }
        for (int i = 0; i < n; i++) {
            if (nums[i] < 0) {
                nums[i] = abs(nums[i]);
            }
        }

        sort(nums.begin(), nums.end());

        int start = 0;
        int end = n - 1;
        long long sum = 0;
        while (start < end) {
            sum += (1LL* nums[end] * nums[end]);
            sum -= (1LL* nums[start] * nums[start]);
            start++;
            end--;
        }

        if (start == end) {
            sum += (1LL* nums[end] * nums[end]);
        }
        return sum;
    }
};
