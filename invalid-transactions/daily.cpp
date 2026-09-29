class Solution {
public:
    int m,n;
    unordered_map<int,unordered_map<int,unordered_map<int,int>>> mpp;
    // int mpp[101][101][201];
    bool dfs(int i,int j,int c,vector<vector<char>>& grid){
        if(i==m-1 && j==n-1){
            return c+(grid[i][j]=='(' ? 1 : -1)==0;
        }

        if(i>=m || j>=n) return false;
        if(c==0 && grid[i][j]==')') return false;
        if(mpp.count(i) && mpp[i].count(j) && mpp[i][j].count(c)) 
        // if(mpp[i][j][c]!=-1) return mpp[i][j][c];
        return mpp[i][j][c];

        bool down=dfs(i+1,j,c+(grid[i][j]=='(' ? 1 : -1),grid);
        bool right=dfs(i,j+1,c+(grid[i][j]=='(' ? 1 : -1),grid);

        return mpp[i][j][c]=down || right;
    }
    bool hasValidPath(vector<vector<char>>& grid) {
        m=grid.size();
        n=grid[0].size();
        // memset(mpp,-1,sizeof(mpp));
        return dfs(0,0,0,grid);
    }
};
