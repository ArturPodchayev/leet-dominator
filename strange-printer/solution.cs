public class Solution {
    public int StrangePrinter(string s) {
        int n = s.Length;

        if(n == 0) return 0;

        int[,] dp = new int[n, n];

        for (int length = 1; length <= n; length++)
        {
            for (int i = 0; i <= n - length; i++)
            {
                int j = i + length - 1;
                dp[i, j] = length; 
                for (int k = i; k < j; k++)
                {
                    int turns = dp[i, k] + dp[k + 1, j];
                    dp[i, j] = Math.Min(dp[i, j], turns);
                }

                if (s[i] == s[j] && j > i)
                    dp[i, j] = Math.Min(dp[i, j], dp[i, j - 1]);
            }
        }

        return dp[0, n - 1]; 
    }
}
