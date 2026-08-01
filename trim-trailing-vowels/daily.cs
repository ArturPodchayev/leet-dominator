public class Solution {
    public bool PredictTheWinner(int[] nums) {
        int n = nums.Length;
        // dp[i, j] represents the maximum score difference between Player 1 and Player 2 for subarray nums[i..j]
        int[,] dp = new int[n, n];
        
        // Initialize the diagonal elements with the array values, as each player can choose one number
        for (int i = 0; i < n; i++) {
            dp[i, i] = nums[i];
        }
        
        // Calculate the score differences for different subarray lengths
        for (int len = 1; len < n; len++) {
            for (int i = 0; i < n - len; i++) {
                int j = i + len;
                // Calculate the maximum score difference if Player 1 chooses nums[i] or nums[j]
                dp[i, j] = Math.Max(nums[i] - dp[i + 1, j], nums[j] - dp[i, j - 1]);
            }
        }
        
        // The maximum score difference between Player 1 and Player 2 for the entire array (0..n-1) will be stored at dp[0, n-1]
        // If dp[0, n-1] is greater than or equal to 0, Player 1 can win the game
        return dp[0, n - 1] >= 0;
    }
}
