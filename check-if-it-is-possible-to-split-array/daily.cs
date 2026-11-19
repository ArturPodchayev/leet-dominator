public class Solution {
    public int MinimizeSum(int[] nums) {
        if (nums.Length == 3) return 0;
        Array.Sort(nums);
        var max = nums[nums.Length - 1] - nums[2];
        max = Math.Min(max, nums[nums.Length - 3] - nums[0]);
        max = Math.Min(max, nums[nums.Length - 2] - nums[1]);
        return max;
    }
}
