class Solution {

    public int longestValidParentheses(String s) {
        int n = s.length();
        int max = 0, k = 0;

        int st[] = new int[n + 1];

        st[k++] = -1;

        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == '(')
                st[k++] = i;
            else
                k--;

            if (k == 0)
                st[k++] = i;
            else
                max = Math.max(max, i - st[k - 1]);
        }

        return max;
    }
}
