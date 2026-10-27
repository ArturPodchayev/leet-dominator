class Solution {

    /**
     * @param Integer $m
     * @param Integer $n
     * @return String[]
     */
    function createGrid($m, $n) {
        return [...[str_repeat(".", $n)], ...array_fill(0, $m - 1, Str_repeat("#", ($n - 1)) . ".")];
    }
}
