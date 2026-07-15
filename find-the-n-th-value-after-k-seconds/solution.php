class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function valueAfterKSeconds($n, $k) {
        // Create an array of length n filled with 1s.
        $array = array_fill(0, $n, 1);

        // Iterate k times.
        for ($i = 0; $i < $k; $i++) {
            // Iterate through the array from the second element to the last.
            for ($j = 1; $j < $n; $j++) {
                // Update each element to be the sum of all its preceding elements plus itself.
                $array[$j] = ($array[$j] + $array[$j - 1]) % (10 ** 9 + 7);
            }
        }

        // Return the value of the last element in the array.
        return $array[$n - 1];
    }
}
