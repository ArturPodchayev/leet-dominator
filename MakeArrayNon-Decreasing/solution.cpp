class Solution {
public:
    int maximumPossibleSize(vector<int>& nums) {
        int m=nums[0];
        int cnt=1;
        for(int i=1;i<nums.size();i++){
            if(nums[i]>=m){
                cnt++;
                m=nums[i];
            }
        }
        return cnt;
    }
};
