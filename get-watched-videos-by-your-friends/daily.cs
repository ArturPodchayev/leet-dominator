public class Solution {
    public int MinimumDeletions(int[] nums) {
        if (nums.Length == 1) {
            return 1;
        }

        int min = Int32.MaxValue;
        int minIdx = 0;
        int max = Int32.MinValue;
        int maxIdx = 0;
        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] < min) {
                min = nums[i];
                minIdx = i;
            }
            if (nums[i] > max) {
                max = nums[i];
                maxIdx = i;
            }
        }

        int ends = minIdx > maxIdx ? maxIdx + 1 + (nums.Length - minIdx) : minIdx + 1 + (nums.Length - maxIdx);
        int left = minIdx > maxIdx ? minIdx + 1 : maxIdx + 1;
        int right = Math.Max(nums.Length - minIdx, nums.Length - maxIdx);

        return Math.Min(ends, Math.Min(left, right));
    }
}
