function climbStairs(n: number, costs: number[]): number {
    const dp: number[] = new Array(n + 1).fill(-1);

    function solve(i: number): number {
        if (i > n) return Number.MAX_SAFE_INTEGER;
        if (i === n) return 0;
        if (dp[i] !== -1) return dp[i];

        const oneStep = (costs[i] + 1) + solve(i + 1);
        const twoStep = (i + 2 <= n) ? (costs[i + 1] + 4) + solve(i + 2) : Number.MAX_SAFE_INTEGER;
        const threeStep = (i + 3 <= n) ? (costs[i + 2] + 9) + solve(i + 3) : Number.MAX_SAFE_INTEGER;

        return dp[i] = Math.min(oneStep, twoStep, threeStep);
    }

    return solve(0);
}
