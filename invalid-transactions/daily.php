class Solution {

    /**
     * @param String[][] $grid
     * @return Boolean
     */
    function hasValidPath($grid) {
        $n = count($grid);
		$m = count($grid[0]);
		$pathLen = $n + $m - 1;

		if ($pathLen % 2 == 1) {
			return false;
		}

		if ($grid[0][0] != '(' || $grid[$n - 1][$m - 1] != ')') {
			return false;
		}

		$dp = array_fill(0, $n, array_fill(0, $m, array_fill(0, $pathLen + 1, false)));
		$dp[0][0][1] = true;

		for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $m; $j++) {
                $change = $grid[$i][$j] == '(' ? 1 : -1;

                if ($i > 0) {
                    for ($balance = 0; $balance <= $pathLen; $balance++) {
                        if (!$dp[$i - 1][$j][$balance]) {
                            continue;
                        }

                        $next = $balance + $change;

                        if ($next >= 0) {
                            $dp[$i][$j][$next] = true;
                        }
                    }
                }

                if ($j > 0) {
                    for ($balance = 0; $balance <= $pathLen; $balance++) {
                        if (!$dp[$i][$j - 1][$balance]) {
                            continue;
                        }

                        $next = $balance + $change;

                        if ($next >= 0) {
                            $dp[$i][$j][$next] = true;
                        }
                    }
                }
            }
        }

        return $dp[$n - 1][$m - 1][0];        
    }
}
