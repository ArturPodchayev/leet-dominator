public class Solution {
    public IList<string> RemoveInvalidParentheses(string s) {
        var ret = new List<string>();
        var isPresent = new Dictionary<string, bool>();
        int maxAns = -1;

        void gen(int v, string cur, int depth)
        {
            if (cur.Length + s.Length - v < maxAns)
            {
                return;
            }

            if (v == s.Length)
            {
                if (depth == 0)
                {
                    if (cur.Length > maxAns)
                    {
                        ret = new List<string>();
                        maxAns = cur.Length;
                    }

                    if (cur.Length == maxAns)
                    {           
                        if (!isPresent.ContainsKey(cur))
                        {
                            ret.Add(cur);
                            isPresent.Add(cur, true);
                        }                        
                    }
                }
                return;
            }

            if (s[v] == '(')
            {
                gen(v + 1, cur + s[v], depth + 1);
                gen(v + 1, cur, depth);
            }
            else if (s[v] == ')')
            {
                if (depth > 0)
                {
                    gen(v + 1, cur + s[v], depth - 1);
                }
                gen(v + 1, cur, depth);
            }
            else
            {
                gen(v + 1, cur + s[v], depth);
            }
        }

        gen(0, "", 0);

        return ret;
    }
}
