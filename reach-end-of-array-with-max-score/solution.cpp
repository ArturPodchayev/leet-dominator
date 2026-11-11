class Solution {
public:
    long long findMaximumScore(vector<int>& nums) {
       long long ans=0,curr=0,i,n=nums.size();
       for(i=0;i<n;i++){
        if(nums[i]>nums[curr]){
            ans+=(i-curr)*1ll*nums[curr];
            curr=i;
        }
       } 
       ans+=(n-1-curr)*1ll*nums[curr];
       return ans;
    }
};
