using System.Collections.Generic;
using System;
using System.Linq;
public class Solution 
{
    int[,] memo;
    List<int> prefix; 

    public int dp(int i, int j)
    {
        if (memo[i,j] >= 0)
        {
            return memo[i, j];
        }
        else if (j == i + 1)
        {
            return 0;
        }
        else
        {
            int result = Math.Max(prefix[j - 1] - prefix[i] - dp(i, j - 1), prefix[j] - prefix[i + 1] - dp(i + 1, j));
            memo[i, j] = result;
            return result;
        }
    }
    public int StoneGameVII(int[] stones) 
    {
        prefix = new List<int>();
        prefix.Add(0);
        int n = stones.Length;
        memo = new int [n + 1, n + 1];
        for (int i = 0; i < n + 1; i++)
        {
            for (int j = 0; j < n + 1; j++)
            {
                memo[i, j] = -1;
            }
        }
        foreach (int stone in stones)
        {
            prefix.Add(prefix.Last() + stone);
        }
        return dp(0, n);
    }
}
