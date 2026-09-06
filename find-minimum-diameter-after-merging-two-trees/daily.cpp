class Solution {
public:
    int numDistinct(string s, string t) {
        int n = s.size();
        int m = t.size();

        vector<int> dp(m + 1, 0);

        // t is completely matched.
        dp[m] = 1;

        for(int i = n - 1; i >= 0; i--)
        {
            for(int j = 0; j < m; j++)
            {
                int take = 0;

                if(s[i] == t[j])
                    take = dp[j + 1];

                int skip = dp[j];

                if(take > INT_MAX - skip)
                    dp[j] = INT_MAX;
                else
                    dp[j] = take + skip;
            }
        }

        return dp[0];
    }
};
