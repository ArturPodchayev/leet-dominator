class Solution {

    /**
     * @param Integer[] $stoneValue
     * @return Integer
     */
    function stoneGameV($stoneValue) {
        $n = count($stoneValue);

        $prefix = array_fill(0, $n + 1, 0);

        for ($i = 0; $i < $n; $i++) {
            $prefix[$i + 1] = $prefix[$i] + $stoneValue[$i];
        }

        $dp = array_fill(
            0,
            $n,
            array_fill(0, $n, -1)
        );

        $solve = function($l, $r) use (
            &$solve,
            &$dp,
            &$stoneValue,
            &$prefix
        ) {
            if ($l >= $r) {
                return 0;
            }

            if ($dp[$l][$r] != -1) {
                return $dp[$l][$r];
            }

            $ans = 0;
            $leftSum = 0;
            $rightSum = $prefix[$r + 1] - $prefix[$l];

            for ($k = $l; $k < $r; $k++) {

                $leftSum += $stoneValue[$k];
                $rightSum -= $stoneValue[$k];

                if ($leftSum < $rightSum) {

                    if ($ans >= 2 * $leftSum) {
                        continue;
                    }

                    $ans = max(
                        $ans,
                        $leftSum + $solve($l, $k)
                    );

                } elseif ($leftSum > $rightSum) {

                    if ($ans >= 2 * $rightSum) {
                        break;
                    }

                    $ans = max(
                        $ans,
                        $rightSum + $solve($k + 1, $r)
                    );

                } else {

                    $ans = max(
                        $ans,
                        $leftSum + $solve($l, $k),
                        $rightSum + $solve($k + 1, $r)
                    );
                }
            }

            $dp[$l][$r] = $ans;

            return $ans;
        };

        return $solve(0, $n - 1);

    }
}
