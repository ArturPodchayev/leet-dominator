public class Solution {
        public List<int[]> Diretion = new List<int[]>()
        {
            new int[2] { 0, 1 }, // right
            new int[2] { 1, 0 }, // down
            new int[2] { 0, -1 }, // left
            new int[2] { -1, 0 } // up
        };
        public int CountIslands(int[][] grid, int k)
        {
            var result = 0;

            for (var i = 0; i < grid.Length; i++)
            {
                for (var j = 0; j < grid[0].Length; j++)
                {
                    if (grid[i][j] != 0)
                    {
                        var sum = DFS(grid, i, j);
                        if (sum % k == 0)
                        {
                            result++;
                        }
                    }
                }
            }

            return result;
        }

        public int DFS(int[][] grid, int x, int y)
        {
            if (x < 0 || x >= grid.Length || y < 0 || y >= grid[0].Length || grid[x][y] == 0)
                return 0;

            var sum = grid[x][y];
            grid[x][y] = 0;

            sum += DFS(grid, x + Diretion[0][0], y + Diretion[0][1]);
            sum += DFS(grid, x + Diretion[1][0], y + Diretion[1][1]);
            sum += DFS(grid, x + Diretion[2][0], y + Diretion[2][1]);
            sum += DFS(grid, x + Diretion[3][0], y + Diretion[3][1]);

            return sum;
        }
}
