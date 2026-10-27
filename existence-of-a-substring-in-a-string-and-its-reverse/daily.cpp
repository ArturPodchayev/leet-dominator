class Solution {
public:
    vector<string> createGrid(int m, int n) {
        vector<string>ans(m);
        ans[0]=string(n,'.');
        string row = string(n-1,'#')+'.';
        for(int i=1; i<m; i++){
            ans[i] = row;
        }
        return ans;
    }
};
