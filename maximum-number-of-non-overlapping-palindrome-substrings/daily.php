class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function winnerSquareGame($n) {
        $dp = array_fill(0, $n + 1, false);

        for($i = 1; $i < $n + 1; $i++){
            $j = 1;
            while($j * $j <= $i){
                if(!$dp[$i - $j * $j]){
                    $dp[$i] = true;
                    break;
                }

                $j++;
            }
        }

        return $dp[$n];
    }
}
