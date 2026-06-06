public class Solution {
    public int[] LeftRightDifference(int[] nums) => Enumerable.
        Range(0, nums.Length).
        Select(m => Math.Abs(
            (nums.Take(m).Sum()) - 
            (nums.Skip(m + 1).Sum()))).
        ToArray();
}
