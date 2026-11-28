class Solution {
    function strangePrinter($s) {
        $n = strlen($s);
        if ($n == 0) return 0;
        
        for ($i = 0; $i < $n; $i++) $dp[$i][$i] = 1;
        
        for ($i = 1; $i < $n; $i++) {
            for ($j = 0; $j < $n - $i; $j++) {
                $dp[$j][$j + $i] = $i + 1;
                for ($k = $j + 1; $k <= $j + $i; $k++) {
                    $temp = $dp[$j][$k - 1] + $dp[$k][$j + $i];
                    if ($s[$k - 1] == $s[$j + $i]) $temp--;
                    $dp[$j][$j + $i] = min($dp[$j][$j + $i], $temp);
                }
            }
        }
        return $dp[0][$n - 1];
    }
}
