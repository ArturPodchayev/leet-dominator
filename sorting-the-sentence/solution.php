class Solution {

    /**
     * @param String $s
     * @return String
     */
    function sortSentence($s) {
        $arr = explode(' ', $s);
        $n = count($arr);
    
        for ($i = 0; $i < $n - 1; $i++) {
            for ($j = 0; $j < $n - $i - 1; $j++) {
                if (substr($arr[$j], -1) > substr($arr[$j + 1], -1)) {
                    $temp = $arr[$j];
                    $arr[$j] = $arr[$j + 1];
                    $arr[$j + 1] = $temp;
                }
            }
            
        }

        foreach ($arr as &$word) {
            $word = substr($word, 0, -1);
        }

        return implode(' ', $arr);

    }

}
