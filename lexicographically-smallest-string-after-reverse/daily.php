class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function resultArray($nums) {
        $newArr = $arr1 = $arr2 = [];
        $chunkArr = array_chunk($nums, 2);
        $arr1[] = $chunkArr[0][0];
        $arr2[] = $chunkArr[0][1];
        unset($nums[0]);
        unset($nums[1]);
        foreach($nums as $num){
            if(end($arr1) > end($arr2)){
                $arr1[] = $num;
            }else{
                $arr2[] = $num;
            }
        }
        return array_merge($arr1,$arr2);
    }
}
