sclass Solution {
    public int longestSubsequence(int[] nums) {
      int res=0;
      int dp[][]=new int[301][301];
      for(int i=nums.length-1;i>=0;--i){
        for(int num=1;num<=300;++num){
            int diff=Math.abs(nums[i]-num);
            dp[nums[i]][diff]=Math.max(dp[nums[i]][diff],dp[num][diff]+1);
        }
        for(int diff=1;diff<300;++diff){
            dp[nums[i]][diff]=Math.max(dp[nums[i]][diff],dp[nums[i]][diff-1]);
            res=Math.max(res,dp[nums[i]][diff]);
        }
      }
      return res;
    }
}
