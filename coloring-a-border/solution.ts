function colorBorder(grid: number[][], row: number, col: number, color: number): number[][] {
    const previousColor = grid[row][col]

    if (previousColor !== color) {
        const m = grid.length
        const n = grid[0].length
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1],];
        const visited: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false))
        const borders: [number, number][] = []

        const outOfBorders = (row, col) => row < 0 || row >= m || col < 0 || col >= n

        const dfs = (row, col) => {
            if (outOfBorders(row, col) || visited[row][col] || grid[row][col] != previousColor) {
                return
            }
            visited[row][col] = true

            let isBorder = false
            for (const [di, dj] of directions) {
                const ni = row + di
                const nj = col + dj

                if (!isBorder && (outOfBorders(ni, nj) || grid[row][col] != grid[ni][nj])) {
                    borders.push([row, col])
                    isBorder = true
                }
                dfs(ni, nj)
            }
        }

        dfs(row, col)
        for (const [i, j] of borders) {
            grid[i][j] = color
        }
    }

    return grid
};
