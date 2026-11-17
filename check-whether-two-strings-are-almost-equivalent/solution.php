class Solution {

    /**
     * @param String $word1
     * @param String $word2
     * @return Boolean
     */
    function checkAlmostEquivalent($word1, $word2) {
        $freqA = array_count_values(str_split($word1));
        $freqB = array_count_values(str_split($word2));

        $arr = array_unique(array_merge(str_split($word1), str_split($word2)));

        foreach($arr as $v){
            $letterA = isset($freqA[$v]) ? $freqA[$v] : 0;
            $letterB = isset($freqB[$v]) ? $freqB[$v] : 0;
            $diff = abs($letterA - $letterB);
            if($diff > 3){
                return false;
            }
        }
        return true;
    }
}
