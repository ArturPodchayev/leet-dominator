public class Solution {
    public int MaxValue(int n, int index, int maxSum) {
        int lo = maxSum / n;
        int longestRun = Math.Max(index + 1, n - index);
        int hi = maxSum/longestRun + longestRun /2;
        int result = Int32.MinValue;

        while (lo <= hi) {
            int mid = lo + (hi - lo) /2;
            long rightSum = MinSum(mid - 1, n - index - 1);
            long leftSum = MinSum(mid - 1, index);

            long total = leftSum + rightSum + mid;

            if (total == (long)maxSum) {
                return mid;
            }
            else if (total < (long)maxSum) {
                result = Math.Max(result, mid);
                lo = mid + 1;
            }
            else {
                hi = mid - 1;
            }
        }
        return result;
    }

    private long MinSum (long value, long length) {
        if (value >= length) {
            return (value + (value - length + 1)) * length / 2;
        }
        else {
            //will have cells that are all 1's
            return ((value + 1) * value / 2) + length - value;
        }
    }
}
