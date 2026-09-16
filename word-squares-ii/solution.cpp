class Solution {
public:
    vector<vector<string>> wordSquares(vector<string>& w) {
        int n = w.size();
        vector<vector<string>> res;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    for (int l = 0; l < n; l++) {
                        if(i==j || i==k || i==l || j==k || j==l || k==l) continue;
                        if (w[i][0] == w[j][0] && w[j][3] == w[l][0] &&
                            w[l][3] == w[k][3] && w[k][0] == w[i][3])
                            res.push_back({w[i], w[j], w[k], w[l]});
                    }
                }
            }
        }
        sort(res.begin(), res.end());
        return res;
    }
};
