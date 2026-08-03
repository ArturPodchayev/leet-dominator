var stoneGameVII = function(stones) {
    const size = stones.length;
    const prefixPoint = Array(size + 1).fill(0);
    const dp = Array(size).fill('').map(_ => Array(size).fill(0));

    for (let index = 1; index <= size; index++) {
        prefixPoint[index] = stones[index - 1] + prefixPoint[index - 1];
    }
    for (let right = 0; right < size; right++) {
        for (let left = right; left >= 0; left--) {
            if (left === right) dp[left][right] = 0;
            else {
                const value1 = prefixPoint[right] - prefixPoint[left] - dp[left][right - 1];
                const value2 = prefixPoint[right + 1] - prefixPoint[left + 1] - dp[left + 1][right];

                dp[left][right] = Math.max(dp[left][right], value1, value2);
            }
        }
    }
    return dp[0][size - 1];
};
