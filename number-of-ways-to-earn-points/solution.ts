function numOfWaysToReachTarget(target: number, types: number[][]): number {
    const MOD = 1_000_000_007;
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (const [count, marks] of types) {
        for (let t = target; t >= 0; t--) {
            for (let c = 1; c <= count && c * marks <= t; c++) {
                dp[t] = (dp[t] + dp[t - c * marks]) % MOD;
            }
        }
    }

    return dp[target];
};
