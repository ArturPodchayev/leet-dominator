class Solution {

    /**
     * @param Integer $low
     * @param Integer $high
     * @return Integer[]
     */
   public static function sequentialDigits($low, $high) {
        $result = [];

        for ($digit = 1; $digit <= 9; $digit++) {
            $num = $digit;
            $next = $digit;

            while ($num <= $high && $next <= 9) {
                if ($num >= $low) {
                    $result[] = $num;
                }

                $next++;
                $num = $num * 10 + $next;
            }
        }

        sort($result);

        return $result;
    }
}
