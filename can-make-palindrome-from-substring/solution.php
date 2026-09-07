class Solution {

    private $occurrences;

    function calculateSeenAlphabets($s) {
        $occurrences = [];
        $length = strlen($s);

        $occurrences[0] = array_fill(0, 26, 0);
        $occurrences[0][ord($s[0]) - ord('a')] = 1;

        for ($i = 1; $i < $length; $i++) {
            $occurrences[$i] = $occurrences[$i - 1];

            $occurrences[$i][ord($s[$i]) - ord('a')]++;
        }

        $this->occurrences = $occurrences;
    }

    function canBeMadePalindrome($left, $right, $numberOfOperationsLimit) {
        $numberOfOdds = 0;

        if ($left == 0) {
            for ($i = 0; $i < 26; $i++) {
                if ($this->occurrences[$right][$i] % 2 == 1) {
                    $numberOfOdds++;
                }
            }
        } else {
            for ($i = 0; $i < 26; $i++) {
                if (($this->occurrences[$right][$i] - $this->occurrences[$left - 1][$i]) % 2 == 1) {
                    $numberOfOdds++;
                }
            }
        }

        return intval($numberOfOdds / 2) <= $numberOfOperationsLimit;
    }

    function canMakePaliQueries($s, $queries) {
        $this->calculateSeenAlphabets($s);
        $results = [];

        foreach ($queries as $query) {
            $results[] = $this->canBeMadePalindrome($query[0], $query[1], $query[2]);
        }

        return $results;
    }
}
