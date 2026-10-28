class Solution {

    /**
     * @param Integer $total
     * @param Integer $cost1
     * @param Integer $cost2
     * @return Integer
     */
    public function waysToBuyPensPencils($total, $cost1, $cost2) {
        $r_h = (int)$total / (int)$cost1;
        $number_of_ways = 0;
        for($i=0; $i <= (int)$r_h;$i++) {
            $r_v = (int)($total - ($i * $cost1)) / (int)$cost2;
            $number_of_ways += ((int)$r_v + 1); 
        }

        return $number_of_ways;
    }
}
