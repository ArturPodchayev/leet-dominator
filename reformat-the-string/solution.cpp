class Solution {
public:
    string reformat(string s) {
        string ans = "";
        int n = s.size();
        int countDig = 0, countAlpha = 0;
        for (int i = 0; i < s.size(); i++) {
            if (s[i] >= '0' && s[i] <= '9')
                countDig++;
            else
                countAlpha++;
        }
        if (abs(countAlpha - countDig) >= 2)
            return "";
        if (countDig > countAlpha) {
            for (int i = 0; i < n; i++) {
                if (s[i] >= '0' && s[i] <= '9') {
                    ans += s[i];
                    ans += '_';
                }
            }
            int j = 1;
            for (int i = 0; i < n; i++) {

                if (!(s[i] >= '0' && s[i] <= '9')) {
                    ans[j] = s[i];
                    j += 2;
                }
            }
        } else {
            for (int i = 0; i < n; i++) {
                if (!(s[i] >= '0' && s[i] <= '9')) {
                    ans += s[i];
                    ans += '_';
                }
            }
            int j = 1;
            for (int i = 0; i < n; i++) {

                if (s[i] >= '0' && s[i] <= '9') {
                    ans[j] = s[i];
                    j += 2;
                }
            }
        }
        n = ans.size();
        if (ans[n - 1] == '_')
            ans.pop_back();
        return ans;
    }
};
