public class Solution {
    public int FindTheLongestBalancedSubstring(string s) {
        int n = s.Length;
        int ans = 0;
        for (int i = 0, cntOne = 0, cntZero = 0; i < n; i++) {
            if (s[i] == '0') {
                if (cntOne != 0) {
                    cntZero = 1;
                    cntOne = 0;
                } else cntZero++;
            } else {
                cntOne++;
                ans = Math.Max(ans, Math.Min(cntOne, cntZero) * 2);
            }
        }
        return ans;
    }
}
