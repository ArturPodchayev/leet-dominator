function countServers(grid: number[][]): number {
    const { length: m } = grid
    const { length: n } = grid[0]

    const rows = new Array(m).fill(0)
    const cols = new Array(n).fill(0)

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                rows[i]++
                cols[j]++
            }
        }
    }

    let result = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && Math.max(rows[i], cols[j]) > 1) result++;
        }
    }

    return result;
};
