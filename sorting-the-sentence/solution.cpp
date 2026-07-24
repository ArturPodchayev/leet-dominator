class Solution {
public:
    string sortSentence(string s) {
        vector<pair<int, string>> ans;
        string a = "";

        for (int i = 0; i < s.size(); i++) {
            if (isdigit(s[i])) {
                ans.push_back({s[i] - '0', a});
                a = "";
            } else if (s[i] != ' ') {
                a += s[i];
            }
        }

        sort(ans.begin(), ans.end());

        string sol = "";
        for (int i = 0; i < ans.size(); i++) {
            sol += ans[i].second;
            if (i != ans.size() - 1)
                sol += " ";
        }

        return sol;
    }
};
