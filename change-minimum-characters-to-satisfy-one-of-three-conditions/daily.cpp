class Solution {
public:
    int minOperations(string s) {
        int n = s.size();
        if (n == 1 || is_sorted(s.begin(), s.end())) return 0;
        if (n == 2) return s[0] <= s[1] ? 0 : -1;

        vector<int> freq(26, 0);
        for (int i = 0; i < n; ++i) freq[s[i] - 'a']++;

        bool start1 = false, start2 = false;
        for (int i = 0; i < 26; ++i) {
            if (freq[i] != 0) {
                if (i + 'a' == s[0]) start1 = true;
                if (i + 'a' == s[n - 1]) start2 = true;
                break;
            }
        }

        bool end1 = false, end2 = false;
        for (int i = 25; i >= 0; --i) {
            if (freq[i] != 0) {
                if (i + 'a' == s[n - 1]) end1 = true;
                if (i + 'a' == s[0]) end2 = true;
                break;
            }
        }

        if (start1 || end1) {
            return 1;
        } else if ((start2 && !end2) || (end2 && !start2)) {
            return 2;
        } else if (start2 && end2 && freq[s[0] - 'a'] == 1 && freq[s[n - 1] - 'a'] == 1) {
            return 3;
        }

        return 2;
    }
};
