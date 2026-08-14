class Solution {
public:
    bool partitionArray(vector<int>& nums, int k) {
        int n = nums.size();
        if (n % k != 0)
            return false;
        unordered_map<int, int> mp;

        for (int i = 0; i < n; i++) {
            mp[nums[i]]++;
        }
        if (k == 1)
            return true;
        int totalNumberOfgroups = n / k;
        // Maximum Frequency should be <=total Groups , otherwise return false

        for (auto& it : mp) {
            if (it.second > totalNumberOfgroups)
                return false;
        }
        return true;
    }
};
