class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function sortPermutation($nums) {
        $n = count($nums);
        $ans = PHP_INT_MAX;

        for($i = 0; $i < $n; $i++){
            if($nums[$i] == $i) continue;
            $ans &= $nums[$i];
        }

        return  $ans == PHP_INT_MAX ? 0 : $ans;
    }
}
