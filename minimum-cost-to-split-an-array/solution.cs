public class Solution {
    public int MinCost(int[] nums, int k) {
        int n = nums.Length;
        int[] dp = new int[n + 1];
        for (int i = 0; i <= n; ++i) dp[i] = int.MaxValue;
        dp[0] = 0;

        for (int i = 0; i < n; ++i) {
            int[] freq = new int[n];
            int newlength = 0;
            for (int j = i; j < n; ++j) {
                freq[nums[j]]++;
                if (freq[nums[j]] == 2) newlength += 2;
                else if (freq[nums[j]] > 2) newlength++;

                int cost = k + newlength;
                dp[j + 1] = Math.Min(dp[j + 1], dp[i] + cost);
            }
        }

        return dp[n];
    }
}
