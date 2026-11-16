class Solution {
    function digitSum($s, $k) {
        while (strlen($s) > $k) {
            $t = "";
            $n = strlen($s);
            for ($i = 0; $i < $n; $i += $k) {
                $x = 0;
                for ($j = $i; $j < min($i + $k, $n); ++$j) {
                    $x += intval($s[$j]);
                }
                $t .= strval($x);
            }
            $s = $t;
        }
        return $s;
    }
}
