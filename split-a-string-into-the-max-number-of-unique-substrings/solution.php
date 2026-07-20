class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function backtrack($s, $start, &$uniqueSubstrings) {
    // If we've reached the end of the string, return the size of the unique substrings set
    if ($start === strlen($s)) {
        return count($uniqueSubstrings);
    }

    $maxCount = 0;
    // Iterate through the string from the current start index
    for ($end = $start + 1; $end <= strlen($s); $end++) {
        // Get the substring from the start to the current end index
        $substring = substr($s, $start, $end - $start);
        
        // If the substring is not already in the set of unique substrings
        if (!in_array($substring, $uniqueSubstrings)) {
            // Add it to the set
            $uniqueSubstrings[] = $substring;
            // Recursively continue with the next substring
            $maxCount = max($maxCount, $this->backtrack($s, $end, $uniqueSubstrings));
            // Backtrack by removing the substring from the set
            array_pop($uniqueSubstrings);
        }
    }

    return $maxCount;
}
    function maxUniqueSplit($s) {
     // Initialize an empty array to track unique substrings
    $uniqueSubstrings = [];
    // Start the backtracking process from index 0
    return $this->backtrack($s, 0, $uniqueSubstrings);
    }
}
