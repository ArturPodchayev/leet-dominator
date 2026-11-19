class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $m
     * @return Boolean
     */
    function canSplitArray($nums, $m) {
        if (count($nums) <= 2) return true;
        for ($i = 1; $i < count($nums); $i++) {
            if ($nums[$i] + $nums[$i-1] >= $m) return true;
        }
        return false;
    }
}
