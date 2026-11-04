public class Solution {
    public int MinimumAddedCoins(int[] coins, int target) {
        Array.Sort(coins);
        long res = 1;
        int count = 0;
        int i = 0;

        while (i < coins.Length)
        {
            if (coins[i] > res) // res cannot be made, so add
            {
                res = res + res; // covers till res * 2
                count++; // no of elements added
                continue;
            }
            res += coins[i++];
        }

        while (res <= target) // exhaused the input array, keep adding
        {
            res = res + res;
            count++;
        }
        return count;
    }
}
