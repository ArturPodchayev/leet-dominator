class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function longestMonotonicSubarray($nums) {
        $n = count($nums);
    if ($n == 0) return 0;

    $inc_len = 1; // Length of increasing subarray
    $dec_len = 1; // Length of decreasing subarray
    $max_len = 1;

    for ($i = 1; $i < $n; $i++) {
        if ($nums[$i] > $nums[$i - 1]) {
            $inc_len++;
            $dec_len = 1; // Reset decreasing counter
        } elseif ($nums[$i] < $nums[$i - 1]) {
            $dec_len++;
            $inc_len = 1; // Reset increasing counter
        } else {
            $inc_len = 1;
            $dec_len = 1;
        }
        $max_len = max($max_len, $inc_len, $dec_len);
    }

    return $max_len;
    }
}
