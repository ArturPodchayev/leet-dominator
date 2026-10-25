class Solution {

    int rows, cols;

    public int closedIsland(int[][] grid) {
        rows = grid.length;
        cols = grid[0].length;

        int count = 0;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 0) {
                    if (dfs(grid, i, j)) {
                        count++;
                    }
                }
            }
        }

        return count;
    }

    private boolean dfs(int[][] grid, int r, int c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols) {
            return false;
        }

        if (grid[r][c] == 1) {
            return true;
        }

        grid[r][c] = 1;

        boolean up = dfs(grid, r - 1, c);
        boolean down = dfs(grid, r + 1, c);
        boolean left = dfs(grid, r, c - 1);
        boolean right = dfs(grid, r, c + 1);

        return up && down && left && right;
    }
}
