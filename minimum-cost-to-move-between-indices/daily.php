class Solution {
    function maxPalindromes($s, $k) {
        $n = strlen($s);
        $dp = array_fill(0, $n + 1, 0);

        $isPalindrome = function($l, $r) use (&$s) {
            while ($l < $r) {
                if ($s[$l++] !== $s[$r--]) return false;
            }
            return true;
        };

        for ($i = 0; $i < $n; ++$i) {
            $dp[$i + 1] = max($dp[$i + 1], $dp[$i]);

            if ($i - $k + 1 >= 0 && $isPalindrome($i - $k + 1, $i)) {
                $dp[$i + 1] = max($dp[$i + 1], $dp[$i - $k + 1] + 1);
            }

            if ($i - $k >= 0 && $isPalindrome($i - $k, $i)) {
                $dp[$i + 1] = max($dp[$i + 1], $dp[$i - $k] + 1);
            }
        }

        return $dp[$n];
    }
}
