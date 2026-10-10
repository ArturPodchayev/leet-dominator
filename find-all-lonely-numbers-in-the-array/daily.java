class Solution {
    public long minSumSquareDiff(int[] nums1, int[] nums2, int k1, int k2) {
        int n = nums1.length;
        long operations = (long) k1 + k2;

        int[] freq = new int[100001];
        int maxDiff = 0;

        for (int i = 0; i < n; i++) {
            int diff = Math.abs(nums1[i] - nums2[i]);
            freq[diff]++;
            maxDiff = Math.max(maxDiff, diff);
        }

        long totalDiff = 0;

        for (int d = 1; d <= maxDiff; d++) {
            totalDiff += (long) d * freq[d];
        }

        if (operations >= totalDiff) {
            return 0L;
        }

        for (int d = maxDiff; d > 0 && operations > 0; d--) {
            if (freq[d] == 0) {
                continue;
            }

            long cost = (long) freq[d];

            if (operations >= cost) {
                freq[d - 1] += freq[d];
                operations -= cost;
                freq[d] = 0;
            } else {
                freq[d] -= (int) operations;
                freq[d - 1] += (int) operations;
                operations = 0;
            }
        }

        long res = 0;

        for (int d = 1; d <= maxDiff; d++) {
            res += (long) d * d * freq[d];
        }

        return res;
    }
}
