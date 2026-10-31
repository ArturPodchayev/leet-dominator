class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function uniquePaths($grid) {
        $MOD = 10**9 + 7;
		$m = count($grid);
		$n = count($grid[0]);

		$f = array_fill(0, $n, [0, 0]);
		$f[0][0] = 1;

		for ($i = 0; $i < $m; $i++){
			for ($j = 0; $j < $n; $j++){
				if ($i > 0){
					if ($grid[$i - 1][$j] == 0){
						$f[$j][0] = ($f[$j][0] + $f[$j][1]) % $MOD;
					}
					else{
						$f[$j][0] = $f[$j][1];
					}
				}

				if ($j > 0){
					if ($grid[$i][$j - 1] == 0){
						$f[$j][1] = ($f[$j - 1][0] + $f[$j - 1][1]) % $MOD;
					}
					else{
						$f[$j][1] = $f[$j - 1][0];
					}
				}
			}
		}
		return ($f[$n - 1][0] + $f[$n - 1][1]) % $MOD;
    }
}
