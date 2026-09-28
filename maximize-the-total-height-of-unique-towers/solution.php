class Solution {

    /**
     * @param Integer[] $maximumHeight
     * @return Integer
     */
    function maximumTotalSum($maximumHeight) {
        sort($maximumHeight);
        $n = sizeof($maximumHeight);
        $currHeight = 0; $sum = 0;
        $lastAssignedHeight = PHP_INT_MAX;
        for($i = $n - 1; $i >= 0; $i--){
            $currHeight = min($maximumHeight[$i], $lastAssignedHeight - 1);
            if($currHeight < 1){
                return -1;
            }
            $sum += $currHeight;
            $lastAssignedHeight = $currHeight;
        }

        return $sum;
    }
}
