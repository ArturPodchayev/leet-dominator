public class Solution {
    public int LongestPalindrome(string s, string t) {
        var s2 = new string(t.Reverse().ToArray());
        var rs = 1;
        for (int i = 0; i < s.Length; i++)
        {
            for (int j = 0; j < s2.Length; j++)
            {
                var rs0 = LongestPalindrome(i, s, j, s2);
                rs = Math.Max(rs, rs0);
            }
        }
        return rs;
    }
    private int LongestPalindrome(int index0, string s0, int index1, string s1)
    {
        var rs = 0;
        while (index0 < s0.Length && index1 < s1.Length && s0[index0] == s1[index1])
        {
            rs += 2;
            index0++;
            index1++;
        }
        var rsExtra = 0;
        if (index0 < s0.Length)
        {
            var rsExtra0 = GetExtra(index0, s0);
            rsExtra = Math.Max(rsExtra, rsExtra0);
        }
        if (index1 < s1.Length)
        {
            var rsExtra1 = GetExtra(index1, s1);
            rsExtra = Math.Max(rsExtra, rsExtra1);
        }
        rs += rsExtra;
        return rs;
    }
    private int GetExtra(int index0, string s)
    {
        var rs = 1;
        for (int index1 = s.Length - 1; index1 >= index0; index1--)
        {
            if (IsPalindromic(index0, index1, s))
            {
                rs = index1 - index0 + 1;
                break;
            }
        }
        return rs;
    }
    private bool IsPalindromic(int index0, int index1, string s)
    {
        var indexMid = (index0 + index1 + 1) / 2;
        for (int i = 0; i < indexMid - index0; i++)
        {
            if (s[index0 + i] != s[index1 - i]) return false;
        }
        return true;
    }
}
