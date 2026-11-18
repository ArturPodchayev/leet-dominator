class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minChanges($s) {
        $count = 0;
        for ($i = 0; $i < strlen($s); $i += 2) {
        if ($s[$i] != $s[$i + 1]) {
            $count++;
        }
    }
    return $count;
    }
}
