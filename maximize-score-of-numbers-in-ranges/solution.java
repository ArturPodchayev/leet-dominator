class Solution {
    public int maxPossibleScore(int[] start, int d) {
        int n = start.length;
        Arrays.sort(start);
        long low = 0, high =(long) 2e9;
        long res = 0;
        while (low <= high) {
            long mid = low + (high - low) / 2;
            if (can(start, d, mid)) {
                res = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
            return(int) res;
    }

    private boolean can(int[] start, int d, long x) {
        int n = start.length;
        long ls = (long)start[0];
        for (int i = 1; i < n; i++) {
            long nxt =Math.max( ls + x,(long)start[i]);
            if (nxt >(long) start[i] + d) {
                return false;
            }
            ls = nxt;
        }
        return true;
    }
}
