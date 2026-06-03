public class Solution {
    public int[] RunningSum(int[] nums) {
        Span<int> bn = nums;

        for (int i = 1; i < nums.Length; i++) {
            bn[i] += bn[i - 1];
        }
        return nums;
    }
}
