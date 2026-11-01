class Solution {
    public int minMoves(int[] nums) {
        int min = Integer.MAX_VALUE;
        int total = 0;
        int count = 0;

        for (int num : nums) {
            min = Math.min(min, num);
            total += num;
            count++;
        }

        return total - min * count;
    }
}
