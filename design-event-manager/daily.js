/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    const  dfs = (i, j) => {
        const stack = [[i, j]];
        let sum = grid[i][j];

        grid[i][j] = 0;

        while (stack.length) {
            const [x, y] = stack.pop();

            const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

            for (const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;

                if (
                    nx >= 0 && nx < m &&
                    ny >= 0 && ny < n &&
                    grid[nx][ny] > 0
                ) {
                    sum += grid[nx][ny]; 
                    grid[nx][ny] = 0;
                    stack.push([nx, ny]);
                }
            }
        }

        return sum;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                if (dfs(i, j) % k === 0) {
                    count++;
                }
            }
        }
    }

    return count;
};
