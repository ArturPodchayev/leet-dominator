class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function canAliceWin($nums) {
        $singleDigitSum = 0;
        $doubleDigitSum = 0;

        foreach($nums as $num) {
            if($num < 10) {
                $singleDigitSum += $num;
            } else {
                $doubleDigitSum += $num;
            }
        }

        return $singleDigitSum > $doubleDigitSum || $singleDigitSum < $doubleDigitSum;
    }
}
