public class Solution {
    public int MaxProduct(int[] nums) {
        Array.Sort(nums);
        int n = nums.Length;
        return (nums[n-2]-1)*(nums[n-1]-1);
    }
}
