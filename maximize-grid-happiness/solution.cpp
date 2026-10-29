class Solution {
public:
    int getMaxGridHappiness(int m, int n, int intCount, int extCount) {
        //empty: 0b00, introvert: 0b01, extrovert: 0b10
        vector<vector<vector<vector<int>>>> dp((1<<(2*n))-1, vector<vector<vector<int>>>(m*n+1, vector<vector<int>>(intCount+1, vector<int>(extCount+1, -1))));
        return dfs(0, 0, intCount, extCount, m, n, dp);
    }

private:
    int dfs(int prev, int idx, int nInt, int nExt, const int& m, const int& n, vector<vector<vector<vector<int>>>>& dp) {
        if (dp[prev][idx][nInt][nExt]>=0) return dp[prev][idx][nInt][nExt];
        if (idx==m*n) return dp[prev][idx][nInt][nExt] = 0;
        int top = (idx<n) ? 0 : (prev>>(2*n-2));
        int left = (idx%n==0) ? 0 : (prev&3);
        int newState = (((1<<(2*n-2))-1) & prev) << 2;
        int empty = dfs(newState, idx+1, nInt, nExt, m, n, dp);
        int intro = (nInt==0) ? 0 : newScore(top, left, 1) + dfs(newState+1, idx+1, nInt-1, nExt, m, n, dp);
        int extro = (nExt==0) ? 0 : newScore(top, left, 2) + dfs(newState+2, idx+1, nInt, nExt-1, m, n, dp);
        return dp[prev][idx][nInt][nExt] = max(empty, max(intro, extro));
    }
    
    int newScore(int top, int left, int cur) {
        int score;
        if (cur==1) {
            switch (top) {
                case 2:
                    if (left==2) score = 100;
                    else if (left==1) score = 50;
                    else score = 110;
                    break;
                case 1:
                    if (left==2) score = 50;
                    else if (left==1) score = 0;
                    else score = 60;
                    break;
                default:
                    if (left==2) score = 110;
                    else if (left==1) score = 60;
                    else score = 120;
            }
        }
        else {
            switch (top) {
                case 2:
                    if (left==2) score = 120;
                    else if (left==1) score = 70;
                    else score = 80;
                    break;
                case 1:
                    if (left==2) score = 70;
                    else if (left==1) score = 20;
                    else score = 30;
                    break;
                default:
                    if (left==2) score = 80;
                    else if (left==1) score = 30;
                    else score = 40;
            }
        }
        return score;
    }
};
