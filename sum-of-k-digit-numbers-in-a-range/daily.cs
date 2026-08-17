public class Solution {
    private int[] sum;
    private int[,] dp;
    private int BackTracking(int l, int r)
    {
        if(l >= r)
            return 0;

        if(dp[l,r] > 0)
            return dp[l,r];

        int maxV = 0;

        for(int lEnd = l+1; lEnd <= r; lEnd++)
        {
            int sum1 = sum[lEnd]-sum[l], sum2 = sum[r+1]-sum[lEnd];
            
            if(sum1 < sum2)
            {
                maxV = Math.Max(maxV, sum1+BackTracking(l, lEnd-1));
            }
            else if(sum1 > sum2)
            {
                maxV = Math.Max(maxV, sum2 + BackTracking(lEnd, r));

            }
            else
            {
                int curMax = sum1 + Math.Max(BackTracking(l,lEnd-1), BackTracking(lEnd, r));
                maxV = Math.Max(maxV, curMax);
            }
        }

        dp[l,r] = maxV;
        return maxV;
    }
    public int StoneGameV(int[] stoneValue) {
        int len = stoneValue.Length;
        if(len == 1)
            return 0;

        sum = new int[len+1];
        sum[0] = 0;
        dp = new int[len, len];
        for(int i = 0; i < len; i++)
        {
            sum[i+1] = sum[i]+stoneValue[i];
        }

        return BackTracking(0, len-1);
    }
}
