class Solution {

    function kthDistinct($arr, $k) {
        return array_keys(array_count_values($arr), 1)[$k - 1] ?? '';
    }
}
