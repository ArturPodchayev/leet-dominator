class Solution {
public:
    int countMajoritySubarrays(vector<int>& nums, int target) {
        int ans = 0;
        for (int i = 0; i < nums.size(); i++) {
            int countMaj = 0;
            for (int j = i; j < nums.size(); j++) {
                if (nums[j] == target)
                    countMaj++;
                if (2 * countMaj > j - i + 1)
                    ans++;
            }
        }
        return ans;
    }
};
