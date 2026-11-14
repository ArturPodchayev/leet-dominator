class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $l
     * @param Integer $r
     * @return Integer
     */
    function minimumSumSubarray($nums, $l, $r) {
        $res = PHP_INT_MAX;
        $arr = [];
        $cur = 0;
        for($i=0;$i<$l;$i++){
            $cur += $nums[$i];
        }
        if($cur > 0) $res = $cur;
        $arr[] = $cur;
        for($i=$l;$i<count($nums);$i++){
            $cur = end($arr);
            $cur += $nums[$i] - $nums[$i-$l];
            $arr[] = $cur;
            
            if($cur > 0 && $cur < $res) $res = $cur;
        }
        $l++;
        while($l <= $r){
            $tmp = [];
            for($i=1;$i<count($arr);$i++){
                $cur = $arr[$i] + $nums[$i-1];
                $tmp[] = $cur;
            
                if($cur > 0 && $cur < $res) $res = $cur;
            }
            $arr = $tmp;
            $l++;
        }


        return $res > 1000000 ? -1 : $res;
    }
}
