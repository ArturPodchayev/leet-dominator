class Solution {

    /**
     * @param String $s
     * @param String[][] $knowledge
     * @return String
     */
    function evaluate($s, $knowledge) {
        $lookup = array_column($knowledge, 1, 0);

        return preg_replace_callback('/\(([^)]*)\)/', function ($matches) use ($lookup) {
            return array_key_exists($matches[1], $lookup) ? $lookup[$matches[1]] : '?';
        }, $s);
    }
}
