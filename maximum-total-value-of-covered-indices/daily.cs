public class Solution {
    public int MinOperations(int[] nums, int x) {
        if(nums == null || nums.Length == 0)
            return -1;
        var target = nums.Sum() - x;
        if(target == 0)
            return nums.Length;
        var left = 0;
        var currSum = 0;
        var maxSub = 0;
        for(var right = 0;right<nums.Length;right++)
        {
            currSum+=nums[right];
            while(currSum > target && left <= right)
            {
                currSum-=nums[left];
                left++;
            }
            if(currSum == target)
                maxSub = Math.Max(maxSub,right - left + 1);
        }
        return maxSub == 0 ? -1 : nums.Length - maxSub;
    }
}
