
 class Solution {
     public int missingInteger(int[] nums) {

         int sum = nums[0];

         // Sum the longest sequential prefix.
         for (int i = 1; i < nums.length && nums[i] == nums[i - 1] + 1; i++) {
             sum += nums[i];
         }

         // Store all numbers for O(1) average lookup.
         Set<Integer> set = new HashSet<>();
         for (int num : nums) {
             set.add(num);
         }

         // Find the smallest missing number >= prefix sum.
         while (set.contains(sum)) {
             sum++;
         }

         return sum;
     }
 }
