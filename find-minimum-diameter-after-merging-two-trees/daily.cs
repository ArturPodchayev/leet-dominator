public class Solution {
    public int NumDistinct(string s, string t) {
        if (s.Length < t.Length) {
            return 0;
        }

        int[] prev = new int[t.Length+1];
        prev[t.Length] = 1;

        for(int i = s.Length - 1; i > -1; i--) {
            int[] curr = new int[t.Length + 1];
            curr[t.Length] = 1;

            for(int j = t.Length - 1; j > -1; j--) {
                if (s[i] == t[j]) {
                    curr[j] = prev[j] + prev[j+1];
                }
                else {
                    curr[j] = prev[j];
                }
            }

            prev = curr;
        }

        return prev[0];
    }
}
