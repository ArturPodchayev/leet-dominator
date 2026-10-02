class Solution {

    /**
     * @param Integer $n
     * @return String[]
     */
    function generateParenthesis($n) {
        $result = [];
        if($n === 1) {
            $result[] = '()';
        } 
        else {
            $resultsNMinusI = [];
            for($i = 1; $i < $n; $i++) {
                $resultsNMinusI = array_merge($this->generateParenthesis($n-$i), $resultsNMinusI);
            }

            foreach($resultsNMinusI as $i) {
                foreach($resultsNMinusI as $j) {

                    if(strlen($i.$j) === $n*2) {
                        $result[] = $i.$j;
                        $result[] = $j.$i;
                    }
                    if(strlen('(' . $j . ')') === $n*2) {
                        $result[] = '(' . $j . ')';
                    }
                }

            } 
        }

        
        return array_unique($result);
    }
}
