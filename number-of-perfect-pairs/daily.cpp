class Solution {
public:
    int countServers(vector<vector<int>>& grid) {
        int n=grid.size();
        int m=grid[0].size();

        int freqRow[250]={};
        int freqCol[250]={};

        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]==1){
                    freqRow[i]++;
                    freqCol[j]++;
                }
            }
        }

        int c=0;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]==1 && (freqRow[i]>1 || freqCol[j]>1))
                    c++;
            }
        }

        return c;
    }
};
