public class Solution {
    private int GCD(int a, int b)
    {
        return b > 0 ? GCD(b, a%b) : a;
    }
    public int SubsequencePairCount(int[] nums) {
        int mod = 1000000007, size = 0, res = 0;
        foreach(int cur in nums)
        {
            size = Math.Max(size, cur);
        }

        int[,] dp = new int[size+1, size+1];
        dp[0, 0] = 1;

        foreach(int cur in nums)
        {
            int[,] dp2 = new int[size+1, size+1];
            for(int i = size; i >= 0; i--)
            {
                for(int j = size; j >= 0; j--)
                {
                        int preFreq = dp[i,j];
						if (preFreq > 0)
						{
							int i2 = GCD(i, cur), j2 = GCD(j, cur);
							dp2[i2, j] = (dp2[i2, j] + preFreq) % mod;
							dp2[i, j2] = (dp2[i, j2] + preFreq) % mod;
							dp2[i, j] = (dp2[i, j] + preFreq) % mod;
						}
                }
            }

            dp = dp2;
        }

        for(int i = 1; i <= size; i++)
        {
            res = (res + dp[i,i]) %mod;
        }

        return res;
    }
}
