public class Solution {
    public int MaximumSaleItems(int[][] items, int budget) {
        int len = items.Length, minP = int.MaxValue;
        int[] factors = new int[len+1];
        int[] multi = new int[len+1];
        
        // Create factor frequency array and get minimum price
        foreach(int[] cur in items)
        {
            int f = cur[0], p = cur[1];
            minP = Math.Min(minP, p);
            factors[f]++;
        }

        // Create possible free items:
        for(int f = 1; f <= len; f++)
        {
            if(factors[f] == 0)
                continue;

            for(int m = f; m <= len; m += f)
            {
                multi[f] += factors[m];
            }
        }

        SortedDictionary<int, int> dict = new();
        for(int i = 0; i < len; i++)
        {
            int f = items[i][0], p = items[i][1];
            int validFree = multi[f]-1; // remove itself
            if(validFree > 0 && p < 2*minP) // price between 1~2 minP and can get one free, it's better than simply buy item with minP price
            {
                dict.TryAdd(p, 0);
                dict[p] += validFree;
            }
        }

        int res = 0;
        foreach(var kvp in dict)
        {
            int price = kvp.Key;
            int cnt = kvp.Value;
            int pick = Math.Min(cnt, budget/price);
            res += 2*pick;
            budget -= pick*price;
        }

        res += budget/minP;
        return res;
    }
}
