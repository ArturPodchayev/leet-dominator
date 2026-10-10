class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @param Integer $k1
     * @param Integer $k2
     * @return Integer
     */
    function minSumSquareDiff($nums1, $nums2, $k1, $k2) {
        $n = count($nums1);
        $k = $k1 + $k2;
		$freq = array_fill(0, 100001, 0);
		$diff_sum = 0;
		$max_diff = 0;

		for ($i = 0; $i < $n; $i++) {
			$n1 = $nums1[$i];
			$n2 = $nums2[$i];

			$diff = abs($n1 - $n2);

			if ($diff > 0){
				$freq[$diff]++;
				$diff_sum += $diff;
				$max_diff = max($max_diff, $diff);
			}
		}

		if ($diff_sum <= $k){
			return 0;
		}

		for ($d = $max_diff; $d > 0; $d--){
			if ($k == 0){
				break;
			}

			$take = min($freq[$d], $k);

			$freq[$d] -= $take;
			$freq[$d - 1] += $take;
			$k -= $take;
		}

		$result = 0;

		for ($d = 1; $d < $max_diff + 1; $d++){
			$result += $freq[$d] * $d * $d;
		}

		return $result;	
    }
}
