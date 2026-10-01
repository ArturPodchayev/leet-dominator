class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minLengthAfterRemovals($nums) {
        $size =count($nums);
        $uniq = array_count_values($nums);
        $max =max($uniq);
        if($max <= $size/2)
        {
            if($size % 2 ==0)//for even size
            {
                return 0;
            }else //for odd size
            {
                return 1;
            }
        }
    return $max-($size -$max);
    }
}
