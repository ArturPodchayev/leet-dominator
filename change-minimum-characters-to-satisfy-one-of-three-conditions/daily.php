class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minOperations($s) {
        $n = strlen($s);
        $mx = 'a';
        $mn = 'z';
        $sorted = 1;

        for($i = 0; $i < $n; $i++){
            $mx = max($mx, $s[$i]);
            $mn = min($mn, $s[$i]);

            if($i > 0 && $s[$i - 1] > $s[$i]){
                $sorted = 0;
            }
        }

        if($sorted) return 0;
        if($n == 2) return -1;
        if($s[0] == $mn || $s[$n - 1] == $mx) return 1;

        for($i = 1; $i < $n - 1; $i++){
            if($s[$i] == $mn || $s[$i] == $mx) return 2;
        }

        return 3;
    }
}
