import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    public long countNonDecreasingSubarrays(int[] nums, int k) {
        Deque<int[]> blocks = new ArrayDeque<>();
        int right = nums.length - 1;
        long cost = 0;
        long answer = 0;

        for (int left = nums.length - 1; left >= 0; left--) {
            int height = nums[left];
            int length = 1;

            // Raise and merge the affected blocks.
            while (!blocks.isEmpty() && blocks.peekFirst()[0] <= height) {
                int[] block = blocks.pollFirst();
                cost += ((long) height - block[0]) * block[1];
                length += block[1];
            }

            blocks.addFirst(new int[]{height, length});

            // Remove rightmost elements until the window is valid.
            while (cost > k) {
                int[] block = blocks.pollLast();
                cost -= (long) block[0] - nums[right];

                if (--block[1] > 0) {
                    blocks.addLast(block);
                }

                right--;
            }

            answer += right - left + 1;
        }

        return answer;
    }
}
