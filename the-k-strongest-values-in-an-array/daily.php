class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function subsequencePairCount($nums) {
        $mod = 10 ** 9 + 7;
        $n = count($nums);
        $memo = [];

        $gcd = function($a, $b){
            while($b){
                $a %= $b;
                [$a, $b] = [$b, $a];
            }

            return $a;
        };

        $dp = function($i, $gcd1, $gcd2) use(&$dp, $n, $nums, $mod, &$gcd, &$memo){
            if(isset($memo[$i][$gcd1][$gcd2])){
                return $memo[$i][$gcd1][$gcd2];
            }

            if($i == $n){
                if($gcd1 == $gcd2){
                    return 1;
                }else{
                    return 0;
                }
            }

            $total = 0;
            $total = ($total + $dp($i + 1, $gcd1, $gcd2)) % $mod;
            $total = ($total + $dp($i + 1, $gcd($gcd1, $nums[$i]), $gcd2)) % $mod;
            $total = ($total + $dp($i + 1, $gcd1, $gcd($gcd2, $nums[$i]))) % $mod;

            $memo[$i][$gcd1][$gcd2] = $total;

            return $total;
        };

        return ($dp(0, 0, 0) - 1) % $mod;
    }
}
