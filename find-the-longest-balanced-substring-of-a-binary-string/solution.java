class Solution {
    public int findTheLongestBalancedSubstring(String s) {
        int prev = 0;
        int curr = 1;
        int max = 0;

        for (int i = 1; i < s.length(); i++) {

            if (s.charAt(i - 1) == s.charAt(i)) {
                curr++;
            } else {
                prev = curr;
                curr = 1;
            }

            if (s.charAt(i) == '1') {
                int count = prev < curr ? prev : curr;
                max = max < count ? count : max;
            }
        }

        return max * 2;
    }
}
