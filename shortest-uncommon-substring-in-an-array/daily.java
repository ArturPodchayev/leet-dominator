class Solution {
    public int scoreOfParentheses(String s) {
        int score = 0;
        int current = 0;
        int depth = 0;

        for (char ch: s.toCharArray()) {
            if (ch == '(') {
                current = 1 << depth;
                depth++;
            }
            else {
                depth--;
                score += current;
                current = 0;
            } 
        }
        return score;
    }
}
