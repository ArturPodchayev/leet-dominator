class Solution {
public:
    int minCost(vector<int>& houses, vector<vector<int>>& cost, int m, int n, int target) {
        vector<vector<int>> dp(target+1, vector<int>(n+1, INT_MAX));

        // setup base cases:
        if(houses[m-1] == 0)
        {
            for(int i=0;i<n;i++)
            {
                dp[1][i] = cost[m-1][i];
            }
        }
        else
        {
            dp[1][houses[m-1]-1] = 0;
        }

        // houses
        for(int i=m-2;i>=0;i--)
        {
            vector<vector<int>> newdp(target+1, vector<int>(n+1, INT_MAX));

            // target neighbourhood
            for(int j=1; j<=target; j++)
            {
                if(houses[i] !=0 )
                {
                    // same neighbourhood
                    newdp[j][houses[i]-1] = dp[j][houses[i]-1];
                }
                // current color
                for(int color = 0;color < n;color++)
                {
                    if(houses[i] ==0 )
                    {
                        // same neighbourhood
                        if (dp[j][color] != INT_MAX)
                            newdp[j][color] =  dp[j][color] + cost[i][color];
                    }
                    // prev color
                    for(int prevColor = 0; prevColor < n ; prevColor++ )
                    {
                        if(houses[i] !=0 && prevColor != houses[i]-1 && j > 1)
                        {
                            // different neighbourhood
                            newdp[j][houses[i]-1] = min(dp[j-1][prevColor], newdp[j][houses[i]-1]);
                        }
                        else if(houses[i] == 0 && color != prevColor && j > 1)
                        {
                            // different neighbourhood
                            if (dp[j-1][prevColor] != INT_MAX)
                                newdp[j][color] = min(dp[j-1][prevColor] + cost[i][color], newdp[j][color]);
                        }
                    }
                }
            }
            dp = newdp;
        }

        int ans = INT_MAX;

        for(int i=0;i<n;i++)
        {
            ans = min(ans, dp[target][i]);
        }

        return ans == INT_MAX ? -1 : ans;

    }
};
