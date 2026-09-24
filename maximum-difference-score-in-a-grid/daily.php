class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function smallestIndex($nums) {
        $smallestIndex = -1;
        foreach($nums as $ind => $num){
            if(array_sum(str_split((string)$num)) == $ind){
                return $ind;
            }
        }
        return $smallestIndex;
    }
}
