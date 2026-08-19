class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $k
     * @return Integer
     */
    function getWinner($arr, $k) {
    $winner = $arr[0];
    $winCount = 0;

    for ($i = 1; $i < count($arr); $i++) {
        if ($arr[$i] > $winner) {
            $winner = $arr[$i];
            $winCount = 1;
        } else {
            $winCount++;
        }

        if ($winCount == $k) {
            return $winner;
        }
    }

    return $winner;
    }
}
