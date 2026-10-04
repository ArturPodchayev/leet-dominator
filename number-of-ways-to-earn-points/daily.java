class Solution {
    public boolean checkValidString(String s) {
        int n = s.length();
        int open = 0;
        for (char ch : s.toCharArray()) {
            if (ch == '(' || ch == '*')
                open++;
            else
                open--;
            if (open < 0)
                return false;
        }
        int close = 0;
        for (int i = n - 1; i >= 0; i--) {
            if (s.charAt(i) == ')' || s.charAt(i) == '*')
                close++;
            else
                close--;


            if (close < 0)
                return false;
        }
        return true;
    }
}
