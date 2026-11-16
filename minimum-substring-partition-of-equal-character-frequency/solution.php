    /**
     * @param String $s
     * @return Integer
     */
    function minimumSubstringsInPartition($s) {
        $maxFrequency = array_fill(0, 26, 0);
        foreach (str_split($s) as $char) {
            $maxFrequency[ord($char) - ord('a')]++;
        }

        $dp = array_fill(0, strlen($s) + 1, INF);
        $dp[0] = 0;

        for ($i = 1; $i <= strlen($s); $i++) {
            $freq = array_fill(0, 26, 0);
            $maxInWindow = 0;

            for ($j = $i; $j > 0; $j--) {
                $index = ord($s[$j - 1]) - ord('a');
                $freq[$index]++;
                $maxInWindow = max($maxInWindow, $freq[$index]);

                $valid = true;
                for ($k = 0; $k < 26; $k++) {
                    if ($freq[$k] > 0 && $freq[$k] < $maxInWindow) {
                        $valid = false;
                        break;
                    }
                }

                if ($valid) {
                    $dp[$i] = min($dp[$i], $dp[$j - 1] + 1);
                }
            }
        }
        return $dp[strlen($s)];
    }
}
