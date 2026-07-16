class Solution {

    /**
     * @param Integer[] $target
     * @param Integer $n
     * @return String[]
     */
    function buildArray($target, $n) {
        $map = [];
        $len = count($target);
        $max = $target[$len - 1];
        for ($i = 0; $i < $len; $i++) {
            $map[$target[$i]]= 1;
        }

        $res = [];

        for ($i = 1; $i <= $max; $i++) {
            $res []= "Push";
            if ($map[$i] != 1) {
                $res []= "Pop";
            }
        }

        return $res;
    }
}
