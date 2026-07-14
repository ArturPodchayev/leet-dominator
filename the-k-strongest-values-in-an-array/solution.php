class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $k
     * @return Integer[]
     */
    function getStrongest($arr, $k) {
        sort($arr);
        $n = count($arr);
        $m = ($n - 1) / 2;
        $i = 0;
        $j = $n - 1;
        $ans = [];

        while ($i <= $j) {
            if (abs($arr[$i] - $arr[$m]) > abs($arr[$j] - $arr[$m])) {
                $ans[] = $arr[$i++];
            } else {
                $ans[] = $arr[$j--];
            }
        }

        return array_slice($ans, 0, $k);
    }
}
