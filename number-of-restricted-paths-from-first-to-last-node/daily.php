class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer[]
     */
    function arrayRankTransform($arr) {
        $result = $arr;
        sort($arr);
        $rank = 1;

        foreach ($arr as $key => $value) {
            if (isset($arr[$key-1]) && $arr[$key-1] < $arr[$key]) $rank++;

            $rankMap[$value] = $rank;
        }

        foreach($result as $key => $value) {
            $result[$key] = $rankMap[$value];
        }

        return $result;
    }
}
