class Solution {

    function smallestSubsequence($s) {
        $lastIndex = array_fill(0, 26, -1);
        $seen = array_fill(0, 26, false);
        $stack = [];

        for ($i = 0; $i < strlen($s); $i++) {
            $lastIndex[ord($s[$i]) - ord('a')] = $i;
        }

        for ($i = 0; $i < strlen($s); $i++) {
            $ch = $s[$i];
            if ($seen[ord($ch) - ord('a')]) continue;
            while (!empty($stack) && $ch < end($stack) && $i < $lastIndex[ord(end($stack)) - ord('a')]) {
                $seen[ord(array_pop($stack)) - ord('a')] = false;
            }
            $stack[] = $ch;
            $seen[ord($ch) - ord('a')] = true;
        }

        $result = "";
        foreach ($stack as $char) {
            $result .= $char;
        }
        
        return $result;
    }
}
