class Solution {
    public boolean winnerSquareGame(int n) {
        boolean[] dp = new boolean[n + 1];

        // dp[i] = true means the player can win with i stones

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j * j <= i; j++) {

                // If removing j*j stones leaves a losing position,
                // current player wins.
                if (!dp[i - j * j]) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[n];
    }
}
