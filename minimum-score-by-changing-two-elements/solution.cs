public class Solution {
    public int MinimizeSum(int[] nums) {
        int len = nums.Length;
        if(len < 4) 
            return 0;

        Array.Sort(nums);
        // 3 cases:
        // Relace two lower items
        int res = nums[len-1] - nums[2];

        // Replace two higher items:
        res = Math.Min(res, nums[len-3]-nums[0]);

        // Replace lowest and highest items:
        res = Math.Min(res, nums[len-2] - nums[1]);

        return res;
    }
}
