class Solution {

    /**
     * @param Integer[] $order
     * @param Integer[] $friends
     * @return Integer[]
     */
    function recoverOrder($order, $friends) {
        $arrResult = [];
        foreach($order as $ind => $val){
            if(in_array($val,$friends)){
                $arrResult[] = $val;
            }
        }
        return $arrResult;
    }
}
