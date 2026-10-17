public class Solution {
    public long MinimumPossibleSum(int n, int target) {
        var half = target / 2;
        var sum = 0L;
        if (n >= half)
        {
            sum = (1 + half) * (long)half / 2;
            n -= half;
            sum += (target + target + n - 1) * (long)n / 2;
        }
        else
        {
            sum = (1 + n) * n / 2;
        }
        return sum;
    }
}
