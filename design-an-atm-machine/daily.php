class Solution {
    function minSumOfLengths($arr, $target) {
        $n = count($arr);
        $INF = 1000000;
        $minLen = array_fill(0, $n, $INF);
        $ans = $INF;
        $left = 0;
        $currentSum = 0;

        for ($right = 0; $right < $n; ++$right) {
            $currentSum += $arr[$right];

            while ($currentSum > $target) {
                $currentSum -= $arr[$left++];
            }

            if ($right > 0) {
                $minLen[$right] = $minLen[$right - 1];
            }

            if ($currentSum == $target) {
                $currLen = $right - $left + 1;
                if ($left > 0 && $minLen[$left - 1] < $INF) {
                    $ans = min($ans, $minLen[$left - 1] + $currLen);
                }
                $minLen[$right] = min($minLen[$right], $currLen);
            }
        }

        return $ans >= $INF ? -1 : $ans;
    }
}
