class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function scoreOfParentheses($s) {
        $depth = 0;
        $prev = "";
        $res = 0;
        $n = strlen($s);

        for($i = 0; $i < $n; $i++){
            $ch = $s[$i];

            if($ch == '(') $depth++;
            else $depth--;
            if($prev == '(' && $ch == ')') $res += 1 << $depth;
            $prev = $ch;
        }

        return $res;
    }
}
