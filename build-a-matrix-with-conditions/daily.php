class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findMissingElements($nums) {
        sort($nums);
        $res = [];
        for($i=0;$i<count($nums)-1;$i++){
            if ($nums[$i+1]-$nums[$i] > 1) {
                for ($j = $nums[$i]+1;$j<$nums[$i+1];$j++){
                    $res[] = $j;
                }
            }
        }
        return $res;
    }
}
