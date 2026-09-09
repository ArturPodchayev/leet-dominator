class Solution {

    /**
     * @param String $s
     * @param String $t
     * @param Integer[] $nextCost
     * @param Integer[] $previousCost
     * @return Integer
     */
    function shiftDistance($s, $t, $nextCost, $previousCost) {
        $totalCost = 0;
        $length = strlen($s);
        
        for ($i = 0; $i < $length; $i++) {
            $startIndex = ord($s[$i]) - ord('a');
            $endIndex = ord($t[$i]) - ord('a');
            if ($startIndex === $endIndex) continue;

            $forwardSteps = ($endIndex - $startIndex + 26) % 26;
            $forwardCost = 0;
            for ($j = 0; $j < $forwardSteps; $j++) {
                $forwardCost += $nextCost[($startIndex + $j) % 26];
            }

            $backwardSteps = ($startIndex - $endIndex + 26) % 26;
            $backwardCost = 0;
            for ($j = 0; $j < $backwardSteps; $j++) {
                $backwardCost += $previousCost[($startIndex - $j + 26) % 26];
            }

            $totalCost += min($forwardCost, $backwardCost);
        }
        
        return $totalCost;
    }
}
