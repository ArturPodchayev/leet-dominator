class Solution {
    public int minCost(int[][] A) {
        int m = A.length, n = A[0].length;
        return recurse(A, m - 1, n - 1, 0, new Integer[m+1][n+1][1024]);
    }

    int recurse(int[][] A, int r, int c, int xor, Integer[][][] dp) {
        if (r < 0 || c < 0)
            return Integer.MAX_VALUE;
        
        xor ^= A[r][c];

        if (r == 0 && c == 0)
            return xor;

        if (dp[r][c][xor] != null)
            return dp[r][c][xor];
        
        return dp[r][c][xor] = Math.min(
            recurse(A, r, c - 1, xor, dp), 
            recurse(A, r - 1, c, xor, dp));

    }
}
