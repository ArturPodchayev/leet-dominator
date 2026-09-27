class Solution {
    public String[] createGrid(int m, int n, int k) {
        int dm = 0, dn = 0;

        if (k == 2 && (m >= 2 && n >= 2)) {
            dm = 1;
            dn = 1;
        } else if (k == 3) {
            if (m >= 3 && n >= 2) {
                dm = 2;
                dn = 1;
            } else if (m >= 2 && n >= 3) {
                dm = 1;
                dn = 2;
            } else
                return new String[] {};
        } else if (k == 4) {
            if (m >= 4 && n >= 2) {
                dm = 3;
                dn = 1;
            } else if (m >= 2 && n >= 4) {
                dm = 1;
                dn = 3;
            } else if (m >= 3 && n >= 3) {
                dm = 2;
                dn = 2;
            } else
                return new String[] {};
        } else if (k > 1)
            return new String[] {};

        // Array filled with obstacles
        char[][] grid = new char[m][n];
        for (char[] row : grid) {
            Arrays.fill(row, '#');
        }
        // free up the box with required path counts only
        for (int i = 0; i <= dm; i++)
            for (int j = 0; j <= dn; j++)
                grid[i][j] = '.';
        
        // 2 obs are required for 3X3 box with 4 paths
        if (dm == 2 && dn == 2 && k == 4) {
            grid[0][2] = '#';
            grid[2][0] = '#';
        }

        // connect till end with single path
        for (int i = dm + 1; i < m; i++)
            grid[i][dn] = '.';


        for (int j = dn + 1; j < n; j++)
            grid[m - 1][j] = '.';

        String[] ans = new String[m];
        for (int i = 0; i < m; i++)
            ans[i] = new String(grid[i]);
        return ans;
    }
}
