public class Solution {
    public int LargestInteger(int[] nums, int k) {
        
        int[] freq = new int[51];   // frequency array || Constraints: 1 <= nums.length <= 50
        int max = -1;               // track largest almost missing integer 

        foreach(int n in nums) {
            freq[n]++;        
        }

        // edge cases
        if(nums.Length == k || 1 == k) {
            foreach(int num in nums) {
                if(1 == k && freq[num] == 1) {  // single element subarray || when k is 1
                    max = Math.Max(max, num);     
                }
                if(nums.Length == k) {          // whole array as subarray || when k is the len(array)    
                    max = Math.Max(max, num);
                }
            }
            return max;
        }

        // Middle elements always overlap across subarrays
        // Only edges (first and last) can appear in exactly one subarray || for k > 1 && k < len(array)
        if( freq[ nums[0] ] == 1 && freq[ nums[nums.Length - 1] ] == 1) {
            return Math.Max(nums[0], nums[nums.Length - 1]);
        }

        if(freq[ nums[0] ] == 1) return nums[0];
        if(freq[ nums[nums.Length - 1] ] == 1) return nums[nums.Length - 1];

        return -1;

    }
}
