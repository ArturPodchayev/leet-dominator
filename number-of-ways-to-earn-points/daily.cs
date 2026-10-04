public class Solution {
    public bool CheckValidString(string s) {
        var ch = 0;
var lh = 0;
foreach (char c in s)
{
    ch += c == '(' ? 1 : -1;
    lh += c != ')' ? 1 : -1;
    if (lh < 0) return false;
    ch = Math.Max(ch, 0);
}
return ch == 0;
    }
}
