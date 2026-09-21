class Solution {
public:
  vector<long long>res;
    vector<long long> solve(int idx,int k,vector<int>& nums){
        if(idx>=nums.size())return vector<long long>(k,0);
        vector<long long>aage=solve(idx+1,k,nums);
        vector<long long>ans(k,0);
        ans[nums[idx]%k]++;
        for(int i=0;i<k;i++){
            if(aage[i]>0)
           { long long nmod=(1LL*i*nums[idx])%k;
            ans[nmod]+=aage[i];}
        }

        for(int i=0;i<k;i++){
            res[i]+=ans[i];
        }
        return ans;


    }
    vector<long long> resultArray(vector<int>& nums, int k) {
        res.resize(k,0);
        solve(0,k,nums);
        return res;

    }
};
