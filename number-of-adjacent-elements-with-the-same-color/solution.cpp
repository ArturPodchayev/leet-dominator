class Solution {
public:
    vector<int> colorTheArray(int n, vector<vector<int>>& queries) {
        vector<int> v(n), r;
        int num = 0;
        for (const auto& q : queries) {
            if (v[q[0]]) {
                if (q[0] >= 1 && v[q[0] - 1] == v[q[0]]) {
                    --num;
                }
                if (q[0] + 1 < n && v[q[0] + 1] == v[q[0]]) {
                    --num;
                }
            }
            v[q[0]] = q[1];
            if (q[0] >= 1 && v[q[0] - 1] == v[q[0]]) {
                ++num;
            }
            if (q[0] + 1 < n && v[q[0] + 1] == v[q[0]]) {
                ++num;
            }
            r.push_back(num);
        }
        return r;
    }
};
