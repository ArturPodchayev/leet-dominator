class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minMoves2($nums) {
        sort($nums);
        $middleIndex = count($nums) / 2;
        if (is_float($middleIndex)) {
            $median = $nums[(int) $middleIndex];
        }
        $median = round(($nums[$middleIndex] + $nums[$middleIndex - 1]) / 2);

        $steps = 0;
        foreach ($nums as $num) {
            $steps += abs($num - $median);
        }
        
        return $steps;
    }
}
