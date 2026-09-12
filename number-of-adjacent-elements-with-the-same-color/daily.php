class Solution {
    function maximumWeight($intervals) {
        $n = count($intervals);
        $A = [];
        for ($i = 0; $i < $n; $i++) {
            $A[] = [$intervals[$i][0], $intervals[$i][1], $intervals[$i][2], $i];
        }
        
        usort($A, function($a, $b) {
            if ($a[0] !== $b[0]) return $a[0] <=> $b[0];
            if ($a[1] !== $b[1]) return $a[1] <=> $b[1];
            return $a[3] <=> $b[3];
        });

        $S = array_column($A, 0);

        // dp[i][k] = [waga, [id1, id2, ...]]
        $dp = array_fill(0, $n + 1, array_fill(0, 5, [0, []]));

        $isLex = function($a, $b) {
            if (empty($b)) return true;
            $len = min(count($a), count($b));
            for ($i = 0; $i < $len; $i++) {
                if ($a[$i] !== $b[$i]) return $a[$i] < $b[$i];
            }
            return count($a) < count($b);
        };

        for ($i = $n - 1; $i >= 0; $i--) {
            list($l, $r, $w, $id) = $A[$i];

            $low = 0;
            $high = $n;
            while ($low < $high) {
                $m = ($low + $high) >> 1;
                if ($S[$m] > $r) $high = $m;
                else $low = $m + 1;
            }

            for ($k = 1; $k <= 4; $k++) {
                list($bw, $bids) = $dp[$i + 1][$k];
                list($pw, $pids) = $dp[$low][$k - 1];

                $tw = $pw + $w;
                $tids = array_merge($pids, [$id]);
                sort($tids);

                $isBetter = $tw > $bw || ($tw === $bw && $isLex($tids, $bids));

                if ($isBetter) {
                    $dp[$i][$k] = [$tw, $tids];
                } else {
                    $dp[$i][$k] = [$bw, $bids];
                }
            }
        }

        return $dp[0][4][1];
    }
}
