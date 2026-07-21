class SubrectangleQueries {
    vector<vector<int>> ans;
public:
    SubrectangleQueries(vector<vector<int>>& rectangle) {
        int m=rectangle.size();
        int n=rectangle[0].size();
        ans.resize(m,vector<int>(n));
        ans=rectangle;
    }
    
    void updateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {
        for(int i=row1;i<=row2;i++){
            for(int j=col1;j<=col2;j++){
                ans[i][j]=newValue;
            }
        }
        return ;
    }
    
    int getValue(int row, int col) {
        return ans[row][col];
    }
}
