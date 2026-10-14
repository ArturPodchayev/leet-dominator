class Solution {

    /**
     * @param Integer $num
     * @param Integer $sum
     * @return String
     */
    function maxSumOfSquares($num, $sum) {
        $ans = '';

		while($sum > 0){
			$a = min($sum, 9);
			$sum -= $a;
			$ans .= $a;
		}

		if(strlen($ans) > $num) return "";
		$ans .= str_repeat('0', $num - strlen($ans));
		return $ans;
    }
}
