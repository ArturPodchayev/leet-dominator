public class Solution {
    public int ScoreOfParentheses(string s)
    {
        var result = ScoreOfParenthesesHelper(0, s);
        return result.Result;
    }

    private (int Result, int EndIndex) ScoreOfParenthesesHelper(int start, string s)
    {
        var result = 0;
        int i;
        for (i = start; i < s.Length; i++)
        {
            var current = s[i];
            if (current == '(')
            {
                var child = ScoreOfParenthesesHelper(i + 1, s);
                result += child.Result;
                i = child.EndIndex;
                continue;
            }

            if (result == 0)
            {
                return (1, i);
            }
            return (2 * result, i);
        }
        return (result, i);
    }
}
