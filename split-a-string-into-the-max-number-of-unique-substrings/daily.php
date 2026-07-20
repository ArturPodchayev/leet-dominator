class Solution {

    /**
     * @param Integer[][] $grid
     * @param Integer $k
     * @return Integer[][]
     */
    function shiftGrid($grid, $k) {
        $m = count($grid);
        $n = count($grid[0]);
        $size = $m * $n;
        
        $k %= $size;
        
        if ($k == 0) return $grid;
        
        $flatGrid = [];
        foreach ($grid as $row) {
            foreach ($row as $cell) {
                $flatGrid[] = $cell;
            }
        }
        
        for ($i = 0; $i < $k; $i++) {
            $last = array_pop($flatGrid);
            array_unshift($flatGrid, $last);
        }
        
        $shiftedGrid = [];
        for ($i = 0; $i < $m; $i++) {
            $row = [];
            for ($j = 0; $j < $n; $j++) {
                $row[] = array_shift($flatGrid);
            }
            $shiftedGrid[] = $row;
        }
        
        return $shiftedGrid;
    }
}
