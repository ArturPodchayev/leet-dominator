class Solution {
    public int smallestIndex(String s) {
        int n = s.length();

        for (int i = 0; i <= n / 2; i++) {
            if (s.charAt(i) == s.charAt(n - i - 1)) {
                return i;
            }
        }

        return -1;
    }

    /*
        Analysis:
            Time Complexity  : O(n)
            Space Complexity : O(1)
    */
}
