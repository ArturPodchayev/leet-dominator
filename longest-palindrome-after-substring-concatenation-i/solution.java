class Solution {
    public int longestPalindrome(String s, String t) {
        int maxLen = 0;
        
        List<String> sSubs = generateSubstrings(s);
        List<String> tSubs = generateSubstrings(t);
        
        for (String sSub : sSubs) {
            for (String tSub : tSubs) {
                String combined = sSub + tSub;
                if (isPalindrome(combined)) {
                    maxLen = Math.max(maxLen, combined.length());
                }
            }
        }
        
        return maxLen;
    }
    
    private List<String> generateSubstrings(String str) {
        List<String> subs = new ArrayList<>();
        int n = str.length();
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j <= n; j++) {
                subs.add(str.substring(i, j));
            }
        }
        subs.add(""); // include empty substring
        return subs;
    }
    
    private boolean isPalindrome(String s) {
        int left = 0;
        int right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
