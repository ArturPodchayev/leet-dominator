class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function maxDepth($s) {
        $max = $count = 0;

        foreach (str_split($s) as $e)
        {
            if($e == "(") $count += 1;
            if($e == ")") $count -= 1;

            $max = max($max, $count);
        }

        return $max;
    }
}
