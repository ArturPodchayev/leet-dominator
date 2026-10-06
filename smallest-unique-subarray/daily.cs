public class Solution {
    public int MinAddToMakeValid(string s) {
        Stack<char> stack = new Stack<char>();
        int unmatchedClose = 0;

        foreach (char c in s) {
            if (c == '(') {
                stack.Push(c);  
            } else if (c == ')') {
                if (stack.Count > 0) {
                    stack.Pop();  
                } else {
                    unmatchedClose++;  
                }
            }
        }
        return stack.Count + unmatchedClose;
    }
}
