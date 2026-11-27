
class Solution {
    public int maximumSaleItems(int[][] items, int budget) {

        int n = items.length;

        int[] freeCnt = new int[n];
        int cheapest = Integer.MAX_VALUE;

        // Step 1: Calculate free items for each item
        for (int i = 0; i < n; i++) {

            cheapest = Math.min(cheapest, items[i][1]);

            for (int j = 0; j < n; j++) {

                if (i != j &&
                    items[j][0] % items[i][0] == 0) {

                    freeCnt[i]++;
                }
            }
        }

        // Step 2: 0/1 Knapsack DP
        int[] dp = new int[budget + 1];

        for (int i = 0; i < n; i++) {

            int price = items[i][1];
            int value = freeCnt[i] + 1;

            for (int j = budget; j >= price; j--) {

                dp[j] = Math.max(
                    dp[j],
                    dp[j - price] + value
                );
            }
        }

        // Step 3: Use remaining budget to buy cheapest items
        int ans = 0;

        for (int i = 0; i <= budget; i++) {

            ans = Math.max(
                ans,
                dp[i] + (budget - i) / cheapest
            );
        }

        return ans;
    }
}
