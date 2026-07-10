class Solution {

    /**
     * @param Integer $n
     * @param Integer[] $nums
     * @param Integer $maxDiff
     * @param Integer[][] $queries
     * @return Integer[]
     */
    function pathExistenceQueries($n, $nums, $maxDiff, $queries) {
        $bsearch = function($arr, $v){
            $nn = count($arr);

            $l = 0;
            $r = $nn;

            while($l < $r){
                $mid = intdiv($l + $r, 2);

                if($v[0] >= $arr[$mid][0]){
                    $l = $mid + 1;
                }else{
                    $r = $mid;
                }
            }

            return $l;
        };

        $num = [];
        foreach($nums as $i => $v){
            $num[] = [$v, $i];
        }
        $nums = $num;
        $num = null;
        sort($nums);

        $ni = [];

        foreach($nums as $i => [$v, $node]){
            $ni[$node] = $i; 
        }

        $maxjumps = array_fill(0, $n, 0);

        foreach($nums as $i => [$v, $node]){
            $nxt = $bsearch($nums, [$v + $maxDiff, +INF]) - 1;
            $maxjumps[$i] = $nxt;            
        }

        $LOG = floor(log($n, 2)) + 1;
        $up = [$maxjumps];
        $k = 1;

        for($i = 1; $i < $LOG; $i++){
            $last = $up[$k - 1];
            $aa = [];
            for($j = 0; $j < $n; $j++){
                $aa[] = $last[$last[$j]];
            }
            $up[] = $aa;
            $k++;
        }

        $res = [];
        foreach($queries as [$a, $b]){
            $a = $ni[$a];
            $b = $ni[$b];

            if($a == $b){
                $res[] = 0;
                continue;
            }

            if($a > $b){
                [$a, $b] = [$b, $a];
            }

            $cur = $a;
            $jumps = 0;

            for($kj = $LOG - 1; $kj > -1; $kj--){
                if($up[$kj][$cur] < $b){
                    $cur = $up[$kj][$cur];
                    $jumps += 2 ** $kj;
                }
            }

            if($maxjumps[$cur] >= $b){
                $res[] = $jumps + 1;
            }else{
                $res[] = -1;
            }
        }

        return $res;
    }
}
