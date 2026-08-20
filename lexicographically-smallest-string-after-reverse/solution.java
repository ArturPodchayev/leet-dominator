class Solution {
    public String lexSmallest(String s) {
        String res = s;
        int n = s.length();
        for (int k = 1; k <= n; k++) {
            // first k
            StringBuilder sb = new StringBuilder(s.substring(0, k));
            sb.reverse().append(s.substring(k, n));
            if (res.compareTo(sb.toString()) > 0) res = sb.toString();
            // last k
            sb = new StringBuilder(s.substring(n-k, n));
            sb.reverse().insert(0, s.substring(0, n-k));
            if (res.compareTo(sb.toString()) > 0) res = sb.toString();
        }
        return res;
    }
}
