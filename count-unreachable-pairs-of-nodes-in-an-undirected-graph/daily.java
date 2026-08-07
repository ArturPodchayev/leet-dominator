class Solution {
    private static final int[][] DIGIT = new int[10][4]; // per digit: [pow of 2, pow of 3, pow of 5, pow of 7]
    static {
        DIGIT[2] = new int[]{1,0,0,0};
        DIGIT[3] = new int[]{0,1,0,0};
        DIGIT[4] = new int[]{2,0,0,0};
        DIGIT[5] = new int[]{0,0,1,0};
        DIGIT[6] = new int[]{1,1,0,0};
        DIGIT[7] = new int[]{0,0,0,1};
        DIGIT[8] = new int[]{3,0,0,0};
        DIGIT[9] = new int[]{0,2,0,0};
    }

    public String smallestNumber(String num, long t) {
        long[] primes = {2, 3, 5, 7};
        int[] need = new int[4];
        for (int i = 0; i < 4; i++) {
            while (t % primes[i] == 0) {
                t /= primes[i];
                need[i]++;
            }
        }
        if (t != 1) return "-1";

        int n = num.length();
        int minLen = canonicalTotal(need[0], need[1], need[2], need[3]);
        if (minLen > n) {
            return buildDigits(canonicalCounts(need[0], need[1], need[2], need[3]));
        }

        int[] total = factorsOf(num);
        int firstZero = num.indexOf('0');
        if (firstZero == -1) {
            if (need[0] <= total[0] && need[1] <= total[1] && need[2] <= total[2] && need[3] <= total[3]) {
                return num;
            }
            firstZero = n;
        }

        int[] prefix = total.clone();
        for (int i = n - 1; i >= 0; i--) {
            int d = num.charAt(i) - '0';
            for (int k = 0; k < 4; k++) prefix[k] -= DIGIT[d][k];

            int spaceAfter = n - 1 - i;
            if (i > firstZero) continue;

            int r2 = Math.max(0, need[0] - prefix[0]);
            int r3 = Math.max(0, need[1] - prefix[1]);
            int r5 = Math.max(0, need[2] - prefix[2]);
            int r7 = Math.max(0, need[3] - prefix[3]);

            for (int big = d + 1; big <= 9; big++) {
                int nr2 = Math.max(0, r2 - DIGIT[big][0]);
                int nr3 = Math.max(0, r3 - DIGIT[big][1]);
                int nr5 = Math.max(0, r5 - DIGIT[big][2]);
                int nr7 = Math.max(0, r7 - DIGIT[big][3]);
                int cnt = canonicalTotal(nr2, nr3, nr5, nr7);
                if (cnt <= spaceAfter) {
                    int ones = spaceAfter - cnt;
                    StringBuilder sb = new StringBuilder(n);
                    sb.append(num, 0, i).append((char) ('0' + big));
                    for (int k = 0; k < ones; k++) sb.append('1');
                    sb.append(buildDigits(canonicalCounts(nr2, nr3, nr5, nr7)));
                    return sb.toString();
                }
            }
        }

        int used = canonicalTotal(need[0], need[1], need[2], need[3]);
        int[] counts = canonicalCounts(need[0], need[1], need[2], need[3]);
        StringBuilder sb = new StringBuilder(n + 1);
        for (int k = 0; k < n + 1 - used; k++) sb.append('1');
        sb.append(buildDigits(counts));
        return sb.toString();
    }

    private int canonicalTotal(int n2, int n3, int n5, int n7) {
        int c8 = n2 / 3, rem2 = n2 % 3;
        int c9 = n3 / 2, rem3 = n3 % 2;
        int c4 = rem2 / 2, rem2b = rem2 % 2;
        int c2 = rem2b, c3 = rem3, c6 = 0;
        if (c2 == 1 && c3 == 1) { c2 = 0; c3 = 0; c6 = 1; }
        if (c3 == 1 && c4 == 1) { c3 = 0; c4 = 0; c2 = 1; c6 = 1; }
        return c8 + c9 + c4 + c2 + c3 + c6 + n5 + n7;
    }

    private int[] canonicalCounts(int n2, int n3, int n5, int n7) {
        int c8 = n2 / 3, rem2 = n2 % 3;
        int c9 = n3 / 2, rem3 = n3 % 2;
        int c4 = rem2 / 2, rem2b = rem2 % 2;
        int c2 = rem2b, c3 = rem3, c6 = 0;
        if (c2 == 1 && c3 == 1) { c2 = 0; c3 = 0; c6 = 1; }
        if (c3 == 1 && c4 == 1) { c3 = 0; c4 = 0; c2 = 1; c6 = 1; }
        int[] counts = new int[10];
        counts[2] = c2; counts[3] = c3; counts[4] = c4; counts[5] = n5;
        counts[6] = c6; counts[7] = n7; counts[8] = c8; counts[9] = c9;
        return counts;
    }

    private String buildDigits(int[] counts) {
        StringBuilder sb = new StringBuilder();
        for (int d = 2; d <= 9; d++) {
            for (int k = 0; k < counts[d]; k++) sb.append((char) ('0' + d));
        }
        return sb.toString();
    }

    private int[] factorsOf(String s) {
        int[] res = new int[4];
        for (int i = 0; i < s.length(); i++) {
            int d = s.charAt(i) - '0';
            for (int k = 0; k < 4; k++) res[k] += DIGIT[d][k];
        }
        return res;
    }
}
