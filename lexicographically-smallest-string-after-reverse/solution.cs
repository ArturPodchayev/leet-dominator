public class Solution {
    public string LexSmallest(string s) {
        var sRev = new string(s.Reverse().ToArray());
        var rs = s;
        for (int i = 0; i < s.Length; i++)
        {
            var rs0 = s.Substring(0, i + 1) + sRev.Substring(0, sRev.Length - (i + 1)); // sub + rev
            var rs1 = sRev.Substring(sRev.Length - (i + 1)) + s.Substring(i + 1); // rev + sub
            int compare = rs0.CompareTo(rs1);
            var rs01 = compare < 0 ? rs0 : rs1;
            int compare2 = rs01.CompareTo(rs);
            if (compare2 < 0) rs = rs01;
        }
        return rs;
    }
}
