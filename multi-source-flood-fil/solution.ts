function colorGrid(n: number, m: number, sources: number[][]): number[][] {
    const grid: number[][] = Array.from({ length: n }, () => new Array<number>(m).fill(0));

    const sorted = [...sources].sort((a, b) => b[2] - a[2]);

    const queue: number[] = [];
    let head = 0;

    for (const [r, c, color] of sorted) {
        grid[r][c] = color;
        queue.push(r * m + c);
    }

    const dirs: readonly (readonly [number, number])[] = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (head < queue.length) {
        const cell = queue[head++];
        const r = (cell / m) | 0;
        const c = cell % m;
        const color = grid[r][c];

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
            if (grid[nr][nc] !== 0) continue;
            grid[nr][nc] = color;
            queue.push(nr * m + nc);
        }
    }

    return grid;
}
