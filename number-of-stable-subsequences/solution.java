class Solution {
    int MOD=1000000007;
    public long solve(int[] nums,long[][][] dp,int i,int evod,int count){
        if(count>=3){  // Base Case
            return 0;
        }
        if(i==0){
            if(count==0){  // check if there is any element 
                return 0;
            }else{
                return 1;
            }
        }
        if(evod!=-1 && dp[i][evod][count]!=-1){
            return dp[i][evod][count];
        }
        int isEven=nums[i-1]%2; // check for even and odd
        long notTake=solve(nums,dp,i-1,evod,count)%MOD;
        long take=0;
        if(isEven==evod){
            take=solve(nums,dp,i-1,evod,count+1)%MOD; // take this one
        }else{
            take=solve(nums,dp,i-1,isEven,1)%MOD;
        }
        if(evod!=-1){
            dp[i][evod][count]=(take+notTake)%MOD;
        }
        return (take+notTake)%MOD;
    }
    public int countStableSubsequences(int[] nums) {
        int n=nums.length;
        long[][][] dp=new long[n+1][2][3];
        for(int i=0;i<n+1;i++){
            for(int j=0;j<2;j++){
                Arrays.fill(dp[i][j],-1);
            }
        }
        return (int)solve(nums,dp,n,-1,0)%MOD;  // nums ,index ,Even-0 and Odd-1 ,count consecutive and normal
    }
}
