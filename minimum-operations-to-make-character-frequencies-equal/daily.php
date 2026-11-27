class Solution {
    function maximumSaleItems($items, $budget) {
        $n = count($items);
        $bonus = array_fill(0, $n, 0);
        for ($i = 0; $i < $n; $i++) {
            $cnt = 0;
            for ($j = 0; $j < $n; $j++) {
                if ($i !== $j && $items[$j][0] % $items[$i][0] === 0) {
                    $cnt++;
                }
            }
            $bonus[$i] = $cnt;
        }

        $dp = array_fill(0, $budget + 1, 0);
        for ($i = 0; $i < $n; $i++) {
            $cost = $items[$i][1];
            $freeCopies = $bonus[$i];
            if ($cost <= $budget) {
                for ($b = $budget; $b >= $cost; $b--) {
                    $dp[$b] = max($dp[$b], $dp[$b - $cost] + 1 + $freeCopies);
                }
                for ($b = $cost; $b <= $budget; $b++) {
                    $dp[$b] = max($dp[$b], $dp[$b - $cost] + 1);
                }
            }
        }

        return max($dp);
    }
}
