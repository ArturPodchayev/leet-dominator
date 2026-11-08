class Solution {
public:
    long long perfectPairs(vector<int>& nums) {
       vector<int> ans;
        int n=nums.size();
        for(int i=0;i<n;i++){
            ans.push_back(abs(nums[i]));
        }
        sort(ans.begin(),ans.end());
        long long res=0;
        for(int i=1;i<n;i++){
            int ind=ans.begin()+i-lower_bound(ans.begin(),ans.end(),abs((ans[i]+1))/2);
            res+=ind;
        }
        return res;
    }
};
