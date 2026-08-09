class Solution {
public:
    int cost(string s, int startAt, int moveCost, int pushCost) {
        int ans = 0;
        int cur = startAt;

        for (char c : s) {
            int d = c - '0';
            if (cur != d)
                ans += moveCost;
            ans += pushCost;
            cur = d;
        }

        return ans;
    }

    int minCostSetTime(int startAt, int moveCost, int pushCost, int targetSeconds) {
        int ans = INT_MAX;

        for (int m = 0; m <= 99; m++) {
            for (int s = 0; s <= 99; s++) {
                if (m * 60 + s != targetSeconds)
                    continue;

                string t;

                if (m >= 10)
                    t += char('0' + m / 10);
                if (m >= 10 || m % 10 != 0)
                    t += char('0' + m % 10);
                if (!t.empty() || s >= 10)
                    t += char('0' + s / 10);
                t += char('0' + s % 10);

                ans = min(ans, cost(t, startAt, moveCost, pushCost));
            }
        }

        return ans;
    }
};
