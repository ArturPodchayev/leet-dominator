public class Solution
{
    int m;
    private static int[][] dp = new int[1001][];
    static Solution()
    {
        for (int j = 0; j <= 1000; j++)
        {
            dp[j] = new int[1501];
        }
    }
private int F(int[] map, int[][] items, int budget, int idx, int mini, int[][] dp)
    {
        if (budget <= 0) return 0;
        if (idx == m)
        {
            return budget / mini;
        }
        if (dp[idx][budget] != -1) return dp[idx][budget];
        int ans = 0;
        if (items[idx][1] <= budget)
        {
            ans = 1 + map[idx] + F(map, items, budget - items[idx][1], idx + 1, mini, dp);

        }
        ans = Math.Max(F(map, items, budget, idx + 1, mini, dp), ans);
        return dp[idx][budget] = ans;

    }
    public int MaximumSaleItems(int[][] items, int budget)
    {
        var map = new int[1001];
        m = items.Length;
        for(int i = 0; i <= 1000; i++)
        {
            Array.Fill(dp[i], -1);
        }
        Array.Sort(items, (a, b) => a[1].CompareTo(b[1]));
        for (int i = 0; i < m; i++)
        {
            int factor = items[i][0];
            for (int j = 0; j < m; j++)
            {
                if (j == i) continue;
                if (items[j][0] % items[i][0] == 0) map[i]++;
            }
        }
        int ans = 0;
        for (int i = 0; i < m; i++)
        {
            if (budget < items[i][1]) break;
            int rem = budget - items[i][1];
    
            ans = Math.Max(ans, 1 + map[i] + F(map, items, rem, i + 1, items[i][1], dp));
        }
        return ans;
    }
}
