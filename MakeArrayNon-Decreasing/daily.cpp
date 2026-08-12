class Solution {
public:
    int maxSubarrayLength(vector<int>& nums, int k) {
        map<int,int> freq;
        int left=0,ans=0;
        int n=nums.size();
        for(int i=0;i<n;i++){
            freq[nums[i]]++;
            while(freq[nums[i]]>k){
                freq[nums[left]]--;
                left++;
            }
            ans=max(ans,i-left+1);
        }
        return ans;
    }
};
