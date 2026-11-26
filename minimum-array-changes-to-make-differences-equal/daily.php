class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function canAliceWin($n) {
        if ($n < 10) return false;

        $count = 0;
        $stonesToRemove = 10;
        while ($n >= $stonesToRemove) {
            $n -= $stonesToRemove;
            $stonesToRemove--;
            $count++;
        }
        
        return $count % 2 !== 0;
    }
}
