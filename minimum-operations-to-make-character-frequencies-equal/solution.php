class Solution {
    function makeStringGood($s) {
        $cnt = array_fill(0, 26, 0);$n = strlen($s);$mx = 0;
        for ($i = 0; $i <$n; $i++) {$idx = ord($s[$i]) - 97;
            $cnt[$idx]++;
            if ($cnt[$idx] > $mx)$mx = $cnt[$idx];
        }

        $result =$n;
        $INF = 1000000000;

        for ($f = 1; $f <=$mx; $f++) {$dp0 = 0;
            $dp1 =$INF;
            $dp2 =$INF;

            for ($i = 0; $i < 26; $i++) {
                $prevMin = min($dp0, $dp1,$dp2);
                $nextDp0 =$INF;
                $nextDp1 =$INF;
                $nextDp2 =$INF;

                if ($cnt[$i] === 0) {
                    $nextDp0 =$prevMin;
                } elseif ($cnt[$i] >=$f) {
                    $excess =$cnt[$i] -$f;
                    $nextDp0 = $prevMin +$excess;
                    $nextDp1 = $prevMin +$excess;
                    $nextDp2 =$prevMin + $cnt[$i];
                } else {
                    $need =$f - $cnt[$i];
                    $c1 = ($i > 0 && $cnt[$i - 1] >= $f) ? ($cnt[$i - 1] -$f) : 0;
                    $c2 = ($i > 0) ? $cnt[$i - 1] : 0;

                    $op0 = $dp0 +$need;
                    $op1 = ($dp1 <$INF) ? $dp1 + max(0,$need - $c1) :$INF;
                    $op2 = ($dp2 <$INF) ? $dp2 + max(0,$need - $c2) :$INF;

                    $nextDp0 = min($op0, $op1,$op2);
                    $nextDp2 =$prevMin + $cnt[$i];
                }

                $dp0 =$nextDp0;
                $dp1 =$nextDp1;
                $dp2 =$nextDp2;
            }

            $result = min($result,$dp0, $dp1,$dp2);
        }

        return $result;
    }
}
