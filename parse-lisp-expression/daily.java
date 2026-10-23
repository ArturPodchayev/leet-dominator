class Solution {
    public int sortPermutation(int[] nums) {
        int m = nums.length, res = -1;

        for (int i = 0; i < m; i++) {
            int f = nums[i];

            if (f != i) {
                res = res != -1 ? res & f : f;
            }
        } 

        return Math.max(res, 0);
    }
}
