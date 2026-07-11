class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @return Integer
     */
    function countCompleteComponents($n, $edges) {
        $adj = array_fill(0, $n, []);
        foreach ($edges as [$u, $v]) {
            $adj[$u][] = $v;
            $adj[$v][] = $u;
        }

        $visited = array_fill(0, $n, false);
        $count = 0;

        for ($i = 0; $i < $n; $i++) {
            if ($visited[$i]) continue;

            $queue = [$i];
            $visited[$i] = true;
            $nodes = [$i];
            $edgesInComponent = 0;

            while (!empty($queue)) {
                $curr = array_shift($queue);
                foreach ($adj[$curr] as $neighbor) {
                    $edgesInComponent++;
                    if (!$visited[$neighbor]) {
                        $visited[$neighbor] = true;
                        $queue[] = $neighbor;
                        $nodes[] = $neighbor;
                    }
                }
            }

            $v = count($nodes);
            $expectedEdges = $v * ($v - 1);
            if ($edgesInComponent === $expectedEdges) {
                $count++;
            }
        }

        return $count;         
    }
}
