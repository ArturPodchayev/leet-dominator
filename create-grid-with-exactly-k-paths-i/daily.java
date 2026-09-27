class Solution {
    public String reverseParentheses(String s) {
        int n = s.length();

        int[] arr = new int[n];
        Stack<Integer> st = new Stack<>();

        // Find matching parentheses
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == '(') {
                st.push(i);
            } 
            else if (s.charAt(i) == ')') {
                int j = st.pop();

                arr[i] = j;
                arr[j] = i;
            }
        }

        StringBuilder sb = new StringBuilder();

        int i = 0;
        int a = 1;

        while (i < n) {

            if (s.charAt(i) == '(' || s.charAt(i) == ')') {

                // Jump to the matching bracket
                i = arr[i];

                // Change direction
                a = -a;

            } 
            else {
                sb.append(s.charAt(i));
            }

            i += a;
        }

        return sb.toString();
    }
}
