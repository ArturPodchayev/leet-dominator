class Solution {
public:
    long long maximumTotalSum(vector<int>& h) {
        sort(h.begin(), h.end());
        long long s = h.back();
        for (int i = h.size() - 2; i >= 0; --i) {
            h[i] = min(h[i], h[i + 1] - 1);
            if (h[i] <= 0){
                 return -1;
            }
            s += h[i];
        }
        return s;
    }
};
