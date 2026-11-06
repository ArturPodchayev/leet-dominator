class Solution {

    /**
     * @param Integer[] $rods
     * @return Integer
     */
    function tallestBillboard($rods) {
        $dp = [0 => 0];

        foreach ($rods as $r) {
            $newDp = $dp;

            foreach ($dp as $diff => $taller) {
                $shorter = $taller - $diff;

                // Add r to the taller stand
                $newTaller = $newDp[$diff + $r] ?? 0;
                $newDp[$diff + $r] = max($newTaller, $taller + $r);

                // Add r to the shorter stand
                $newDiff = abs($shorter + $r - $taller);
                $newTaller2 = max($shorter + $r, $taller);
                $newDp[$newDiff] = max($newTaller2, $newDp[$newDiff] ?? 0);
            }

            $dp = $newDp;
        }

        // Return the maximum height with 0 difference
        return $dp[0] ?? 0;
    }
}
