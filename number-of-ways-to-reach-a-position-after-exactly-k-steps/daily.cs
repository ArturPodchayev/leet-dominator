public class Solution
{
    private int[] nums;
    private int n;

    public int MinOperations(int[] nums)
    {
        this.nums = nums;
        this.n = nums.Length;

        if (n <= 1)
            return 0;

        //find the max and check that the rotated array is increasing or decreasing
        int maxIdx = FindMaxAndValidate();

        if (maxIdx == -1)
            return -1;

        // Already sorted increasing: [0, 1, 2, ...]
        if (nums[0] == 0 && maxIdx == n - 1)
            return 0;

        // Max is closer to the left:
        // move max to front, then reverse.
        if (maxIdx <= n / 2)
            return maxIdx + 1;

        // Max is closer to the right:
        // reverse first, then move new max to front, then reverse again.
        int newMaxIdxAfterReverse = n - 1 - maxIdx;

        return 1 + newMaxIdxAfterReverse + 1;
    }

    private int FindMaxAndValidate()
    {
        int maxIdx = 0;

        int increasingBreaks = 0;
        int decreasingBreaks = 0;

        for (int i = 0; i < n; i++)
        {
            int nextIdx = (i + 1) % n;

            if (nums[i] > nums[maxIdx])
                maxIdx = i;

            if (nums[i] == nums[nextIdx])
                return -1;

            // Break for increasing rotated order
            if (nums[i] > nums[nextIdx])
                increasingBreaks++;

            // Break for decreasing rotated order
            if (nums[i] < nums[nextIdx])
                decreasingBreaks++;
        }

        if (increasingBreaks <= 1 || decreasingBreaks <= 1)
            return maxIdx;

        return -1;
    }
}
