class Solution {
    public boolean hasValidPath(char[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        if((n+m-1)%2==1) return false;
        if(grid[0][0]==')' || grid[n-1][m-1]=='(') return false;
        return memo(0, 0, 0, grid, new Boolean[n][m][n + m], n, m);
    }
    public boolean memo(int r, int c, int open, char[][] grid, Boolean[][][] dp, int n, int m) {
        if (r == n - 1 && c == m - 1) {
            return open == 1;
        }
        if (r >= n || c >= m) return false;
        if (dp[r][c][open] != null) return dp[r][c][open];
        int nOpen = open;
        if (grid[r][c] == '(') nOpen++;
        else nOpen--;
        if(nOpen<0) return dp[r][c][open]=false;
        return dp[r][c][open] = memo(r + 1, c, nOpen, grid, dp, n, m) || memo(r, c + 1, nOpen, grid, dp, n, m);
    }
}
