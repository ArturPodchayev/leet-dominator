class Solution {
public:
    vector<int> resultArray(vector<int>& s) {
        int t[100], n[2]{}, p[]{s[0] + 1, s[0]};
        int* a[]{s.data(), t};
        for (int v : s) {
            int g = p[0] <= p[1];
            p[g] = a[g][n[g]++] = v;
        }
        copy_n(a[1], n[1], a[0] + n[0]);
        return std::move(s);
    }
};
