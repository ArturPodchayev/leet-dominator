class Solution {
public:
    int missingInteger(vector<int>& nums) {
        int n[1001] = {0};

        int s = nums[0];

        for(int i = 0; i < nums.size(); i++) {
            n[nums[i]] = 1;
        }
        for(int i = 1; i < nums.size(); i++) {
            if(nums[i] != nums[i - 1] + 1) break;
                s += nums[i];
        }

        for(int i = s; i < 1001; i++) {
            if(n[i] == 0)
                return i;
        }

        return s;
    }
};
