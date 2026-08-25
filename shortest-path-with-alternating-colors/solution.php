class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $redEdges
     * @param Integer[][] $blueEdges
     * @return Integer[]
     */
    function shortestAlternatingPaths($n, $redEdges, $blueEdges) {
        // prepare node to node mapping,
        // using 1 and -1 present red / blue edges,
        // so we can switch to another egde mapping by "base" * -1
        $edges = [];
        foreach ([
            ['base' => 1, 'edges' => $redEdges], 
            ['base' => -1, 'edges' => $blueEdges]
        ] as $edgeSetting) {
            foreach ($edgeSetting['edges'] as $edge) {
                if (empty($edges[$edgeSetting['base']][$edge[0]])) {
                    $edges[$edgeSetting['base']][$edge[0]] = [];
                }

                $edges[$edgeSetting['base']][$edge[0]][] = $edge[1];
            }
        }

        // bfs queue, start with zero index and both colors.
        $haveToRuns = [];
        $haveToRuns[] = [
            'base'  => 1,
            'count' => 0,
            'index' => 0,
        ];

        $haveToRuns[] = [
            'base'  => -1,
            'count' => 0,
            'index' => 0,
        ];

        $found = [];
        $alreadyRun = [];
        while(!empty($haveToRuns)) {
            // fetch bfs node
            $run   = array_shift($haveToRuns);
            $base  = $run['base'];
            $count = $run['count'];
            $index = $run['index'];
            // skip if already run
            if (!empty($alreadyRun[$base][$index])) {
                continue;
            }

            // save the run index
            $alreadyRun[$base][$index] = true;

            // save result only the first time,
            // which is the smallest path length,
            // since it's bfs
            if (!array_key_exists($index, $found)) {
                $found[$index] = $count;
            }

            // skip if no next nodes
            if (empty($edges[$base][$index])) {
                continue;
            }

            // prepare bfs nodes to run
            foreach ($edges[$base][$index] as $nextIndex) {
                $haveToRuns[] = [
                    // switch to another color
                    'base'  => $base * -1,
                    // path length count
                    'count' => $count + 1,
                    'index' => $nextIndex,
                ];
            }
         }

        $result = [];
        // if not in "$found", then the result should be -1
        for ($i = 0; $i < $n; $i++) {
            if (array_key_exists($i, $found)) {
                $result[] = $found[$i];
            } else {
                $result[] = -1;
            }
        }

        return $result;
    }
}
