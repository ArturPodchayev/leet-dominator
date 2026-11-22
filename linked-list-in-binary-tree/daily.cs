public class Solution {
    public bool CheckString(string s) {
        for (int i = 1; i < s.Length; i++)
            if (s[i] == 'a' && s[i - 1] == 'b')
                return false;

        return true;
    }
}
