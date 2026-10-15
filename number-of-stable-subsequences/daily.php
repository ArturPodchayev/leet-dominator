class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function sumCounts($nums) {
        $len = count($nums);
        $cnt = 0;
        
        for($ii = 1; $ii <= $len; $ii++) {
            for($i = 0; $i < $len; $i++) {
                if($ii <= ($len - $i)) {
                    $subNum = array_unique(array_slice($nums, $i, $ii));
                    $cnt += pow(count($subNum), 2);
                }
            }; 
        }
        
        return $cnt;
    }
}
