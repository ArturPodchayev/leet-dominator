class Solution {
    public int largestInteger(int[] nums, int k) {

        int n = nums.length;
        int max = -1;

        if (k == n) {
            max = nums[0];

            for (int i = 1; i < n; i++) {
                max = Math.max(max, nums[i]);
            }

            return max;
        }

        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < n; i++) {
            if (map.containsKey(nums[i]))
                map.put(nums[i], map.get(nums[i]) + 1);
            else
                map.put(nums[i], 1);
        }

        if (k > 1) {

            if (map.get(nums[0]) == 1)
                max = nums[0];

            if (map.get(nums[n - 1]) == 1)
                max = Math.max(nums[n - 1], max);

            return max;
        }

        for (int i = 0; i < n; i++) {
            if (map.get(nums[i]) == 1)
                max = Math.max(max, nums[i]);
        }

        return max;
    }
}
