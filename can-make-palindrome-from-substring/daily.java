class Solution {
    public int distinctSubseqII(String s) {
        long mod = 1000000007L;
        long dp = 1;
        long[] last = new long[26];

        for (int i = 0; i < s.length(); i++) {
            int c = s.charAt(i) - 'a';

            long newDp = (2 * dp - last[c]) % mod;

            if (newDp < 0) {
                newDp += mod;
            }

            last[c] = dp;
            dp = newDp;
        }

        return (int) ((dp - 1 + mod) % mod);
    }
}
