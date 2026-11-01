class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minMoves($nums) {
       sort($nums);
       $n = count($nums);
       $count = 0;
       for($i = $n -1;$i > 0;$i--) {
           $count += $nums[$i] - $nums[0];
       }
       return $count;
    }
}
