class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return Integer
     */
    function minimumChanges($s, $k) {
        $n = strlen($s);
        $INF = 1000000000;

        $divisors = array_fill(0, $n + 1, []);

        for ($d = 1; $d < $n; $d++) {
            for ($m = $d * 2; $m <= $n; $m += $d) {
                $divisors[$m][] = $d;
            }
        }

        $cost = array_fill(0, $n, array_fill(0, $n, 0));

        for ($len = 2; $len <= $n; $len++) {

            $ds = $divisors[$len];

            for ($i = 0; $i + $len <= $n; $i++) {

                $best = $len;

                foreach ($ds as $d) {
                    $changes = 0;

                    for ($offset = 0; $offset < $d; $offset++) {

                        $l = $i + $offset;
                        $r = $i + $len - $d + $offset;

                        while ($l < $r) {
                            if ($s[$l] !== $s[$r]) {
                                $changes++;
                            }

                            $l += $d;
                            $r -= $d;
                        }
                    }

                    if ($changes < $best) {
                        $best = $changes;

                        if ($best == 0) {
                            break;
                        }
                    }
                }

                $cost[$i][$i + $len - 1] = $best;
            }
        }        

        $prev = array_fill(0, $n + 1, $INF);
        $prev[0] = 0;

        for ($p = 1; $p <= $k; $p++) {

            $curr = array_fill(0, $n + 1, $INF);

            for ($i = $p * 2; $i <= $n; $i++) {

                $start = ($p - 1) * 2;
                $end = $i - 2;

                for ($j = $start; $j <= $end; $j++) {

                    if ($prev[$j] == $INF) {
                        continue;
                    }

                    $v = $prev[$j] + $cost[$j][$i - 1];

                    if ($v < $curr[$i]) {
                        $curr[$i] = $v;
                    }
                }
            }

            $prev = $curr;
        }

        return $prev[$n];
    }
}
