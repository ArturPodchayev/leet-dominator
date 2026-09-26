class Solution {
public:
    string evaluate(string s, vector<vector<string>>& knowledge) {
        int m = knowledge.size();
        unordered_map<string, string> mp;
        string ans = "";

        for(int i = 0; i < m; i++){
            mp[knowledge[i][0]] = knowledge[i][1];
        }

        int n = s.size();
        int start = -1;

        for(int i = 0; i<n; i++){
            if(s[i] == '(') start = i;
            else if(s[i] == ')'){
                string key = s.substr(start+1, i - start-1);
                
                if(mp.count(key)>0) ans += mp[key];
                else ans += '?';

                start = -1;
            }else if(start == -1) ans += s[i];
        }

        return ans;
    }
};
