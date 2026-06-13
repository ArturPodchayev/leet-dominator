public class Solution {
    public int[] Shuffle(int[] nums, int n) => Enumerable.Range(0, n).
        Select(m => new int[]{ nums[m], nums[m + n] }).
        SelectMany(m => m).
        ToArray();
}
