public class Solution
{
    public int MaxIceCream(int[] costs, int coins)
    {
        int res = 0;

        foreach (int cost in costs.OrderBy(x => x))
        {
            if (cost > coins) break;
            coins -= cost;
            res++;
        }

        return res;        
    }
}
