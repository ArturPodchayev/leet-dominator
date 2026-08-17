class Solution
{
public:
    int stoneGameV(vector<int>& stoneValue)
    {
        int n = stoneValue.size();

        vector<vector<int>> dp(n, vector<int>(n, 0));
        vector<vector<int>> maxL(n, vector<int>(n, 0));
        vector<vector<int>> maxR(n, vector<int>(n, 0));

        for (int i = 0; i < n; i++)
        {
            maxL[i][i] = stoneValue[i];
            maxR[i][i] = stoneValue[i];
        }

        for (int left = n - 1; left >= 0; left--)
        {
            int mid = left - 1;
            int leftSum = 0;
            int totalSum = stoneValue[left];

            for (int right = left + 1; right < n; right++)
            {
                totalSum += stoneValue[right];

                while (mid + 1 < right && (leftSum + stoneValue[mid + 1]) * 2 <= totalSum)
                {
                    mid++;
                    leftSum += stoneValue[mid];
                }

                int res = 0;

                if (mid >= left && leftSum * 2 == totalSum)
                {
                    res = max(maxL[left][mid], maxR[mid + 1][right]);
                }
                else
                {
                    if (mid >= left)
                    {
                        res = maxL[left][mid];
                    }
                    if (mid + 1 < right)
                    {
                        res = max(res, maxR[mid + 2][right]);
                    }
                }

                dp[left][right] = res;

                maxL[left][right] = max(maxL[left][right - 1], totalSum + res);
                maxR[left][right] = max(maxR[left + 1][right], totalSum + res);
            }
        }

        return dp[0][n - 1];
    }
};
