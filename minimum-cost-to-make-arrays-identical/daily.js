let uniquePaths = function (grid) {
    const n = grid.length;
    const m = grid[0].length;
    const MOD = 10 ** 9 + 7;

    const dp = Array.from({ length: n }, () =>
        Array.from({ length: m }, () => Array(2).fill(-1))
    );

    const fun = (row, col, last_move) => {
        if (row === n - 1 && col === m - 1) return 1;
        if (row < 0 || row >= n || col < 0 || col >= m) return 0;

        if (dp[row][col][last_move] !== -1) {
            return dp[row][col][last_move];
        }

        let ans = 0;

        if (grid[row][col] === 0) {
            const move_down = fun(row + 1, col, 0);
            const move_right = fun(row, col + 1, 1);
            ans = (move_down + move_right) % MOD;
        }

        else {
            if (last_move === 0) ans = fun(row, col + 1, 1);
            else ans = fun(row + 1, col, 0);
        }

        dp[row][col][last_move] = ans;
        return ans;
    }

    const ans = fun(0, 0, 0);
    return ans;
}
