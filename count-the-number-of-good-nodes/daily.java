class Solution {
    public String removeOuterParentheses(String s) 
    {
        StringBuilder ans = new StringBuilder();
        int b = 0;

        char[] sc = s.toCharArray();

        for(char c : sc)
        {
            if(c == '(')
            {
                b++;

                if(b > 1)
                    ans.append(c);
            }
            else if(c == ')')
            {
                b--;

                if(b > 0)
                    ans.append(c);
            }
        }

        return ans.toString();
    }
}
