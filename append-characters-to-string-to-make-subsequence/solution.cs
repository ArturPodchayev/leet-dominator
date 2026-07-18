public class Solution {
    public int AppendCharacters(string s, string t) {
        int si = 0;
        int ti = 0;
        while (si < s.Length && ti < t.Length)
        {
            if (s[si]== t[ti])
            {
                ti++;
            }
            si++;           
        }
        return t.Length-ti;
    }
}
