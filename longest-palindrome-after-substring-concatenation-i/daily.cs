public class Solution {
    public int StoneGameVIII(int[] stones) {
        int total = stones.Sum();
        int result = total;
        
        for (int i = stones.Length - 1; i > 1; i--) {
            total -= stones[i];
            result = Math.Max(result, total - result);
        }

        return result;
    }
}
