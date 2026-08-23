class Solution {
    public boolean sumGame(String num) {
        int n = num.length();
        int diff = 0;
        int q = 0;

        for (int i = 0; i < n / 2; i++) {
            char c = num.charAt(i);

            if (c == '?') {
                q++;
            } else {
                diff += c - '0';
            }
        }

        for (int i = n / 2; i < n; i++) {
            char c = num.charAt(i);

            if (c == '?') {
                q--;
            } else {
                diff -= c - '0';
            }
        }

        // q is the difference between '?' on left and right.
        // If q is odd, Alice can always force a win.
        if ((Math.abs(q) & 1) == 1) {
            return true;
        }

        // When q == 0, Bob wins only if fixed sums are equal.
        if (q == 0) {
            return diff != 0;
        }

        // Bob can win only when the fixed difference is exactly
        // compensatable by the unmatched '?'.
        return 2 * diff != -9 * q;
    }
}
