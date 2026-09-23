class Solution {
public:
   int n;
    long long maxTotal(vector<int>& nums, string s) {
     n=nums.size();
     reverse(nums.begin(),nums.end());
     reverse(s.begin(),s.end());
     vector<vector<long long>>dp(n+1,vector<long long>(2,0));
     for(int i=n-1;i>=0;i--)
     {
         for(int take=0;take<=1;take++)
         {
              if(take==1)
    {
       if(s[i]=='1')
       {

         dp[i][take]=max(nums[i]+dp[i+1][1],nums[i]+dp[i+1][0]);
       }
       else
       {
        dp[i][take]=nums[i]+dp[i+1][0];
       }
    }
    else
    {
        if(s[i]=='1')
       {
         dp[i][take]=max(nums[i]+dp[i+1][0],dp[i+1][1]);
       }
       else
       {
        dp[i][take]=dp[i+1][0];
       }
    }
         }
     }   

     return dp[0][0]; 
    }
};
