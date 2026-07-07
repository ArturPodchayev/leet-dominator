public class Solution
{
    public int LongestPalindrome(string word1, string word2)
    {
        // Combine the two words into one string
        string s = word1 + word2;
        int m = word1.Length, n = word2.Length;
        int res = 0;

        // Create a 2D array for dynamic programming
        int[][] dp = new int[n + m][];
        for (int i = 0; i < dp.Length; i++)
        {
            dp[i] = new int[n + m];
        }

        // Fill the DP table
        for (int j = 0; j < n + m; j++)
        {
            for (int i = j; i >= 0; i--)
            {
                // Check if characters at position i and j are the same
                if (s[i] == s[j])
                {
                    // If they are the same, calculate the length of the palindrome
                    dp[i][j] = (j - i < 2) ? j - i + 1 : dp[i + 1][j - 1] + 2;

                    // Check if i is in word1 and j is in word2
                    if (i < m && j >= m)
                    {
                        res = Math.Max(res, dp[i][j]); // Update the result
                    }
                }
                else
                {
                    // If they are not the same, take the maximum from the two possible cases
                    dp[i][j] = Math.Max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }

        return res; // Return the maximum palindrome length found
    }
}

