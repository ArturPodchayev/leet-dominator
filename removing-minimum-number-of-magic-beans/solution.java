
import java.util.Arrays;

class Solution {
    public long minimumRemoval(int[] beans) {
        Arrays.sort(beans);
        int n = beans.length;            // use length, not length-1

        long[] prefix = new long[n + 1]; // long to avoid overflow
        for (int i = 1; i <= n; i++) {
            prefix[i] = prefix[i - 1] + beans[i - 1];
        }

        long ans = Long.MAX_VALUE;

        for (int i = 0; i < n; i++) {
            long x = beans[i];
            long sumSmaller  = prefix[i];             // [0..i-1] remove entirely
            long sumGreater  = prefix[n] - prefix[i+1]; // [i+1..n-1] strictly greater than x
            long removeGreater = sumGreater - x * (n - i - 1);

            long total = sumSmaller + removeGreater;  // beans[i] contributes 0
            if (total < ans) ans = total;
        }
        return ans;
    }
}
