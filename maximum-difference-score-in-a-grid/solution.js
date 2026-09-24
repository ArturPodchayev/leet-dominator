/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function (grid) {
    let m = grid.length
    const n = grid[0].length;

    // Create a 2D dp array with the same size as grid
    const dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

    // Initialize the dp array with the maximum possible values achievable when moving right or downward
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            // Take the value at grid[i][j] as a starting point
            if (i === m - 1 && j === n - 1) {
                dp[i][j] = grid[i][j];
            } else if (i === m - 1) {
                dp[i][j] = Math.max(grid[i][j], dp[i][j + 1]);
            } else if (j === n - 1) {
                dp[i][j] = Math.max(grid[i][j], dp[i + 1][j]);
            } else {
                dp[i][j] = Math.max(grid[i][j], dp[i][j + 1], dp[i + 1][j]);
            }
        }
    }

    let maxScore = -Infinity;

    // Calculate the maximum score from any cell to any other reachable cell
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j + 1 < n) {
                maxScore = Math.max(maxScore, dp[i][j + 1] - grid[i][j]);
            }
            if (i + 1 < m) {
                maxScore = Math.max(maxScore, dp[i + 1][j] - grid[i][j]);
            }
        }
    }

    return maxScore;
}
