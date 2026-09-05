const countPyramids = (grid) => {
    const m = grid.length, n = grid[0].length;
    const memoUp = Array.from({ length: m }, () => Array(n).fill(-1)); //Normal Pyramids
    const memoDown = Array.from({ length: m }, () => Array(n).fill(-1)); //Inverted Pyramids
 
    const dp = (i, j, isInverted) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) return 0;

        const memo = isInverted ? memoDown : memoUp;
        if (memo[i][j] !== -1) return memo[i][j];

        const nextRow = isInverted ? i + 1 : i - 1;
        if (nextRow < 0 || nextRow >= m) return memo[i][j] = 1;

        return memo[i][j] = 1 + Math.min(
            dp(nextRow, j - 1, isInverted), 
            dp(nextRow, j + 1, isInverted),
            dp(nextRow, j, isInverted)
        );
    };

    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const up = dp(i, j, false);
                const down = dp(i, j, true);

                //The number of cells in the set has to be greater than 1 (Given in the problem)
                if (up > 1) res += up - 1;
                if (down > 1) res += down - 1;
            }
        }
    }
    return res;
};
