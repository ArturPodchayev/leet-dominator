class Solution {
public:
    int minimumSumSubarray(vector<int>& nums, int l, int r) {
        vector<int> prefix(nums.size());
        prefix[0]=nums[0];
        for(int i=1; i<nums.size(); i++){
            prefix[i]=prefix[i-1]+nums[i];
        }
        int ans=INT_MAX;
        for(int i=0; i<nums.size(); i++){
            for(int j=l; j<=r && i+j-1<nums.size(); j++){
                int k=i+j-1;
                int sum = prefix[k] - (i>0 ? prefix[i-1]:0);
                if(sum>0) ans=min(ans, sum);
            }
        }
        if(ans==INT_MAX) return -1;
        return ans;
    }
};
