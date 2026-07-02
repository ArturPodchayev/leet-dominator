public class Solution {
    public bool FindSafeWalk(IList<IList<int>> grid, int health) {
        int n = grid.Count;
        int m = grid[0].Count;
        int[,] minDamage = new int[n,m];
        for(int i =0; i < n; i++){
            for (int j = 0 ; j < m; j++){
                minDamage[i,j] = int.MaxValue;
            }
        }

        PriorityQueue<(int r,int c),int> pq = new PriorityQueue<(int r,int c),int>();
        minDamage[0,0] = grid[0][0];
        pq.Enqueue((0,0),minDamage[0,0]);
        int[]dist = {-1, 0, 1 , 0, -1};
        while(pq.Count>0){
            (int r,int c) = pq.Dequeue();
            if (r == n-1 && c == m-1) break;
            for (int i = 0; i < 4; i ++){
                int nr = r + dist[i];
                int nc = c + dist[i+1];
                if (nr >= 0 && nr < n && nc >= 0 && nc < m) {
                    int newDamage = minDamage[r, c] + grid[nr][nc];
                    if (newDamage < minDamage[nr, nc]) {
                        minDamage[nr, nc] = newDamage;
                        pq.Enqueue((nr, nc), newDamage);
                    }
                }
            }
        }
        if (health - minDamage[n-1,m-1] >0) return true;
        return false;
    }
}
