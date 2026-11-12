class Solution {
public:
    int ct1[10], ct2[10];
    bool isTransformable(string s, string t) {
        int n = s.size();
        queue<int> q[10];
        for (int i = 0; i < n; i++) {
            int ch1 = s[i]-'0', ch2 = t[i]-'0';
            ct1[ch1]++; ct2[ch2]++;
            q[ch1].push(i);
        }
        for (int i = 0; i < 10; i++) {
            if (ct1[i] != ct2[i]) return false;
        }
        for (int i = 0; i < n; i++) {
            int ch = t[i] - '0';
            for (int j = 0; j < ch; j++) {
                if (!q[j].empty() && q[j].front() < q[ch].front()) {
                    return false;
                }
            }
            q[ch].pop();
        }
        return true;
    }
};
