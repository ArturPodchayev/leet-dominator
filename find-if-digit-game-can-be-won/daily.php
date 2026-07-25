class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function maxProduct($n) {
        $toStrArr = str_split((string)$n);
        rsort($toStrArr);
        return $toStrArr[0]*$toStrArr[1];
    }
}
