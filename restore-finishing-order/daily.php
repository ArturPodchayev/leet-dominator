class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @param String $labels
     * @param Integer $k
     * @return Integer
     */
    
    function shortestPath(int $n, array $edges, string $labels, int $k) : int {
		$graph = [];

        foreach ($edges as [$u, $v, $w]){
        	$graph[$u][] = [$v, $w];
		}

    	$dis = array_fill(0, $n, array_fill(0, $k + 1, 2**31 - 1));

		$pq = new SplPriorityQueue();
		$dis[0][1] = 0;

		$pq->insert([0, 0, 1], 0);

		while(!$pq->isEmpty()){
			[$d, $x, $cnt] = $pq->extract();

			if ($d > $dis[$x][$cnt]) continue;
			
			if ($x == $n - 1) return $d;
			

			foreach ($graph[$x] as [$y, $w]) {
				$new_cnt =  $labels[$x] == $labels[$y] ? $cnt + 1 : 1;
				if ($new_cnt > $k) continue;

				$nd = $d + $w;
				if ($nd < $dis[$y][$new_cnt]){
					$dis[$y][$new_cnt] = $nd;
					$pq->insert([$nd, $y, $new_cnt], -$nd);
				}
			}
		}

		return -1;
    }
}
