public class Solution {
    public int SortPermutation(int[] nums) {
        int result = int.MaxValue;
        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] != i) {
                result &= i;
            }
        }
        
        return result != int.MaxValue ? result : 0;
    }
}
