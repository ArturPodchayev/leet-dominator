class Solution {

    /**
     * @param Integer $n
     * @param Integer $t
     * @return Integer
     */
    function smallestNumber($n, $t) {
        $product = 1;
        $tail = $n % 10;
        $left = ($n - $tail);
        $tmp = $left/10;
        if($n > 9){
            while($tmp > 0){
                $remainder = $tmp % 10;
                $product *= $remainder;
                $tmp = ($tmp - $remainder)/10;
            }
        }
        while(true){
            $cur = $product * ($tail%10);
            if($cur % $t == 0){
                return $left + $tail;
            }
            $tail++;
        }
    }
}
