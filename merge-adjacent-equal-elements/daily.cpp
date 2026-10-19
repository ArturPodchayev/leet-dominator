class Solution {
public:
    vector<int> targetIndices(vector<int>& nums, int target) {
        vector<int>res;
        int cnt = 0, cnt_1 = 0;
        /**
            cnt: nums[i] less than target count it
            cnt_1: nums[i] equals to target, count it 
        **/

        for(auto it : nums){
            if(it < target)cnt++;
            if(it == target)cnt_1++;
        }

        for(int i = cnt;i<cnt+cnt_1;i++){
            res.push_back(i);
        }
        return res;
    }
};
