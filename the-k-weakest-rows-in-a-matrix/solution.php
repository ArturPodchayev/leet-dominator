class Solution {
    function kWeakestRows($mat, $k) {
        $matNew = array_map('array_sum', $mat);
        asort($matNew);
        return array_slice(array_keys($matNew), 0, $k);
    }
}
