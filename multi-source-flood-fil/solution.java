class Solution {
    public int[][] colorGrid(int n, int m, int[][] sources) {
    int grid[][] = new int[n][m];
    Queue<int[]> q = new LinkedList();
    for(int d[] : sources)
    {  
    grid[d[0]][d[1]] = d[2];    
    q.offer(d);
    }

    int dir[][] = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};

            while(!q.isEmpty())
            {
                Queue<int[]> nextQ = new LinkedList<>();
                Map<Integer, Integer> updates = new HashMap<>();

                while(!q.isEmpty())
                {
                   int temp[] = q.poll();
                   int r = temp[0], c = temp[1], color = temp[2];

                   for(int d[] : dir)
                   {
                     int nr = r + d[0];
                     int nc = c + d[1]; 
                     int key = 0;   
                     if(nr>=0 && nr<n && nc>=0 && nc<m && grid[nr][nc]==0)
                     {   
                       key = nr*m + nc; 
                       updates.put(key, Math.max(updates.getOrDefault(key, 0), color)); 
                     }   
                   }
                }

                        for(Map.Entry<Integer, Integer> entry : updates.entrySet())
                        {
                          int key = entry.getKey();
                          int row = key/m;
                          int col = key%m ; 
                          int colorVal = entry.getValue();
                          grid[row][col] = colorVal; 
                          nextQ.offer(new int[]{row, col, colorVal}); 
                        }
                    q = nextQ;  
                   
            }

        return grid;
        
    }
}
