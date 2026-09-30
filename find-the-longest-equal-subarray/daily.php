class Solution {

    /**
     * @param String $seq
     * @return Integer[]
     */
    function maxDepthAfterSplit($seq) {
        $n = strlen($seq);
        $group = 0;
        $ans = [];

        for($i = 0; $i < $n; $i++){
            $ch = $seq[$i];

            if($ch == '('){
                $ans[] = $group % 2;
                $group++;
            }else{
                $group--;
                $ans[] = $group % 2;
            }
        }

        return $ans;
    }
}
