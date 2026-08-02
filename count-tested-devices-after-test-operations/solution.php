class Solution {

    /**
     * @param Integer[] $batteryPercentages
     * @return Integer
     */
    function countTestedDevices($batteryPercentages) {
        $decay = 0;
        $res = 0;
        foreach($batteryPercentages as $v){
            if($v-$decay > 0){
                $res++;
                $decay++;
            }
        }
        return $res;
    }
}
