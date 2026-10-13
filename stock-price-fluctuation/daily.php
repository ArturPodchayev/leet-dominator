class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxAlternatingSum($nums) {
        $new = array_map(fn($x) => $x ** 2, $nums);
        rsort($new);
        $half = ceil(count($new)/2);
        
        $sum = array_sum(array_slice($new,0,$half));
        $deduct = array_sum(array_slice($new,$half));
        
        return $sum - $deduct;
    }
}
