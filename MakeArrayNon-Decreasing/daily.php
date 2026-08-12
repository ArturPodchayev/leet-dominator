class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function maxSubarrayLength($nums, $k) {
        $left = 0;
    $freqMap = [];
    $maxLength = 0;
    
    for ($right = 0; $right < count($nums); $right++) {
        $freqMap[$nums[$right]] = $freqMap[$nums[$right]] ?? 0;
        $freqMap[$nums[$right]] = $freqMap[$nums[$right]] + 1;
        //frequencyMap.set(nums[end], (frequencyMap.get(nums[end]) ?? 0) + 1);
        // Shrink the window if the number of distinct elements exceeds k
        while ($freqMap[$nums[$right]] > $k) {
            $freqMap[$nums[$left]]--;
            if ($freqMap[$nums[$left]] === 0) {
                unset($freqMap[$nums[$left]]);
            }
            $left++;
        }
        
        $maxLength = max($maxLength, $right - $left + 1);
    }
    
    return $maxLength;
    }
}
