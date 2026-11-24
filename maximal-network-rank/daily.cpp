class Solution {
public:
    int maxLength(vector<int>& nums) {
        int n = nums.size();
        int prod = 1, ret = 2;
        for (int l = 0, r = 0; l < n; ++l) {
            while (r < n && gcd(prod, nums[r]) == 1) {
                prod *= nums[r];
                ++r;
            }
            ret = max(ret, r - l);
            prod /= nums[l];
        }
        return ret;
    }
};
