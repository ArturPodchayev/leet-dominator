/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function (n, cost) {
    let dp = [];
    dp[0] = cost[0] + ((0 + 1) * (0 + 1));
    dp[1] = Math.min(dp[0] + cost[1] + (1 - 0) ** 2,
        cost[1] + (1 + 1) ** 2);
    dp[2] = Math.min(dp[0] + cost[2] + (2 - 0) ** 2, dp[1] + cost[2] + (2 - 1) ** 2, cost[2] + (2 + 1) ** 2);
    for (let i = 3; i < cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i] + (1) ** 2,
                dp[i - 2] + cost[i] + (2) ** 2, dp[i - 3] +
                cost[i] + (3) ** 2);
        

    }
    return dp[n-1];
};
