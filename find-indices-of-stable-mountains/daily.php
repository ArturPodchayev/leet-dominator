class Solution {

    /**
     * @param String $num
     * @return Boolean
     */
    function sumGame($num) {
        $length = strlen($num);
        $half = $length / 2;

        $sum1 = 0; // Sum of the first half
        $count1 = 0; // Number of '?' in the first half
        $sum2 = 0; // Sum of the second half
        $count2 = 0; // Number of '?' in the second half

        // Calculate sums and count '?' for the first half
        for ($i = 0; $i < $half; $i++) {
            if ($num[$i] == '?') {
                $count1++;
            } else {
                $sum1 += intval($num[$i]);
            }
        }

        // Calculate sums and count '?' for the second half
        for ($i = $half; $i < $length; $i++) {
            if ($num[$i] == '?') {
                $count2++;
            } else {
                $sum2 += intval($num[$i]);
            }
        }

        // Total number of '?'
        $totalWildcards = $count1 + $count2;

        // If the total number of '?' is odd, Alice can always win
        if ($totalWildcards % 2 == 1) {
            return true;
        }

        // Calculate the difference in sums and the potential contributions
        $sumDifference = $sum1 - $sum2;
        $wildcardDifference = $count2 - $count1;

        // If the difference is not equal to (wildcardDifference * 4.5), Alice can win
        if ($sumDifference != $wildcardDifference * 4.5) {
            return true;
        }

        // Otherwise, Bob can force a tie, so Alice cannot win
        return false;
    }
}
