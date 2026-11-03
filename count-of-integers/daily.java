class Solution {
    public int minMoves(int[] nums) {

        int maxElement = 0;

        for (int num : nums) {
            maxElement = Math.max(maxElement, num);
        }

        int moves = 0;

        for (int num : nums) {
            moves += maxElement - num;
        }

        return moves;
    }
}
