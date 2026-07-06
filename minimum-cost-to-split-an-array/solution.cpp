class Solution {
public:
    int minCost(vector<int>& nums, int k) {
        int n=nums.size();
        vector<int> dp(n,0);
        dp[0]=k;
        for(int i=1;i<n;i++){
            unordered_map<int,int> mp;
            for(int j=0;j<=i;j++) mp[nums[j]]++; //to store and count the number of occurences of elements we used unordered map
            int len=0;
            for(auto x:mp) if(x.second>1) len+=x.second;
            dp[i]=k+len;
            for(int j=0;j<i;j++){
                mp[nums[j]]--;
                if(mp[nums[j]]==1)  len-=2; //decreasing the length by 2 when the occurence of elements becomes 1
                else if(mp[nums[j]]>1) len-=1; //if its greater than 1 then we will only decrese it by 1 as it counts to total
                dp[i]=min(dp[i],dp[j]+k+len); //recurrence realtion
            }
        }
        return dp[n-1];
    }
};
