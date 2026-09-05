    public int countPyramids(int[][] grid) {
    	int m = grid.length, n = grid[0].length, res = 0;
    	for (int i = 0; i < m; i++)
        	for (int j = 1; j < n; j++)
        		if (grid[i][j] == 1)
        			grid[i][j] = grid[i][j - 1] + 1;
        for (int r = 0; r < m; r++)
        	for (int c = 1; c < n; c++)
        		if (grid[r][c] > 0) {
                	for (int d = r + 1, left = c - 1, right = c + 1; left >= 0 && right < n && d < m && grid[d][left] > 0 && grid[d][right] - grid[d][left] >= 2 * (d - r); d++, left--, right++)
                			res++;
                	for (int u = r - 1, left = c - 1, right = c + 1; left >= 0 && right < n && u >= 0 && grid[u][left] > 0 && grid[u][right] - grid[u][left] >= 2 * (r - u); u--, left--, right++)
                			res++;
                }
        return res;
    }
