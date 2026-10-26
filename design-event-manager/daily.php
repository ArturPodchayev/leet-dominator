class Solution {

    /**
     * @param Integer[][] $grid
     * @param Integer $k
     * @return Integer
     */
    function countIslands($grid, $k) {
        [$m, $n] = [count($grid), count($grid[0])];
        $dirs = [-1, 0, 1, 0, -1];

        $dfs = function($i, $j) use(&$grid, &$dfs, $m, $n, $dirs) {
            $total = $grid[$i][$j];
            $grid[$i][$j] = 0;

            for($d = 0; $d < 4; $d++){
                [$x, $y] = [$i + $dirs[$d], $j + $dirs[$d + 1]];
                if((0 <= $x && $x < $m) && (0 <= $y && $y < $n) && ($grid[$x][$y] > 0)){
                    $total += $dfs($x, $y);
                }
            }

            return $total;
        };

        $sum = 0;
        for($i = 0; $i < $m; $i++){
            for($j = 0; $j < $n; $j++){
                $sum += $grid[$i][$j] && ($dfs($i, $j) % $k == 0);
            }
        }

        return $sum;
    }
}
