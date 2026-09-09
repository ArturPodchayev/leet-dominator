class Solution {
    public long countCommas(long n) {
        long res = 0, p = 1000;
        for (int k = 1; p <= n; k++, p *= 1000) {
            res += (Math.min(n, p * 1000 - 1) - p + 1) * k;
        }

        return res;
    }
}
