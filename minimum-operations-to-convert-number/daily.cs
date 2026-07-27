public class Solution {
    public int MaxProduct(int[] nums) {
        if (nums.Length == 2) {
            return ((nums[0]-1)*(nums[1]-1));
        }
        
        int max = 0;
        int secondMax = 0;

        for(int i=0;i<nums.Length;i++) {
            if (nums[i]>max) {
                if (max>secondMax) {
                    secondMax = max;
                }
                max = nums[i];
            } else if (nums[i] > secondMax) {
                secondMax = nums[i];
            }
        }

        return ((max-1)*(secondMax-1));
    }
}
