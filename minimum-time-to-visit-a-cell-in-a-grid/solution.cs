public class Solution {
    public int MinimumTime(int[][] grid) {
        int m = grid.Length;
        int n = grid[0].Length;

        if (grid[0][1] > 1 && grid[1][0] > 1) {
            return -1;
        }

        var pq = new PriorityQueue<(int time, int row, int col), int>();
        pq.Enqueue((0, 0, 0), 0);

        bool[,] visited = new bool[m, n];
        int[][] directions = new int[][] {
            new int[] {0, 1}, 
            new int[] {1, 0},  
            new int[] {0, -1}, 
            new int[] {-1, 0}  
        };

        while (pq.Count > 0) {
            var (time, row, col) = pq.Dequeue();

            if (row == m - 1 && col == n - 1) {
                return time;  
            }

            if (visited[row, col]) continue;
            visited[row, col] = true;

            foreach (var dir in directions) {
                int newRow = row + dir[0];
                int newCol = col + dir[1];

                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
                    int nextTime = time + 1;
                    int requiredTime = grid[newRow][newCol];

                    if (nextTime < requiredTime) {
                        int wait = (requiredTime - nextTime) % 2 == 0 ? 0 : 1;
                        nextTime = requiredTime + wait;
                    }

                    if (!visited[newRow, newCol]) {
                        pq.Enqueue((nextTime, newRow, newCol), nextTime);
                    }
                }
            }
        }

        return -1;
    }
}
