import java.util.*;
Intuition
The problem asks to shift a 2D grid $k$ times. Since the grid is just a sequence of elements arranged in rows and columns, we can treat the entire 2D structure as a 1D linear array of size $M \times N$. Shifting a 2D grid is mathematically equivalent to rotating a 1D array by $k$ positions. By using the modulo operator, we can handle the wrap-around logic effortlessly, transforming the grid coordinates into a flattened index and back again
.Approach
Flattening: First, map every 2D coordinate (r, c) to a 1D index using index = r * n + c. Store all elements in a 1D array (or list) of size $M \times N$.Normalization: Since shifting by the total number of elements results in the same grid, use k = k % (m * n) to reduce the number of operations.Mapping: To construct the new grid, for each cell at (r, c) in the new grid (which corresponds to 1D index i), the value it should contain is found in the flattened array at (i - k + total) % total. This "look-back" approach directly places the correct element into the new 2D structure.ComplexityTime complexity: $O(M \times N)$, where $M$ is the number of rows and $N$ is the number of columns, because we visit each cell exactly once.Space complexity: $O(M \times N)$ to store the flattened version of the grid and the resulting output.

class Solution {
    public List<List<Integer>> shiftGrid(int[][] grid, int k) {
        int m = grid.length;
        int n = grid[0].length;
        int total = m * n;
        
        // 1. Flatten the 2D grid into a 1D array
        int[] flat = new int[total];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                flat[i * n + j] = grid[i][j];
            }
        }
        
        // 2. Adjust k to avoid unnecessary full rotations
        k = k % total;
        
        // 3. Create the new 2D structure
        List<List<Integer>> result = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            List<Integer> row = new ArrayList<>();
            for (int j = 0; j < n; j++) {
                // The current grid position corresponds to 1D index (i * n + j)
                // We need to look back k positions in the flat array
                // The (total - k + (i * n + j)) % total handles the circular shift
                int index = (total - k + (i * n + j)) % total;
                row.add(flat[index]);
            }
            result.add(row);
        }
        
        return result;
    }
}
