class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
function closedIsland($grid) {
    $m = count($grid);
    $n = count($grid[0]);
    $count = 0;
    // iterate over each cell of the grid
    for ($i = 0; $i < $m; $i++) {
        for ($j = 0; $j < $n; $j++) {
            // if the current cell is water (0)
            if ($grid[$i][$j] == 0) {
                $isClosed = true;
                // perform DFS to check if the island is closed
                $this->dfs($grid, $i, $j, $isClosed);
                // if the island is closed, increment the count
                if ($isClosed) {
                    $count++;
                }
            }
        }
    }
    // return the total count of closed islands
    return $count;
}

function dfs(&$grid, $i, $j, &$isClosed) {
  $m = count($grid);
    $n = count($grid[0]);
    // check if the current cell is out of bounds or a land cell (1)
    if ($i < 0 || $j < 0 || $i >= $m || $j >= $n) {
        // if so, the island is not closed
        $isClosed = false;
        return;
    }
    // check if the current cell is already visited or a land cell (1)
    if ($grid[$i][$j] == 1 || $grid[$i][$j] == -1) {
        return;
    }
    // mark the current cell as visited
    $grid[$i][$j] = -1;
    // recursively visit the neighboring cells
    $this->dfs($grid, $i+1, $j, $isClosed);
    $this->dfs($grid, $i-1, $j, $isClosed);
    $this->dfs($grid, $i, $j+1, $isClosed);
   $this->dfs($grid, $i, $j-1, $isClosed);
}

}
