public class Solution
{
    private const int Land = 0;

    public int ClosedIsland(int[][] grid)
    {
        BitArray visited = new(grid.Length * grid[0].Length);
        Stack<(int x, int y)> stack = new();

        int numberOfIslands = 0;

        for (int y = 0; y < grid.Length; y++)
        {
            for (int x = 0; x < grid[0].Length; x++)
            {
                if (!IsNotVisitedLand(x, y))
                {
                    continue;
                }

                bool isClosedIsland = true;
                stack.Push((x, y));

                while (stack.Count > 0)
                {
                    var land = stack.Pop();

                    if (IsVisited(land.x, land.y))
                    {
                        continue;
                    }

                    SetVisited(land.x, land.y);

                    if (land.x == 0 || land.x == grid[0].Length - 1 ||
                        land.y == 0 || land.y == grid.Length - 1)
                    {
                        isClosedIsland = false;
                    }

                    if (land.x + 1 < grid[0].Length && IsNotVisitedLand(land.x + 1, land.y))
                    {
                        stack.Push((land.x + 1, land.y));
                    }

                    if (land.x - 1 >= 0 && IsNotVisitedLand(land.x - 1, land.y))
                    {
                        stack.Push((land.x - 1, land.y));
                    }

                    if (land.y + 1 < grid.Length && IsNotVisitedLand(land.x, land.y + 1))
                    {
                        stack.Push((land.x, land.y + 1));
                    }

                    if (land.y - 1 >= 0 && IsNotVisitedLand(land.x, land.y - 1))
                    {
                        stack.Push((land.x, land.y - 1));
                    }
                }

                if (isClosedIsland)
                {
                    numberOfIslands++;
                }
            }
        }

        return numberOfIslands;

        bool IsNotVisitedLand(int x, int y) => grid[y][x] == Land && !IsVisited(x, y);

        bool IsVisited(int x, int y) => visited[y * grid[0].Length + x];

        void SetVisited(int x, int y) => visited[y * grid[0].Length + x] = true;
    }
}
