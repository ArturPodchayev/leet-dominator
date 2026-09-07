class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function distinctSubseqII($s) {
        $mod = 1000000007;
        $n = strlen($s);
        $record4DeDup = array_fill(0, 26, 0);
        $curRes = 1;
        
        for ($i = 0; $i < $n; $i++) {
            $addCount = $curRes;
            $curRes = (($curRes + $addCount) % $mod - $record4DeDup[ord($s[$i]) - ord('a')] % $mod + $mod) % $mod;
            $record4DeDup[ord($s[$i]) - ord('a')] = $addCount;
        }
        
        return ($curRes - 1 + $mod) % $mod;
    }
}
