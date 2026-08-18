class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxSelectedElements($nums) {
        sort($nums);
        
        $dp1 = array_fill(0, count($nums), 1);
        $dp2 = array_fill(0, count($nums), 1);
        
        $max = 1;
        
        for ($i = 1; $i < count($nums); $i++) {
            if ($nums[$i - 1] + 1 === $nums[$i]) {
                $dp1[$i] = $dp1[$i - 1] + 1;
                $dp2[$i] = $dp2[$i - 1] + 1;
            } elseif ($nums[$i] === $nums[$i - 1]) {
                $dp2[$i] = max($dp1[$i - 1] + 1, $dp2[$i - 1]);
            } elseif ($nums[$i - 1] + 2 === $nums[$i]) {
                $dp1[$i] = $dp2[$i - 1] + 1;
            }
            $max = max($max, $dp1[$i], $dp2[$i]);
        }
        
        return $max;
    }
}
