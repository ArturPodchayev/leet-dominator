class Solution {
public:
    int sortPermutation(vector<int>& nums) {
        int n = nums.size();
        vector<int> temp = nums;
        sort(nums.begin(), nums.end());

        int i = 0;

        while (i < n && nums[i] == temp[i]) {
            i++;
        }

        if (i == n) return 0;

        int ans = temp[i];
        i++;

        while (i < n) {
            if (nums[i] != temp[i]) {
                ans &= temp[i];
            }
            i++;
        }

        return ans;
    }
};
