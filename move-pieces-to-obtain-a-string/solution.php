class Solution
{

    /**
     * @param String $start
     * @param String $target
     * @return Boolean
     */
    function canChange($start, $target)
    {
        if (strlen($start) !== strlen($target)) {
            return false;
        }

            // Remove all blank spaces and check if sequence of L and R matches
    if (str_replace('_', '', $start) !== str_replace('_', '', $target)) {
        return false;
    }
    
    $n = strlen($start);
    
    // Get positions of non-blank pieces
    $startPositions = [];
    $targetPositions = [];
    
    // Collect positions for start string
    for ($i = 0; $i < $n; $i++) {
        if ($start[$i] !== '_') {
            $startPositions[] = [$start[$i], $i];
        }
    }
    
    // Collect positions for target string
    for ($i = 0; $i < $n; $i++) {
        if ($target[$i] !== '_') {
            $targetPositions[] = [$target[$i], $i];
        }
    }
    
    // If different number of pieces, return false
    if (count($startPositions) !== count($targetPositions)) {
        return false;
    }
    
    // Check each piece's position
    $count = count($startPositions);
    for ($i = 0; $i < $count; $i++) {
        [$startCh, $startI] = $startPositions[$i];
        [$targetCh, $targetI] = $targetPositions[$i];
        
        // For L pieces, target position should be at same or left position
        if ($startCh === 'L' && $startI < $targetI) {
            return false;
        }
        
        // For R pieces, target position should be at same or right position
        if ($startCh === 'R' && $startI > $targetI) {
            return false;
        }
    }
    
    return true;
    }
}
