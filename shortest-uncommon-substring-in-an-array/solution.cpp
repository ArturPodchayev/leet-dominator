class Solution {
public:
    vector<string> shortestSubstrings(vector<string>& arr) {
        int n = arr.size();
        vector<string> res(n);

        for (int i = 0; i < n; i++) {
            for (int len = 1; len <= arr[i].length(); len++) {
                for (int start = 0; start + len - 1 < arr[i].length(); start++) {
                    string s = arr[i].substr(start, len);
                    bool flag = false;

                    for (int j = 0; j < n; ++j) {
                        if (i == j) continue;
                        if (arr[j].find(s) != string::npos) {
                            flag = true;
                            break;
                        }
                    }                        
                    
                    if (!flag && (res[i].empty() || res[i] > s)) {
                        res[i] = s;
                    }
                }

                if (!res[i].empty())
                    break;
            }
        }

        return res;
    }
};
