public class Solution {
    public IList<bool> CanMakePaliQueries(string s, int[][] queries) {
        int n = s.Length;

        if (n == 1) {
            return new List<bool>() { true };
        }

        int[,] prefix = new int[n, 26];

        prefix[0, s[0] - 'a'] = 1;

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < 26; j++) {
                prefix[i, j] = prefix[i - 1, j];
            }

            prefix[i, s[i] - 'a']++;
        }

        int m = queries.Length;
        List<bool> result = new List<bool>();

        for (int i = 0; i < m; i++) {
            int start = queries[i][0];
            int end = queries[i][1];
            int k = queries[i][2];
            int odd = 0;

            for (int j = 0; j < 26; j++) {
                int count = start == 0 ? prefix[end, j] : prefix[end, j] - prefix[start - 1, j];
                
                if (count % 2 != 0) {
                    odd++;
                }
            }

            result.Add(odd / 2 <= k);
        }

        return result;
    }
}
