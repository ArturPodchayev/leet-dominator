class Solution {

    /**
     * @param String $expression
     * @return String[]
     */
    function braceExpansionII($expression) {
        $set = array();
        
        $this->expand($expression, $set);
        
        $ans = array_values(array_unique($set));
        sort($ans);
        return $ans;
    }
    
    function expand($exp, &$set) {
        $end = strpos($exp, '}');
        if ($end === false) {
            $set[] = $exp;
            return;
        }
        
        $start = $end;
        while ($exp[$start] != '{') {
            $start--;
        }
        
        $arr = explode(',', substr($exp, $start + 1, $end - $start - 1));
        $pre = substr($exp, 0, $start);
        $post = substr($exp, $end + 1);
        
        foreach ($arr as $curr) {
            $this->expand($pre . $curr . $post, $set);
        }
    }
}
