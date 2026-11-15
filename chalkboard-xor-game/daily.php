function numOfSubarrays($arr) {
    $MOD = 1000000007;
    $odd_count = 0;
    $even_count = 1;
    $current_sum = 0;
    $result = 0;

    foreach ($arr as $num) {
        $current_sum += $num;

        if ($current_sum % 2 == 0) {
            $result = ($result + $odd_count) % $MOD;
            $even_count++;
        } else {
            $result = ($result + $even_count) % $MOD;
            $odd_count++;
        }
    }

    return $result;
}
