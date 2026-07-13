class Solution {
public:
    vector<int> findOriginalArray(vector<int>& changed) {
        constexpr int mxx{100000};
        const int n{static_cast<int>(changed.size())};
        if (n % 2) return {};
        sort(changed.begin(), changed.end());
        static int cnt[mxx + 1];
        memset(cnt, 0, sizeof(int) * (changed.back() + 1));
        vector<int> res{};
        res.reserve(n / 2);
        int off{0};
        for (const int x : changed) {
            if (cnt[x]) {
                if (--cnt[x] == 0) --off;
            } else if (x * 2 > changed.back()) return {};
            else {
                if (cnt[x * 2]++ == 0) ++off;
                res.push_back(x);
            }
        }
        return off == 0 ? res : vector<int>{};
    }
};
