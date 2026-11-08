public class Solution {
    public int CountServers(int[][] grid) {
       int totalCount = 0;
 
        for(int i=0;i<grid.Length;i++){
            for(int j=0;j<grid[0].Length;j++){
                if(grid[i][j]==0) continue;
                Queue<(int r, int c)> q = new Queue<(int,int)>();
                q.Enqueue((i,j));
                int cnt = 0;
                while(q.Count > 0){
                    int row = q.Peek().r;
                    int col = q.Peek().c;
                
                    
                    q.Dequeue();
                    if(grid[row][col] == 0) continue;
                    grid[row][col] = 0;
                    cnt++;
                        for(int l=row;l<grid.Length;l++){
                            if(grid[l][col]==0)continue;
                            q.Enqueue((l,col));
                        }
                        for(int l=0;l<=row;l++){
                            if(grid[l][col]==0)continue;
                            q.Enqueue((l,col));
                        }
                        for(int m=col;m<grid[0].Length;m++){
                            if(grid[row][m]==0)continue;
                            q.Enqueue((row,m));
                        }
                        for(int m=0;m<=col;m++){
                            if(grid[row][m]==0)continue;
                            q.Enqueue((row,m));
                        }
                
                }
                if(cnt>1)
                    totalCount+= cnt;
            }
        }
       
        return totalCount;
    }
}

//Without BFS
//counting 
public class Solution {
    public int CountServers(int[][] grid) {
       int totalCount = 0;
        int R = grid.Length;
        int C = grid[0].Length;

        int[] rowCount = new int[R];
        int[] colCount = new int[C];
        for(int i = 0; i < R;i++){
            for(int j=0;j<C;j++){
                if(grid[i][j] == 1){
                    rowCount[i]++;
                    colCount[j]++;
                }
            }
        }

        for(int i = 0; i < R;i++){
            for(int j=0;j<C;j++){
                if(grid[i][j] == 1 && (rowCount[i] > 1 || colCount[j] > 1)){
                    totalCount++; 
                }
            }
        }
        return totalCount;
    }
}
