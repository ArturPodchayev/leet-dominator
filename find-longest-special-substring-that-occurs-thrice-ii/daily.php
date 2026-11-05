/**
 * @param Integer[] $arr1
 * @param Integer[] $arr2
 * @param Integer $d
 * @return Integer
 */
function findTheDistanceValue($arr1, $arr2, $d) {
    sort($arr1);
    sort($arr2);
    $arr1Len = count($arr1);
    $cnt = 0;
    for ($i = 0; $i < $arr1Len; $i++) {
        $low = $arr1[$i] - $d; //6
        $high = $arr1[$i] + $d; // 10

        $left = 0;
        $right = count($arr2) - 1;

        $counter = 0;
        $flag = false;
        while ($left <= $right) {

            $mid = floor($left + ($right - $left) / 2); //1
            if($arr2[$mid] <= $high && $arr2[$mid] >= $low){
                $flag = true;
                break;
            }else if ($arr2[$mid] > $high) {
                $right = $mid - 1;
            }else if ($arr2[$mid] < $low) {
                $left = $mid + 1;
            } 
            //echo '<br>' . $arr1[$i] . '~' . $low . '===' . $mid. '===' . $high . '~' . $arr2[$mid];

        }
        if($flag){continue;}
        $cnt++;

    }
    return $cnt;
}
