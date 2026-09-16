function numberOfSets(n: number, k: number): number {
    const MOD = 1e9 + 7;
    const dp: number[][] = Array(n + 1).fill(null).map(() => Array(k + 1).fill(0));
    const prefixSum: number[][] = Array(n + 1).fill(null).map(() => Array(k + 1).fill(0));

    // There is 1 way to partition 0 elements into 0 subsets
    dp[0][0] = 1;

    // Fill the dp and prefixSum arrays for the case where artitioning into 0 subsets
    for (let i = 1; i <= n; i++) {
        dp[i][0] = 1;
        prefixSum[i][0] = (prefixSum[i - 1][0] + dp[i][0]) % MOD;
    }

    // Fill the dp and prefixSum arrays for all other cases
    for (let j = 1; j <= k; j++) {
        for (let i = 1; i <= n; i++) {
            // Calculate the number of ways to partition i elements into j subsets
            dp[i][j] = (dp[i - 1][j] + prefixSum[i - 1][j - 1]) % MOD;

            // Update the prefixSum array
            prefixSum[i][j] = (prefixSum[i - 1][j] + dp[i][j]) % MOD;
        }
    }

    // Return the number of ways to partition n elements into k subsets
    return dp[n][k];
};
