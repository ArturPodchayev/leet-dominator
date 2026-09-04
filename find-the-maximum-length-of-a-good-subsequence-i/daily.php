class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function firstStableIndex($nums, $k) {
        $n = count($nums);
        $max = -INF;
        $min = +INF;
        $arr_max = [];
        $arr_min = [];
        $index = +INF;

        for($i = 0, $j = $n - 1; $i < $n; $i++, $j--){
            if($nums[$i] > $max){
                $max = $nums[$i];                
            }
            $arr_max[$i] = $max;

            if($nums[$j] < $min){
                $min = $nums[$j];                
            }
            $arr_min[$j] = $min;
        }        

        for($i = 0; $i < $n; $i++){
            if($arr_max[$i] - $arr_min[$i] <= $k){
                return $i;
            }
        }

        return -1;
    }
}
