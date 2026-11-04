public class Solution {
    public int MinimumAddedCoins(int[] coins, int target) {
        Array.Sort(coins);
        var cp = 0;
        var miss = 1;
        var added = 0;
        while (miss <= target) {
            if (cp < coins.Length && coins[cp] <= miss) {
                miss += coins[cp];
                cp++;
            } else {
                added++;
                miss *= 2;
            }
        }
        return added;
    }
}
