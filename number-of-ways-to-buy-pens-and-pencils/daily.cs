public class Solution {
    public int MinCost(int[][] grid) {
        int m = grid.Length, n = grid[0].Length;
        HashSet<int>[] dp = new HashSet<int>[n];
        int pre = 0;
        for(int j = 0; j < n; j++)
        {
            dp[j] = new HashSet<int>();
            int cur = pre^grid[0][j];
            dp[j].Add(cur);
            pre = cur;
        }

        for(int i = 1; i < m; i++)
        {
            for(int j = 0; j < n; j++)
            {
                int cur = grid[i][j];
                HashSet<int> tmp = new();

                // from top:
                foreach(int t in dp[j])
                {
                    tmp.Add(cur^t);
                }

                // from left
                if(j > 0)
                {
                    foreach(int l in dp[j-1])
                    {
                        tmp.Add(cur^l);
                    }
                }

                dp[j] = new HashSet<int>(tmp.ToArray());
            }
        }

        return dp[n-1].Min();
    }
}
