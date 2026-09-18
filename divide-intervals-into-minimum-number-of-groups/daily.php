class Solution {
    function stringUtil($ind, $s, &$left, &$right) {
        $rt = $right[$s[$ind]];
        for ($i = $ind; $i <= $rt; $i++) {
            if ($left[$s[$i]] < $ind)
                return -1;
            $rt = max($rt, $right[$s[$i]]);
        }
        return $rt;
    }

    function maxNumOfSubstrings($s) {
        $left = array();
        $right = array();
        $result = array();

        for ($i = 0; $i < strlen($s); $i++) {
            if (!isset($left[$s[$i]])) {
                $left[$s[$i]] = $i;
            }
            $right[$s[$i]] = $i;
        }

        $rt = -1;
        $tmp = "";

        for ($i = 0; $i < strlen($s); $i++) {
            if ($i == $left[$s[$i]]) {
                $newRight = $this->stringUtil($i, $s, $left, $right);
                if ($newRight != -1) {
                    if ($tmp != "" && $i > $rt) {
                        $result[] = $tmp;
                        $tmp = "";
                    }
                    $rt = $newRight;
                    $tmp = substr($s, $i, $rt - $i + 1);
                }
            }
        }

        $result[] = $tmp;

        return $result;
    }
}
