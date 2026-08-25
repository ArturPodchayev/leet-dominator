public class Solution {
    public int MissingMultiple(int[] nums, int k) => Enumerable.Range(1, 200).
        Except(nums).
        Where(m => m % k == 0).
        FirstOrDefault();
}
