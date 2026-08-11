class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function missingInteger($nums) {
        $n = count($nums);
        $arr = [];
        $k = 0;
        $curr = 0;
        $longest;
        
        for($i = 0; $i < $n; $i++){
            if($i == 0){
                $arr[] = $nums[$i];
                $k++;
            }elseif($nums[$i] == $nums[$i - 1] + 1){
                $arr[] = $nums[$i];
                $k++;
            }else{
                break;                
            }
        }

        $nm = array_flip($nums);
        $x = array_sum($arr);
        
        while(true){
            if(isset($nm[$x])){
                $x++;
            }else{
                return $x;
            }
        }
    }
}
