public class Solution {
   public int NumOfWays(int[] nums)
    {
        dp = new long[nums.Count() + 1, nums.Count() + 1];
        for (int i = 1; i < nums.Count() + 1; ++i)
        {
            dp[i,0] = 1;
            dp[i,1] = i;
            dp[i,i - 1] = i;
            dp[i,i] = 1;
        }
        for (int i = 2; i < nums.Count() + 1; ++i)
        {
            for (int j = 2; j < nums.Count() + 1; ++j)
            {
                if (i >= j) dp[i,j] = (dp[i - 1, j - 1] % MOD + dp[i - 1, j] % MOD) % MOD;
                else break;
            }
        }
        return (int)solve(nums) - 1;
    }
    long[,] dp;
    long MOD = (long)1e9 + 7;

    long solve(int[] nums)
    {
        if (nums.Count() <= 1) return 1;
        List<int> l = new List<int>();
        List<int> r = new List<int>();
        for (int i = 1; i < nums.Count(); ++i)
        {
            if (nums[i] > nums[0]) 
                r.Add(nums[i]);
            else 
                l.Add(nums[i]);
        }
        int n = l.Count(), m = r.Count();
        return solve(l.ToArray()) * solve(r.ToArray()) % MOD * dp[n + m, n] % MOD;
    }
}
