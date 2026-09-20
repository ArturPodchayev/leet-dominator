class Solution {
    private long MOD = Long.MAX_VALUE / 100;
    public int longestValidSubstring(String word, List<String> forbidden) {
        int ll = 0;
        int res = 0;
        Set<Long> hashSet = new HashSet<>();
        int maxSubLen = 0;
        for (String sub : forbidden) {
            long hash = 0;
            char[] arr = sub.toCharArray();
            for (int i = arr.length - 1; i >= 0; i--) {
                hash = (hash * 27 + arr[i] - 'a' + 1) % MOD;
            }
            hashSet.add(hash);
            maxSubLen = Math.max(maxSubLen, sub.length());
        }

        for (int rr = 0; rr < word.length(); rr++) {
            long hash = 0;
            for (int j = rr; j >= ll; j--) {
                if (rr - j + 1 > maxSubLen) {
                    break;
                }
                hash = (hash * 27 + word.charAt(j) - 'a' + 1) % MOD;
                if (hashSet.contains(hash)) {
                    ll = j + 1;
                    break;
                }
            }
            res = Math.max(res, rr - ll + 1);
        }
        return res;
    }
}
