class Solution {

    /**
     * @param Integer[][] $points
     * @param Integer[][] $queries
     * @return Integer[]
     */
    function countPoints($points, $queries) {
        $result = [];
        foreach ($queries as $index => $querie) {
            $pointInCircle = 0;
            foreach ($points as $point) {
                $xSquare = ($querie[0] - $point[0]) * ($querie[0] - $point[0]);
                $ySquare = ($querie[1] - $point[1]) * ($querie[1] - $point[1]);
                if (($xSquare + $ySquare) <= $querie[2] * $querie[2]) {
                    $pointInCircle++;
                }
            }
            $result[$index] = $pointInCircle;
        }
        return $result;
    }
}
