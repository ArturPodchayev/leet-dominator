class Solution {
public:
    string lexSmallest(string s) {
        int n = s.length();
        string ans = s; // initial smallest string is the original one

        for (int k = 0; k < n; k++) {
            string prefix = s;
            string suffix = s;

            // Reverse prefix [0, k)
            reverse(prefix.begin(), prefix.begin() + k);

            // Reverse suffix [n - 1 - k, n)
            reverse(suffix.begin() + n - 1 - k, suffix.end());

            // Choose lexicographically smaller string
            ans = min({ans, prefix, suffix});
        }

        return ans;
    }
};
