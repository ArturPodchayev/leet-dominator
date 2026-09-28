public class Solution {
    public int MaxDepth(string s) {
        // Is it possible to use a stack?
        Stack<char> st = new();

        int i = 0, max = 0;

        for (i=0; i<s.Length; i++){
            if (s[i] == '(') {
                st.Push(s[i]);
                max = Math.Max(st.Count, max);
            } else if (s[i] == ')') {
                st.Pop();

            }
        }

        return max;
    }
}
