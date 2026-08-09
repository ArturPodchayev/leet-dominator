public class Solution
{
    public int StoneGameII(int[] piles)
    {
        int n = piles.Length;
        int[] suffix = new int[n + 1];
        int[,] memo = new int[n, n + 1];

        for (int i = n - 1; i >= 0; i--)
            suffix[i] = suffix[i + 1] + piles[i];

        int Dp(int index, int m)
        {
            if (index + 2 * m >= n)
                return suffix[index];

            if (memo[index, m] != 0)
                return memo[index, m];

            int opponent = int.MaxValue;

            for (int x = 1; x <= 2 * m; x++)
            {
                opponent = Math.Min(
                    opponent,
                    Dp(index + x, Math.Max(m, x))
                );
            }

            return memo[index, m] = suffix[index] - opponent;
        }

        return Dp(0, 1);
    }
}
