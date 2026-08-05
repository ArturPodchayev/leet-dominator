class Solution {
    public int[][] colorBorder(int[][] grid, int row, int col, int color) {

        int m = grid.length;
        int n = grid[0].length;

        boolean[][] visited = new boolean[m][n];

        dfs(grid, visited, grid[row][col], row, col);

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == -1) {
                    grid[i][j] = color;
                }
            }
        }

        return grid;
    }

    private void dfs(int[][] grid, boolean[][] visited, int orgColour, int row, int col) {

        int m = grid.length;
        int n = grid[0].length;

        if (row < 0 || row >= m || col < 0 || col >= n) return;
        if (visited[row][col]) return;
        if (grid[row][col] != orgColour) return;

        visited[row][col] = true;

        if (isBorder(grid, row, col, orgColour)) {
            grid[row][col] = -1;
        }

        dfs(grid, visited, orgColour, row - 1, col);
        dfs(grid, visited, orgColour, row + 1, col);
        dfs(grid, visited, orgColour, row, col - 1);
        dfs(grid, visited, orgColour, row, col + 1);
    }

    private boolean isBorder(int[][] grid, int r, int c, int color) {

        if (r == 0 || r == grid.length - 1 || c == 0 || c == grid[0].length - 1)
            return true;

        return (grid[r - 1][c] != color && grid[r - 1][c] != -1) ||
               (grid[r + 1][c] != color && grid[r + 1][c] != -1) ||
               (grid[r][c - 1] != color && grid[r][c - 1] != -1) ||
               (grid[r][c + 1] != color && grid[r][c + 1] != -1);
    }
}
