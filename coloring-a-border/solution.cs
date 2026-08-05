public class Solution
    {
        public System.Collections.Generic.List<(int, int)> fin = new System.Collections.Generic.List<(int, int)>();
        public System.Collections.Generic.Dictionary<string, bool> visited = new System.Collections.Generic.Dictionary<string, bool>();
        public int[][] ColorBorder(int[][] grid, int row, int col, int color)
        {
            int noOfRows = grid.Length;
            int noOfCols = grid[0].Length;
            Color(grid, row, col, color, noOfRows, noOfCols);
            foreach (var tup in fin)
            {
                grid[tup.Item1][tup.Item2] = color;
            }
            return grid;
        }
        public void Color(int[][] grid, int row, int col, int color, int noOfRows, int noOfCols)
        {
            visited.Add($"{row}_{col}", true);
            int above = row - 1;
            int below = row + 1;
            int left = col - 1;
            int right = col + 1;
            int ogcolor = grid[row][col];
            bool colorBack = false;
            if (above >= 0 && below < noOfRows && left >= 0 && right < noOfCols)
            {
                if ((grid[above][col] == ogcolor) &&
                        (grid[below][col] == ogcolor) &&
                        (grid[row][left] == ogcolor) &&
                        (grid[row][right] == ogcolor)
                        )
                {
                    colorBack = true;
                }
            }
            if (!colorBack)
            {
                fin.Add((row, col));
            }
            if (above >= 0 && ogcolor == grid[above][col] && !visited.ContainsKey($"{above}_{col}"))
            {
                Color(grid, above, col, color, noOfRows, noOfCols);
            }
            if (below < noOfRows && ogcolor == grid[below][col] && !visited.ContainsKey($"{below}_{col}"))
            {
                Color(grid, below, col, color, noOfRows, noOfCols);
            }
            if (left >= 0 && ogcolor == grid[row][left] && !visited.ContainsKey($"{row}_{left}"))
            {
                Color(grid, row, left, color, noOfRows, noOfCols);
            }
            if (right < noOfCols && ogcolor == grid[row][right] && !visited.ContainsKey($"{row}_{right}"))
            {
                Color(grid, row, right, color, noOfRows, noOfCols);
            }
        }
    }
