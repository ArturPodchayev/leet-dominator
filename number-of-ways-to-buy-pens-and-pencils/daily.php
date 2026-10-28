class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function minCost($grid) {
        $m = count($grid);
        $n = count($grid[0]);

        $dp = array_fill(0, $n, []);
        $dp[0][$grid[0][0]] = 1;

        for($i = 0; $i < $m; $i++){
            for($j = 0; $j < $n; $j++){
                if($i == 0 && $j == 0) continue;

                $value = $grid[$i][$j];
                $reachable = $dp[$j] + ($j > 0 ? $dp[$j - 1] : []);

                $aa = [];
                foreach($reachable as $k => $a){
                    $aa[$k ^ $value] = 1;
                } 

                $dp[$j] = $aa; 
            }
        }

        return min(array_keys(end($dp)));
    }
}
