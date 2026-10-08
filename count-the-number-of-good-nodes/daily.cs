public class Solution {
    public string RemoveOuterParentheses(string s) {
        StringBuilder sb = new StringBuilder();
        int counter = 0;

        foreach (char c in s) {
            if (c == '(') {
                counter++;
                if (counter > 1)
                    sb.Append(c);
            }
            else {
                counter--;
                if (counter > 0)
                    sb.Append(c);
            }
        }

        return sb.ToString();
    }
}
