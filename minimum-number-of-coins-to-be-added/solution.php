class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $x
     * @param Integer $k
     * @return Integer
     */
    function minOperations($nums, $x, $k) {
        $n = count($nums);

        $ops = getCosts($nums, $x);

        $pre = array_fill(0, $n + 1, 0);

        for ($j = 1; $j <= $k; $j++) {
            $cur = array_fill(0, $n + 1, PHP_INT_MAX);

            for ($i = $j * $x; $i <= $n; $i++) {
                $take = $pre[$i - $x] + $ops[$i - 1];
                $skip = $cur[$i - 1];

                $cur[$i] = ($take < $skip) ? $take : $skip;
            }

            $pre = $cur;
        }

        return $pre[$n];
    }
}

function getCosts(array $nums, int $x): array {

        $n = count($nums);
        $ops = array_fill(0, $n, 0);

        $sorted = $nums;
        sort($sorted, SORT_NUMERIC);

        $vals = [];

        for ($i = 0; $i < $n; $i++) {
            if ($i == 0 || $sorted[$i] !== $sorted[$i - 1]) {
                $vals[] = $sorted[$i];
            }
        }

        $m = count($vals);

        $rank = [];

        for ($i = 0; $i < $m; $i++) {
            $rank[$vals[$i]] = $i + 1;
        }

        $bitC = array_fill(0, $m + 1, 0);
        $bitS = array_fill(0, $m + 1, 0);

        $mask = 1;
        while (($mask << 1) <= $m) {
            $mask <<= 1;
        }

        $target = intdiv($x + 1, 2);

        $windowSize = 0;
		$windowSum = 0; 

        for ($i = 0; $i < $n; $i++) {
            $v = $nums[$i];
            $r = $rank[$v];

			$windowSum += $v; 

            for ($p = $r; $p <= $m; $p += $p & (-$p)) {
                $bitC[$p]++;
                $bitS[$p] += $v;
            }

            $windowSize++;

	        if ($windowSize > $x) {

                $v = $nums[$i - $x];
				$windowSum -= $v;
                $r = $rank[$v];

                for ($p = $r; $p <= $m; $p += $p & (-$p)) {
                    $bitC[$p]--;
                    $bitS[$p] -= $v;
                }

                $windowSize--;
            }

            if ($windowSize == $x) {
                $idx = 0;
                $cnt = 0;

                for ($step = $mask; $step > 0; $step >>= 1) {

                    $next = $idx + $step;

                    if ($next <= $m &&
                        $cnt + $bitC[$next] < $target) {

                        $idx = $next;
                        $cnt += $bitC[$next];
                    }
                }

                $medRank = $idx + 1;
                $median = $vals[$medRank - 1];

                $leftCount = 0;
                $leftSum = 0;

                for ($p = $medRank; $p > 0; $p -= $p & (-$p)) {
                    $leftCount += $bitC[$p];
                    $leftSum += $bitS[$p];
                }

				$totalSum = $windowSum;

                $rightCount = $x - $leftCount;
                $rightSum = $totalSum - $leftSum;

                $leftCost = $median * $leftCount - $leftSum;
                $rightCost = $rightSum - $median * $rightCount;

                $ops[$i] = $leftCost + $rightCost;
            }
        }

        return $ops;
    }
