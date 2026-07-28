class Solution {

    /**
     * @param Integer[] $mountain
     * @return Integer[]
     */
    function findPeaks($mountain) {
        $arrPeak = [];
        for($i=1;$i<count($mountain)-1;$i++){
            if($mountain[$i] > $mountain[$i-1] && $mountain[$i] > $mountain[$i+1]){
                $arrPeak[] = $i;
            }
        }
        return $arrPeak;
    }
}
