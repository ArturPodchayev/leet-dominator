class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function minimumSum($num) {
        $arr = array_map('intval', str_split($num));
        sort($arr); 
        return (int)($arr[0] . $arr[2]) + (int)($arr[1] . $arr[3]); 
    }
}
