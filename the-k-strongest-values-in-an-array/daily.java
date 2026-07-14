class Solution {
    int ans = 0;
    int mod = 1000000007;
    int dp[][][];
    public int subsequencePairCount(int[] nums) 
    {
        dp = new int[nums.length][201][201];
        for(int i=0;i<nums.length;i++)
        {
            for(int j=0;j<=200;j++)
            {
                Arrays.fill(dp[i][j],-1);
            }
        }
        return funt(nums,0,0,0);  
    }
    public int funt(int nums[], int i, int g1, int g2)
    {
        if(i == nums.length)
        {
            if(g1 == g2 && g1 != 0) return 1;
            return 0;
        }
        if(dp[i][g1][g2] != -1 ) return dp[i][g1][g2];
        //c1-> take therefore i goes in g1 
        int ng1 = g1;
        if(g1 == 0)
        {
            ng1 = nums[i];
        }
        else ng1 = gcd(nums[i],g1);
        int ans = funt(nums,i+1,ng1,g2);
        //c2-> skip so i goes in g2

        int ng2 = g2;
        if(g2 == 0)
        {
            ng2 = nums[i];
        }
        else ng2 = gcd(nums[i],g2);
        ans  = (ans + funt(nums,i+1,g1,ng2))%mod;

        // c3-> no one take it

        ans = (ans + funt(nums, i+1,g1,g2))%mod;
        dp[i][g1][g2] = ans;
        return ans;
    }
    public int gcd(int a, int b)
    {
        if(b==0) return Math.abs(a);
        return gcd(b,a%b);
    }
}
