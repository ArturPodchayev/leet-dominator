public class Solution {
    public int MissingInteger(int[] nums) {
        int prefixSum = nums[0];

        int i = 1;
        while (i < nums.Length && nums[i] == nums[i - 1] + 1) {
            prefixSum += nums[i];
            i++;
        }

        var values = new HashSet<int>(nums);

        while (values.Contains(prefixSum)) {
            prefixSum++;
        }

        return prefixSum;
    }
}
