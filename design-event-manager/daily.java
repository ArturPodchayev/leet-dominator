class Solution {
    public int countIslands(int[][] grid, int k) {
        int m = grid.length, n = grid[0].length;
        int[] directions = {1, 0, -1, 0, 1};
        int[] queue = new int[m * n];
        int count = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 0) continue;

                int head = 0, tail = 0;
                queue[tail++] = i * n + j;

                long total = grid[i][j];
                grid[i][j] = 0;

                while (head < tail) {
                    int cell = queue[head++];
                    int r = cell / n;
                    int c = cell % n;

                    for (int d = 0; d < 4; d++) {
                        int nr = r + directions[d];
                        int nc = c + directions[d + 1];

                        if (nr < 0 || nr >= m || nc < 0 || nc >= n ||
                            grid[nr][nc] == 0) {
                            continue;
                        }

                        total += grid[nr][nc];
                        grid[nr][nc] = 0;
                        queue[tail++] = nr * n + nc;
                    }
                }

                if (total % k == 0) count++;
            }
        }

        return count;
    }
}
