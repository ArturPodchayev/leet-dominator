import java.util.Arrays;

class Solution {
    public long maxAlternatingSum(int[] nums) {
        int n = nums.length;
        
        // Step 1: Square each number to work with positive magnitudes
        for (int i = 0; i < n; ++i) {
            nums[i] = nums[i] * nums[i];
        }
        
        // Step 2: Sort the squares in ascending order
        Arrays.sort(nums);
        
        long ans = 0;
        int m = n / 2; // Number of elements to subtract
        
        // Step 3: Subtract the smaller half of the squares
        for (int i = 0; i < m; ++i) {
            ans -= nums[i];
        }
        
        // Step 4: Add the larger half of the squares
        for (int i = m; i < n; ++i) {
            ans += nums[i];
        }
        
        return ans;
    }
}
