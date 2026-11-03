import java.math.BigInteger;
import java.util.Arrays;

class Solution {
    public int count(String num1, String num2, int min_sum, int max_sum) {
        // Use BigInteger to handle very large numbers
        BigInteger low = new BigInteger(num1).subtract(BigInteger.ONE);
        
        // Max possible sum based on the length of num2 (max digit value is 9)
        int maxPossibleSum = 9 * num2.length();
        
        int[][][] dp1 = new int[maxPossibleSum + 1][num2.length() + 1][2];
        int[][][] dp2 = new int[maxPossibleSum + 1][num2.length() + 1][2];

        // Initialize DP tables
        for (int[][] arr : dp1) {
            for (int[] a : arr) {
                Arrays.fill(a, -1);
            }
        }
        for (int[][] arr : dp2) {
            for (int[] a : arr) {
                Arrays.fill(a, -1);
            }
        }

        int mod = 1000000007;

        // Use BigInteger for num2 as well to handle large input
        return (countUtil(min_sum, max_sum, num2, 0, 0, 1, dp1) - countUtil(min_sum, max_sum, low.toString(), 0, 0, 1, dp2) + mod) % mod;
    }

    public int countUtil(int min, int max, String num, int currSum, int idx, int tight, int[][][] dp) {
        int mod = 1000000007;

        // If the current sum exceeds the max sum, prune this branch
        if (currSum > max)
            return 0;

        // If we've processed all digits, check if the sum is within the valid range
        if (idx == num.length()) {
            return (currSum >= min && currSum <= max) ? 1 : 0;
        }

        // Check the DP table for a previously computed state
        if (dp[currSum][idx][tight] != -1)
            return dp[currSum][idx][tight];

        // Determine the upper limit for the current digit based on the tight condition
        int limit = (tight == 1) ? num.charAt(idx) - '0' : 9;

        int ans = 0;

        // Try all possible digits from 0 to limit
        for (int i = 0; i <= limit; i++) {
            // If tight is 1 and the digit we pick equals the current digit, we stay tight
            int newTight = (tight == 1 && i == num.charAt(idx) - '0') ? 1 : 0;
            
            // Recurse for the next digit with the updated sum
            ans = (ans + countUtil(min, max, num, currSum + i, idx + 1, newTight, dp)) % mod;
        }

        // Save the result in the DP table
        return dp[currSum][idx][tight] = ans;
    }
}
