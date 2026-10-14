class Solution {

    /**
     * @param Integer[] $skill
     * @return Integer
     */
    function dividePlayers($skill) {
        $len = count($skill);
        $total = array_sum($skill);
        if((2*$total)%($len) != 0){
            return -1;
        }
        $target = (2*$total)/$len;
        $ans = 0;
        $counts = array_count_values($skill);
        foreach($skill as $i){
            if(!isset($counts[$i])){
                continue;
            }
            $diff = $target - $i;
            if(($counts[$diff]) < 1){
                return -1;
            }
            $ans += $i*$diff;
            $counts[$i]--;
            $counts[$diff]--;
            if($counts[$i] == 0)    unset($counts[$i]);
            if($counts[$diff] == 0)    unset($counts[$diff]);
        }

        return $ans;
    }
}
