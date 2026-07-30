public class Solution {
    public long MinimumMoney(int[][] transactions) {
        long negSum = 0;
        int n = transactions.Length;

        // Sum all negative contributions
        for (int i = 0; i < n; i++) {
            int cost = transactions[i][0];
            int cashback = transactions[i][1];
            negSum += Math.Min(0, cashback - cost);
        }

        long result = 0;

        // Consider each transaction as the last one
        for (int i = 0; i < n; i++) {
            int cost = transactions[i][0];
            int cashback = transactions[i][1];

            long s = -negSum;
            if (cost > cashback) {
                s -= (cost - cashback);
            }
            result = Math.Max(result, s + cost);
        }

        return result;
    }
}
