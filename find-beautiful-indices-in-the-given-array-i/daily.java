
class Solution {
    public int sortableIntegers(int[] nums) {
        int n = nums.length;
        int score = 0;

        for (int k = 1; k <= n; k++) {
            if (n % k != 0) {
                continue;
            }

            boolean valid = true;
            int prev = Integer.MIN_VALUE;

            for (int i = 0; i < n; i += k) {
                int j = i + k - 1;

                int min = min(nums, i, j);
                int max = max(nums, i, j);

                if (min < prev ||
                    !isRotatable(nums, i, j)) {
                    valid = false;
                    break;
                }

                prev = max;
            }

            if (valid) {
                score += k;
            }
        }

        return score;
    }

    int min(int[] nums, int i, int j) {
        int min = nums[i];
        for (int k = i + 1; k <= j; k++) {
            min = Math.min(min, nums[k]);
        }
        return min;
    }

    int max(int[] nums, int i, int j) {
        int max = nums[i];
        for (int k = i + 1; k <= j; k++) {
            max = Math.max(max, nums[k]);
        }
        return max;
    }

    boolean isRotatable(int[] nums, int i, int j) {
        int drops = 0;

        for (int k = i; k < j; k++) {
            if (nums[k] > nums[k + 1]) {
                drops++;
            }
        }

        if (nums[j] > nums[i]) {
            drops++;
        }

        return drops <= 1;
    }
}
