class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isSubstringPresent($s) {
        $d = [];
        for($i=0;$i<strlen($s)-1;$i++){
            if($s[$i]===$s[$i+1] || isset($d[$s[$i].$s[$i+1]])) return true;
            $d[$s[$i+1].$s[$i]] = true;
        }
        return false;
    }
}
