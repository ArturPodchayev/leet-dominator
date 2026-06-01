public class Solution 
{
    public int MinimumCost(int[] cost) 
    {
        Array.Sort(cost);
        int min_cost = 0;
        int j = 0;
    
        for (int i = cost.Length-1; i >= 0; i--)
        {
            min_cost += cost[i];
            j++;
            if (j == 3)
            {
                j = 0;
                min_cost -= cost[i];
            }
        }
        return min_cost;
    }
}
