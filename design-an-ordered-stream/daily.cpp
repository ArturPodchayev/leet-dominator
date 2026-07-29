using ll = long long;

class Solution {

    static const int LIM = 1000000;

    ll C(int n, int r) {
        if (r > n) return 0;
        r = min(r, n - r);

        ll ans = 1;

        for (int i = 1; i <= r; i++) {
            ans = ans * (n - r + i) / i;
            if (ans > LIM) return LIM + 1;
        }

        return ans;
    }

    ll ways(vector<int>& cnt) {
        ll ans = 1;
        int rem = 0;

        for (int x : cnt) {
            if (x == 0) continue;

            ans *= C(rem + x, x);

            if (ans > LIM) ans = LIM + 1;

            rem += x;
        }

        return ans;
    }

public:
    string smallestPalindrome(string s, int k) {

        vector<int> freq(26, 0);

        for (char ch : s)
            freq[ch - 'a']++;

        vector<int> half(26, 0);
        string mid = "";
        int len = 0;

        for (int i = 0; i < 26; i++) {
            half[i] = freq[i] / 2;
            len += half[i];

            if (freq[i] & 1)
                mid += char('a' + i);
        }

        if (ways(half) < k)
            return "";

        string first = "";

        for (int pos = 0; pos < len; pos++) {

            for (int c = 0; c < 26; c++) {

                if (half[c] == 0)
                    continue;

                half[c]--;

                ll cnt = ways(half);

                if (cnt >= k) {
                    first += char('a' + c);
                    break;
                }

                k -= cnt;
                half[c]++;
            }
        }

        string second = first;
        reverse(second.begin(), second.end());

        return first + mid + second;
    }
};
