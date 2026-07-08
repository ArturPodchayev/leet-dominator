public class Solution {
    public int MaximumANDSum(int[] nums, int numSlots) {
        int n = nums.Length;
        int fullMask = 1 << (2 * numSlots); // We need 2 bits per slot to represent the state
        int[] dp = new int[fullMask]; // DP array to store max AND sums

        // Iterate over all possible states (masks)
        for (int mask = 0; mask < fullMask; mask++) {
            int numCount = 0; // Count how many numbers have been placed for the current mask
            for (int j = 0; j < 2 * numSlots; j++) {
                if (((mask >> j) & 1) == 1) {
                    numCount++;
                }
            }

            if (numCount >= n) continue; // If all numbers are already placed, skip

            // Try placing the current number in any available slot
            for (int slot = 0; slot < numSlots; slot++) {
                // Check how many times this slot is already used (0, 1, or 2)
                int useCount = ((mask >> (2 * slot)) & 3);

                if (useCount < 2) { // Slot can still accept a number
                    int newMask = mask | (1 << (2 * slot + useCount));
                    dp[newMask] = Math.Max(dp[newMask], dp[mask] + (nums[numCount] & (slot + 1)));
                }
            }
        }

        // The answer is the maximum value in the DP array
        int result = 0;
        for (int mask = 0; mask < fullMask; mask++) {
            result = Math.Max(result, dp[mask]);
        }

        return result;
    }
}
