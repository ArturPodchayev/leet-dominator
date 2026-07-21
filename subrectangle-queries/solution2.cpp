class SubrectangleQueries {
public:
    vector<vector<int>>rect,mat;
    SubrectangleQueries(vector<vector<int>>& rectangle) {
        rect=rectangle;
    }
    
    void updateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {
        mat.push_back({row1,col1,row2,col2,newValue});
    }
    
    int getValue(int row, int col) {
            for(int i=mat.size()-1;i>=0;i--){
                if((row>=mat[i][0] && row<=mat[i][2]) && (col>=mat[i][1] && col<=mat[i][3]))return mat[i][4];
            }
            return rect[row][col];
        
    }
};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * SubrectangleQueries* obj = new SubrectangleQueries(rectangle);
 * obj->updateSubrectangle(row1,col1,row2,col2,newValue);
 * int param_2 = obj->getValue(row,col);
 */
