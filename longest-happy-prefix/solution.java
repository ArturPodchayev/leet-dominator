class Solution {
    public String longestPrefix(String s) {
        int n = s.length();
        if (n <= 1) return "";
        
        int[] lps = new int[n];
        int len = 0; 
        int i = 1;
        
        while (i < n) {
            if (s.charAt(i) == s.charAt(len)) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len != 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        
        int longestLen = lps[n - 1];
        return s.substring(0, longestLen);
    }
}
