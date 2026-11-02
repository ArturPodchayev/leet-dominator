public class Solution {
    public int MinMoves2(int[] nums) {
        Array.Sort(nums);
        int median = nums[nums.Length / 2];
        int res = 0;
        for(int i = 0; i < nums.Length; i++)
        {
            res += Math.Abs(median - nums[i]);
        }
        return res;
    }
}
