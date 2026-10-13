public class Solution {
    public long MaxAlternatingSum(int[] nums) => nums
        .OrderByDescending(x => Math.Abs(x))
        .Select((x, i) => i >= (nums.Length + 1) / 2 
            ? -(long)x * x 
            : (long)x * x)
        .Sum();
}
